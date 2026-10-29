import React, { useState, useRef, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/giropie-logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
    const closeTimerRef = useRef(null);

    // Close mobile menu on page navigation
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsMobileResourcesOpen(false);
    }, [location.pathname, location.hash]);

    const handleMouseEnter = () => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimerRef.current = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 200); // 200ms grace period prevents accidental disappearing during cursor movement
    };

    const handleItemClick = () => {
        if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
    };

    const handleContactClick = () => {
        setIsMobileMenuOpen(false);
        if (location.pathname === '/about') {
            const el = document.getElementById('contact');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const isResourcesActive =
        location.pathname === '/news' ||
        location.pathname === '/faq' ||
        location.pathname === '/blog' ||
        location.pathname.startsWith('/resources');

    return (
        <div className={styles.navbarWrapper}>
            <nav className={styles.navbar}>
                {/* Brand Logo */}
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <img src={logo} alt="GIROPie Logo" className={styles.logoImg} />
                </Link>

                {/* Desktop Navigation Links */}
                <ul className={styles.navLinks}>
                    <li className={location.pathname === '/' ? styles.active : ''}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                    </li>
                    <li className={location.pathname === '/about' && location.hash !== '#contact' ? styles.active : ''}>
                        <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link>
                    </li>
                    <li className={location.pathname === '/features' ? styles.active : ''}>
                        <Link to="/features" style={{ textDecoration: 'none', color: 'inherit' }}>Features</Link>
                    </li>
                    <li className={location.pathname === '/pricing' ? styles.active : ''}>
                        <Link to="/pricing" style={{ textDecoration: 'none', color: 'inherit' }}>Pricing</Link>
                    </li>
                    <li className={location.pathname === '/gofundz' ? styles.active : ''}>
                        <Link to="/gofundz" style={{ textDecoration: 'none', color: 'inherit' }}>GOFundZ</Link>
                    </li>
                    <li className={location.pathname === '/careers' ? styles.active : ''}>
                        <Link to="/careers" style={{ textDecoration: 'none', color: 'inherit' }}>Careers</Link>
                    </li>
                    <li
                        className={`${styles.dropdownParent} ${isResourcesActive ? styles.active : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            className={styles.dropdownTrigger}
                            onClick={() => setIsDropdownOpen(prev => !prev)}
                            role="button"
                            tabIndex={0}
                        >
                            <span>Resources</span>
                            <svg
                                className={`${styles.dropdownChevron} ${isDropdownOpen ? styles.chevronRotated : ''}`}
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {/* Dropdown Menu */}
                        <div
                            className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownOpen : ''}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to="/news" className={styles.dropdownItem} onClick={handleItemClick}>
                                News
                            </Link>
                            <div className={styles.dropdownDivider} />
                            <Link to="/faq" className={styles.dropdownItem} onClick={handleItemClick}>
                                FAQ
                            </Link>
                            <div className={styles.dropdownDivider} />
                            <Link to="/blog" className={styles.dropdownItem} onClick={handleItemClick}>
                                Blog
                            </Link>
                        </div>
                    </li>

                    <li className={location.hash === '#contact' ? styles.active : ''}>
                        <Link
                            to="/about#contact"
                            onClick={handleContactClick}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Right Actions: CTA Button (Visible on Desktop & Mobile) + Mobile Hamburger */}
                <div className={styles.navRightActions}>
                    <a
                        href="https://live.giropie.com/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.trialBtn}
                        style={{ textDecoration: 'none' }}
                    >
                        Start Your Trial &gt;
                    </a>

                    {/* Mobile Hamburger Toggle Button */}
                    <button
                        type="button"
                        className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.toggleActive : ''}`}
                        onClick={() => setIsMobileMenuOpen(prev => !prev)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className={styles.hamburgerBar}></span>
                        <span className={styles.hamburgerBar}></span>
                        <span className={styles.hamburgerBar}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Drawer */}
            <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
                <ul className={styles.mobileNavLinks}>
                    <li className={location.pathname === '/' ? styles.mobileActive : ''}>
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    </li>
                    <li className={location.pathname === '/about' && location.hash !== '#contact' ? styles.mobileActive : ''}>
                        <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                    </li>
                    <li className={location.pathname === '/features' ? styles.mobileActive : ''}>
                        <Link to="/features" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
                    </li>
                    <li className={location.pathname === '/pricing' ? styles.mobileActive : ''}>
                        <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
                    </li>
                    <li className={location.pathname === '/gofundz' ? styles.mobileActive : ''}>
                        <Link to="/gofundz" onClick={() => setIsMobileMenuOpen(false)}>GOFundZ</Link>
                    </li>
                    <li className={location.pathname === '/careers' ? styles.mobileActive : ''}>
                        <Link to="/careers" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
                    </li>

                    {/* Resources Dropdown Item for Mobile */}
                    <li className={styles.mobileDropdownParent}>
                        <div
                            className={styles.mobileDropdownTrigger}
                            onClick={() => setIsMobileResourcesOpen(prev => !prev)}
                        >
                            <span>Resources</span>
                            <svg
                                className={`${styles.dropdownChevron} ${isMobileResourcesOpen ? styles.chevronRotated : ''}`}
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                            >
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {isMobileResourcesOpen && (
                            <div className={styles.mobileSubMenu}>
                                <Link to="/news" onClick={() => setIsMobileMenuOpen(false)}>News</Link>
                                <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
                                <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                            </div>
                        )}
                    </li>

                    <li className={location.hash === '#contact' ? styles.mobileActive : ''}>
                        <Link
                            to="/about#contact"
                            onClick={handleContactClick}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile Drawer CTA Button */}
                <a
                    href="https://live.giropie.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mobileTrialBtn}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Start Your Trial &gt;
                </a>
            </div>
        </div>
    );
};

export default Navbar;
