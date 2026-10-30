import { useState, useEffect } from 'react';
import styles from './BackToTop.module.css';
import { FaArrowUp } from 'react-icons/fa6';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 350) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            type="button"
            className={`${styles.backToTopBtn} ${isVisible ? styles.visible : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            title="Back to top"
        >
            <FaArrowUp />
        </button>
    );
};

export default BackToTop;
