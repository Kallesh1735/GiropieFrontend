import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Ensures every page navigation in the SPA starts at the very top (x=0, y=0),
 * resolving the issue where navigating to another page or navigating back
 * retains previous scroll positions midway or at the bottom.
 */
const PAGE_TITLES = {
    '/': 'GIROPie | Connected Invoice-to-Cash & Working Capital Automation',
    '/about': 'About Us | GIROPie',
    '/features': 'Platform Features & Capabilities | GIROPie',
    '/pricing': 'Transparent Pricing Plans | GIROPie',
    '/gofundz': 'GOFundZ Trade Finance Solutions | GIROPie',
    '/careers': 'Careers & Opportunities | GIROPie',
    '/news': 'News & Recognitions | GIROPie',
    '/resources/news': 'News & Recognitions | GIROPie',
    '/faq': 'Frequently Asked Questions | GIROPie',
    '/resources/faq': 'Frequently Asked Questions | GIROPie',
    '/blog': 'Blog & Industry Insights | GIROPie',
    '/resources/blog': 'Blog & Industry Insights | GIROPie',
    '/contact': 'Contact Us | GIROPie',
    '/privacy': 'Privacy Policy | GIROPie'
};

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Prevent browser's default scroll restoration from conflicting with SPA routing
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Dynamically update document title per route
        if (pathname === '/about' && hash === '#contact') {
            document.title = 'Contact Us | GIROPie';
        } else {
            document.title = PAGE_TITLES[pathname] || 'GIROPie | Connected Invoice-to-Cash & Working Capital Automation';
        }

        // If there's an anchor hash (e.g. #contact, #apply-portal), scroll to it smoothly
        if (hash) {
            const timer = setTimeout(() => {
                const targetElement = document.querySelector(hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            return () => clearTimeout(timer);
        }

        // Instantly reset scroll to top of window and root document when navigating without a hash
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
