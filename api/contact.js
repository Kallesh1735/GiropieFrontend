// ============================================================================
// VERCEL SERVERLESS ENDPOINT: POST /api/contact (Tech Fix #9)
// Handles contact & demo inquiries from the website with:
//   1. Multi-layer spam protection (Honeypot + Minimum Fill Time + Optional
//      Cloudflare Turnstile verification + Per-IP Burst Rate Limiting)
//   2. Monitored Mailbox Delivery (via Resend API or Email Webhook)
//   3. CRM Lead Routing (via configurable CRM Webhook URL)
// ============================================================================

const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const ipBuckets = new Map();

function isRateLimited(ip) {
    const now = Date.now();
    const record = ipBuckets.get(ip);
    if (!record || now - record.windowStart > RATE_LIMIT_WINDOW_MS) {
        ipBuckets.set(ip, { windowStart: now, count: 1 });
        return false;
    }
    record.count += 1;
    return record.count > RATE_LIMIT_MAX_REQUESTS;
}

function escapeHtml(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

async function verifyTurnstileToken(token, ip) {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) return true; // Skip if Turnstile is not enabled yet
    if (!token) return false;

    const formData = new URLSearchParams();
    formData.append('secret', secret);
    formData.append('response', token);
    if (ip) formData.append('remoteip', ip);

    const resp = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: formData
    });
    if (!resp.ok) return false;
    const data = await resp.json();
    return Boolean(data.success);
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ ok: false, error: 'Method not allowed.' });
    }

    const clientIp =
        (req.headers['x-forwarded-for'] || '').toString().split(',')[0].trim() ||
        req.socket?.remoteAddress ||
        'unknown';

    if (isRateLimited(clientIp)) {
        return res.status(429).json({
            ok: false,
            error: 'Too many requests. Please wait a minute and try again.'
        });
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const {
        company = '',
        firstName = '',
        lastName = '',
        email = '',
        phone = '',
        website_url = '',
        elapsedMs = 0,
        turnstileToken = '',
        pagePath = '/about'
    } = body;

    // 1. Honeypot & Automated Bot Timing Guard
    if (String(website_url).trim() !== '' || (Number(elapsedMs) > 0 && Number(elapsedMs) < 1200)) {
        // Silently return 200 to avoid tipping off automated spam bots
        return res.status(200).json({ ok: true });
    }

    // 2. Optional Cloudflare Turnstile Verification
    const turnstileValid = await verifyTurnstileToken(turnstileToken, clientIp);
    if (!turnstileValid) {
        return res.status(400).json({
            ok: false,
            error: 'Security verification failed. Please refresh and try again.'
        });
    }

    // 3. Field Validation & Sanitization
    const cleanCompany = String(company).trim().slice(0, 160);
    const cleanFirst = String(firstName).trim().slice(0, 80);
    const cleanLast = String(lastName).trim().slice(0, 80);
    const cleanEmail = String(email).trim().toLowerCase().slice(0, 160);
    const cleanPhone = String(phone).trim().slice(0, 32);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneDigits = cleanPhone.replace(/\D/g, '');

    if (!cleanCompany || !cleanFirst || !emailRegex.test(cleanEmail) || phoneDigits.length < 7) {
        return res.status(400).json({
            ok: false,
            error: 'Please enter a valid company name, first name, business email, and phone number.'
        });
    }

    const leadPayload = {
        source: 'giropie-website',
        pagePath: String(pagePath).slice(0, 120),
        submittedAt: new Date().toISOString(),
        company: cleanCompany,
        firstName: cleanFirst,
        lastName: cleanLast,
        fullName: `${cleanFirst}${cleanLast ? ` ${cleanLast}` : ''}`,
        email: cleanEmail,
        phone: cleanPhone
    };

    const deliveryTasks = [];

    // 4A. Deliver to Monitored Mailbox via Resend API (when RESEND_API_KEY is configured)
    const resendApiKey = process.env.RESEND_API_KEY;
    const notifyTo = process.env.CONTACT_NOTIFY_EMAIL || 'info@giropie.com';
    const notifyFrom = process.env.CONTACT_FROM_EMAIL || 'GIROPie Website <notifications@giropie.com>';

    if (resendApiKey) {
        const htmlBody = `
            <div style="font-family: Inter, Arial, sans-serif; color: #0f172a; line-height: 1.6;">
                <h2 style="color: #1C4E80; margin-bottom: 12px;">New GIROPie Website Inquiry</h2>
                <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
                    <tr><td style="padding: 6px 0; font-weight: 600;">Company:</td><td>${escapeHtml(leadPayload.company)}</td></tr>
                    <tr><td style="padding: 6px 0; font-weight: 600;">Name:</td><td>${escapeHtml(leadPayload.fullName)}</td></tr>
                    <tr><td style="padding: 6px 0; font-weight: 600;">Email:</td><td><a href="mailto:${escapeHtml(leadPayload.email)}">${escapeHtml(leadPayload.email)}</a></td></tr>
                    <tr><td style="padding: 6px 0; font-weight: 600;">Phone:</td><td>${escapeHtml(leadPayload.phone)}</td></tr>
                    <tr><td style="padding: 6px 0; font-weight: 600;">Submitted At:</td><td>${escapeHtml(leadPayload.submittedAt)}</td></tr>
                </table>
            </div>
        `;

        deliveryTasks.push(
            fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${resendApiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    from: notifyFrom,
                    to: notifyTo.split(',').map((addr) => addr.trim()).filter(Boolean),
                    reply_to: leadPayload.email,
                    subject: `[GIROPie Inquiry] ${leadPayload.company} — ${leadPayload.fullName}`,
                    html: htmlBody
                })
            })
        );
    }

    // 4B. Optional Secondary Email Webhook (e.g. Google Workspace / Power Automate / SMTP relay)
    if (process.env.CONTACT_EMAIL_WEBHOOK_URL) {
        deliveryTasks.push(
            fetch(process.env.CONTACT_EMAIL_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(leadPayload)
            })
        );
    }

    // 4C. Deliver Lead to CRM Webhook (e.g. Zoho CRM, HubSpot, Freshsales, Pipedrive)
    if (process.env.CRM_WEBHOOK_URL) {
        deliveryTasks.push(
            fetch(process.env.CRM_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(process.env.CRM_WEBHOOK_AUTH_HEADER
                        ? { Authorization: process.env.CRM_WEBHOOK_AUTH_HEADER }
                        : {})
                },
                body: JSON.stringify(leadPayload)
            })
        );
    }

    if (deliveryTasks.length > 0) {
        const results = await Promise.allSettled(deliveryTasks);
        const allFailed = results.every(
            (r) => r.status === 'rejected' || (r.status === 'fulfilled' && !r.value.ok)
        );
        if (allFailed) {
            console.error('[GIROPie /api/contact] Downstream delivery failed:', results);
            return res.status(502).json({
                ok: false,
                error: 'Unable to route your inquiry right now. Please try again or book a demo directly.'
            });
        }
    } else {
        // Structured server log on staging until mailbox/CRM secrets are added in Vercel Settings
        console.info('[GIROPie /api/contact] Lead captured (configure RESEND_API_KEY / CRM_WEBHOOK_URL for live routing):', {
            company: leadPayload.company,
            email: leadPayload.email,
            submittedAt: leadPayload.submittedAt
        });
    }

    return res.status(200).json({
        ok: true,
        message:
            'Thank you — we have received your details and our team will reach out within one business day.'
    });
}

