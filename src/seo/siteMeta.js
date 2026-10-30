// ============================================================================
// CENTRAL SEO METADATA & SCHEMA.ORG STRUCTURED DATA (Tech Fixes #2, #3, #4, #6)
// Single source of truth used by BOTH:
//   1. scripts/prerender.mjs (build-time static HTML <head> & JSON-LD injection)
//   2. src/components/ScrollToTop.jsx (client-side SPA route transitions)
// ============================================================================

import { faqData } from '../data/faqData.js';

/**
 * Resolves the canonical public origin without a trailing slash.
 * - On Vercel builds, VERCEL_PROJECT_PRODUCTION_URL resolves to the active
 *   production domain (e.g. giropie-frontend.vercel.app on staging today, and
 *   automatically www.giropie.com once the custom domain is attached).
 * - Can also be explicitly overridden via VITE_SITE_URL.
 */
export function resolveSiteUrl(explicitUrl) {
    const raw =
        explicitUrl ||
        (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SITE_URL) ||
        (typeof window !== 'undefined' && window.location ? window.location.origin : '') ||
        'https://giropie-frontend.vercel.app';
    return String(raw).replace(/\/+$/, '');
}

/**
 * Unique titles (< 60 chars on subpages; Home title preserved per Tech Fix #3)
 * and unique meta descriptions (< 160 chars on every page per Tech Fix #4).
 */
export const ROUTE_META = {
    '/': {
        title: 'GIROPie | Connected Invoice-to-Cash & Working Capital Automation',
        description:
            'Automate B2B invoice collections on the due date with buyer-approved Pay-by-Dates, NPCI eMandate/NACH debits, and TallyPrime reconciliation.',
        canonicalPath: '/'
    },
    '/about': {
        title: 'About GIROPie | Founders & Cash-Flow Platform',
        description:
            'Meet GIROPie founders Manjunatha NS and Hemalatha BS and learn how PepperTree.AI connects suppliers and buyers around a shared invoice layer.',
        canonicalPath: '/about'
    },
    '/features': {
        title: 'Platform Features & Capabilities | GIROPie',
        description:
            'Explore GIROPie AR/AP automation, Pay-by-Date tracking, live cash-flow aging dashboards, on-the-go reconciliation, and upcoming trade finance.',
        canonicalPath: '/features'
    },
    '/pricing': {
        title: 'Subscription & Mandate Pricing Plans | GIROPie',
        description:
            'Review GIROPie Micro, SMB, Growth, and Enterprise plans: platform subscription plus a per-transaction fee quoted before each mandate request.',
        canonicalPath: '/pricing'
    },
    '/how-it-works': {
        title: 'How GIROPie Works | 4-Step Invoice-to-Cash Flow',
        description:
            'See how GIROPie syncs TallyPrime invoices, confirms buyer Pay-by-Dates, executes NPCI eMandate/NACH debits, and reconciles automatically.',
        canonicalPath: '/how-it-works'
    },
    '/why-mandates': {
        title: 'Why Bank Mandates & UPI MDR Calculator | GIROPie',
        description:
            'Calculate UPI merchant fees above ₹2,000 and see why B2B suppliers switch recurring trade credit collections to NPCI eMandate and NACH.',
        canonicalPath: '/why-mandates'
    },
    '/distributors': {
        title: 'For Distributors & Dealer Networks | GIROPie',
        description:
            'Automate wholesale distributor receivables, dealer Pay-by-Dates, and TallyPrime reconciliation. Estimate working capital freed from DSO.',
        canonicalPath: '/distributors'
    },
    '/logistics': {
        title: 'CollectX for Logistics & Freight Billing | GIROPie',
        description:
            'Close the gap between freight delivery and shipper settlement with CollectX invoice verification, split schedules, and bank mandate debits.',
        canonicalPath: '/logistics'
    },
    '/trust': {
        title: 'Trust, Indian Patent & Compliance | GIROPie',
        description:
            'Explore GIROPie granted Indian patent architecture, non-custodial NPCI eMandate/NACH & Easebuzz payment rails, security, and governance.',
        canonicalPath: '/trust'
    },
    '/contact': {
        title: 'Contact & Book a 30-Minute Demo | GIROPie',
        description:
            'Book a 30-minute GIROPie product walkthrough on Calendly or send your details to automate B2B invoice collections and reconciliation.',
        canonicalPath: '/contact'
    },
    '/careers': {
        title: 'Careers & Open Opportunities | GIROPie',
        description:
            "Join PepperTree.AI in Bengaluru to build GIROPie, India's patented B2B invoice-to-cash and bank mandate automation platform for MSMEs.",
        canonicalPath: '/careers'
    },
    '/news': {
        title: 'News, Awards & Recognitions | GIROPie',
        description:
            'Read press updates, government awards, NASSCOM incubation milestones, and startup recognitions earned by PepperTree.AI and GIROPie.',
        canonicalPath: '/news'
    },
    '/faq': {
        title: 'Frequently Asked Questions | GIROPie',
        description:
            'Answers to common questions on GIROPie linked and unlinked buyer workflows, Pay-by-Date scheduling, bank mandate debits, and per-invoice pricing.',
        canonicalPath: '/faq'
    },
    '/blog': {
        title: 'Blog & Working Capital Insights | GIROPie',
        description:
            'Practical guides and insights on B2B invoice-to-cash automation, Pay-by-Date commitments, working capital cycles, and AR/AP reconciliation.',
        canonicalPath: '/blog'
    },
    '/blog/streamlining-your-finances-with-invoice-to-cash-i2c-automation': {
        title: 'Invoice-to-Cash (I2C) Automation Guide | GIROPie',
        description:
            'Learn how Invoice-to-Cash (I2C) automation streamlines invoicing, AR collections, AP scheduling, and ledger reconciliation for B2B businesses.',
        canonicalPath: '/blog/streamlining-your-finances-with-invoice-to-cash-i2c-automation',
        ogType: 'article'
    },
    '/blog/by-what-date-my-buyer-is-going-to-pay': {
        title: 'Getting Buyer Pay-by-Date Commitments | GIROPie',
        description:
            'Why securing invoice Pay-by-Date commitments is difficult in B2B trade credit and how collaborative invoice tracking improves cash forecasting.',
        canonicalPath: '/blog/by-what-date-my-buyer-is-going-to-pay',
        ogType: 'article'
    },
    '/blog/the-importance-of-spontaneous-working-capital': {
        title: 'Spontaneous Working Capital in B2B Trade | GIROPie',
        description:
            'Understand how trade credit and spontaneous working capital impact supplier-buyer cash cycles and disciplined payable-receivable execution.',
        canonicalPath: '/blog/the-importance-of-spontaneous-working-capital',
        ogType: 'article'
    },
    '/blog/integrated-ar-ap-payment-solution': {
        title: 'Integrated AR & AP Payment Workflows | GIROPie',
        description:
            'Discover why connecting accounts receivable, accounts payable, and bank mandate settlement on one shared invoice layer reduces DSO.',
        canonicalPath: '/blog/integrated-ar-ap-payment-solution',
        ogType: 'article'
    },
    '/privacy': {
        title: 'Privacy Policy | GIROPie',
        description:
            "Read PepperTree.AI Pvt. Ltd.'s Privacy Policy covering GIROPie platform data handling, security controls, retention, and grievance redressal.",
        canonicalPath: '/privacy'
    }
};

