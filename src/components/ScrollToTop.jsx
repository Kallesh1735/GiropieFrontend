import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Ensures every page navigation in the SPA starts at the very top (x=0, y=0),
 * resolving the issue where navigating to another page or navigating back
 * retains previous scroll positions midway or at the bottom.
 */
const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Prevent browser's default scroll restoration from conflicting with SPA routing
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // If there's an anchor hash (e.g. #apply-portal), scroll to it smoothly
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }

        // Instantly reset scroll to top of window and root document
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
