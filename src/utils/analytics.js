// ============================================================================
// GOOGLE ANALYTICS 4 (GA4) & CONVERSION EVENT TRACKING (Tech Fix #10)
// Tracks:
//   - SPA route `page_view` transitions
//   - `book_demo_click` on every Calendly demo button
//   - `start_trial_click` on every live.giropie.com/signup trial button
//   - `contact_form_submit` on form submissions
// Set VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX in Vercel Environment Variables to
// stream live events to Google Analytics 4.
// ============================================================================

const GA_MEASUREMENT_ID =
    typeof import.meta !== 'undefined' && import.meta.env
        ? import.meta.env.VITE_GA_MEASUREMENT_ID || ''
        : '';

let isInitialized = false;

export function initAnalytics() {
    if (typeof window === 'undefined' || isInitialized) return;
    isInitialized = true;

    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== 'function') {
        window.gtag = function gtag() {
            window.dataLayer.push(arguments);
        };
    }

    if (GA_MEASUREMENT_ID) {
        const existingScript = document.querySelector(
            `script[src*="googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"]`
        );
        if (!existingScript) {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
            document.head.appendChild(script);
        }

        window.gtag('js', new Date());
        window.gtag('config', GA_MEASUREMENT_ID, {
            send_page_view: false
        });
    }

    // Delegated listener captures every "Book a demo" & "Start your trial" CTA sitewide
    document.addEventListener(
        'click',
        (event) => {
            const anchor = event.target && event.target.closest ? event.target.closest('a[href]') : null;
            if (!anchor) return;

            const href = anchor.getAttribute('href') || '';
            const label = (anchor.textContent || '').replace(/\s+/g, ' ').trim();
            const pagePath = window.location.pathname;

            if (href.includes('calendly.com/giropie/giropie-demo')) {
                trackEvent('book_demo_click', {
                    link_url: href,
                    link_text: label,
                    page_path: pagePath
                });
            } else if (href.includes('live.giropie.com/signup')) {
                trackEvent('start_trial_click', {
                    link_url: href,
                    link_text: label,
                    page_path: pagePath
                });
            }
        },
        { capture: true }
    );
}

export function trackEvent(eventName, params = {}) {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];

    if (typeof window.gtag === 'function' && GA_MEASUREMENT_ID) {
        window.gtag('event', eventName, params);
    } else {
        window.dataLayer.push({
            event: eventName,
            ...params
        });
    }
}

export function trackPageView(pathname, title) {
    if (typeof window === 'undefined') return;
    trackEvent('page_view', {
        page_path: pathname,
        page_title: title || document.title,
        page_location: window.location.href
    });
}