// Route aliases mapped to canonical metadata
const ALIAS_ROUTES = {
    '/resources/news': '/news',
    '/resources/faq': '/faq',
    '/resources/blog': '/blog',
    '/privacy-policy': '/privacy'
};

export function getMetaForPath(pathname, hash = '') {
    const cleanPath = (pathname || '/').replace(/\/+$/, '') || '/';

    if (cleanPath === '/about' && hash === '#contact') {
        return {
            title: 'Contact & Book a Demo | GIROPie',
            description:
                'Get in touch with GIROPie or book a 30-minute walkthrough to automate B2B invoice collections and TallyPrime reconciliation.',
            canonicalPath: '/about'
        };
    }

    const mapped = ALIAS_ROUTES[cleanPath] || cleanPath;
    if (ROUTE_META[mapped]) {
        return ROUTE_META[mapped];
    }

    if (mapped.startsWith('/post/')) {
        const slug = mapped.replace('/post/', '/blog/');
        if (ROUTE_META[slug]) return ROUTE_META[slug];
    }

    return ROUTE_META['/'];
}

/**
 * Organization JSON-LD for Home page (Tech Fix #6 & P0 #9 address No. 1139)
 */
export function buildOrganizationJsonLd(siteUrl) {
    const base = resolveSiteUrl(siteUrl);
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'GIROPie',
        legalName: 'PepperTree.AI Pvt. Ltd.',
        url: `${base}/`,
        logo: `${base}/giropie-logo.png`,
        description:
            'B2B invoice-to-cash and receivable mandate automation platform built on NPCI eMandate and NACH with TallyPrime integration.',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'No. 1139, Maruthi Complex, 3rd Floor, BEML Layout, 3rd Stage',
            addressLocality: 'Bengaluru',
            addressRegion: 'Karnataka',
            postalCode: '560098',
            addressCountry: 'IN'
        },
        founder: [
            {
                '@type': 'Person',
                name: 'Manjunatha NS',
                jobTitle: 'Founder and CEO'
            },
            {
                '@type': 'Person',
                name: 'Hemalatha BS',
                jobTitle: 'Founder'
            }
        ],
        sameAs: [
            'https://www.linkedin.com/company/peppertreeai',
            'https://x.com/PeppertreeAI',
            'https://www.youtube.com/@giropie',
            'https://www.facebook.com/giropie/'
        ]
    };
}

/**
 * FAQPage JSON-LD for /faq (Tech Fix #6)
 */
export function buildFaqPageJsonLd() {
    const allItems = [
        ...(faqData.about || []),
        ...(faqData.operational || []),
        ...(faqData.pricing || [])
    ];

    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: allItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
            }
        }))
    };
}

export function getJsonLdForPath(pathname, siteUrl) {
    const cleanPath = (pathname || '/').replace(/\/+$/, '') || '/';
    if (cleanPath === '/') {
        return buildOrganizationJsonLd(siteUrl);
    }
    if (cleanPath === '/faq' || cleanPath === '/resources/faq') {
        return buildFaqPageJsonLd();
    }
    return null;
}

/**
 * All canonical routes pre-rendered into static HTML during `npm run build`
 */
export const PRERENDER_ROUTES = Object.keys(ROUTE_META);

