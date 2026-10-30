import { useState, useRef, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/giropie-logo.png';
import { Link, useLocation } from 'react-router-dom';

// ============================================================================
// GLOBAL NAVIGATION BAR
// Includes all active pages (except parked GOFundZ):
// Home | Product (How it works, Features, Trust & Compliance) |
// Solutions (Distributors, Logistics) | Pricing | Why Mandates |
// About | Careers | Resources (News, FAQ, Blog) | Contact + Book a demo CTA
// ============================================================================

const Navbar = () => {
    const location = useLocation();
    const [openDropdown, setOpenDropdown] = useState(null); // 'product' | 'solutions' | 'resources' | null
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileAccordion, setMobileAccordion] = useState(null); // 'product' | 'solutions' | 'resources' | null
    const closeTimerRef = useRef(null);

    useEffect(() => {
        return () => {
            if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current);
            }
        };
    }, []);

    const handleDropdownEnter = (menuKey) => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
        setOpenDropdown(menuKey);
    };

    const handleDropdownLeave = () => {
        closeTimerRef.current = setTimeout(() => {
            setOpenDropdown(null);
        }, 180);
    };

    const closeAllMenus = () => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
        setMobileAccordion(null);
    };

    const toggleMobileAccordion = (key) => {
        setMobileAccordion((prev) => (prev === key ? null : key));
    };

    const isProductActive =
        location.pathname === '/how-it-works' ||
        location.pathname === '/features' ||
        location.pathname === '/trust';

    const isSolutionsActive =
        location.pathname === '/distributors' ||
        location.pathname === '/logistics';

    const isResourcesActive =
        location.pathname === '/news' ||
        location.pathname === '/faq' ||
        location.pathname.startsWith('/blog') ||
        location.pathname.startsWith('/post/') ||
        location.pathname.startsWith('/resources');

    return (
        <div className={styles.navbarWrapper}>
            <nav className={styles.navbar} aria-label="Main navigation">
                {/* Brand Logo */}
                <Link to="/" onClick={closeAllMenus} className={styles.logoLink}>
                    <img src={logo} alt="GIROPie Logo" className={styles.logoImg} />
                </Link>

                {/* Desktop Navigation Links */}
                <ul className={styles.navLinks}>
                    {/* 1. Home */}
                    <li className={location.pathname === '/' ? styles.active : ''}>
                        <Link to="/" onClick={closeAllMenus} className={styles.navItemLink}>
                            Home
                        </Link>
                    </li>

                    {/* 2. Product Dropdown */}
                    <li
                        className={`${styles.dropdownParent} ${isProductActive ? styles.active : ''}`}
                        onMouseEnter={() => handleDropdownEnter('product')}
                        onMouseLeave={handleDropdownLeave}
                    >
                        <div
                            className={styles.dropdownTrigger}
                            onClick={() => setOpenDropdown((prev) => (prev === 'product' ? null : 'product'))}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setOpenDropdown((prev) => (prev === 'product' ? null : 'product'));
                                }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-expanded={openDropdown === 'product'}
                        >
                            <span>Product</span>
                            <svg
                                className={`${styles.dropdownChevron} ${openDropdown === 'product' ? styles.chevronRotated : ''}`}
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div
                            className={`${styles.dropdownMenu} ${openDropdown === 'product' ? styles.dropdownOpen : ''}`}
                            onMouseEnter={() => handleDropdownEnter('product')}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <Link to="/how-it-works" className={styles.dropdownItem} onClick={closeAllMenus}>
                                How it works
                            </Link>
                            <div className={styles.dropdownDivider} />
                            <Link to="/features" className={styles.dropdownItem} onClick={closeAllMenus}>
                                Features
                            </Link>
                            <div className={styles.dropdownDivider} />
                            <Link to="/trust" className={styles.dropdownItem} onClick={closeAllMenus}>
                                Trust &amp; Compliance
                            </Link>
                        </div>
                    </li>

                    {/* 3. Solutions Dropdown */}
                    <li
                        className={`${styles.dropdownParent} ${isSolutionsActive ? styles.active : ''}`}
                        onMouseEnter={() => handleDropdownEnter('solutions')}
                        onMouseLeave={handleDropdownLeave}
                    >
                        <div
                            className={styles.dropdownTrigger}
                            onClick={() => setOpenDropdown((prev) => (prev === 'solutions' ? null : 'solutions'))}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setOpenDropdown((prev) => (prev === 'solutions' ? null : 'solutions'));
                                }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-expanded={openDropdown === 'solutions'}
                        >
                            <span>Solutions</span>
                            <svg
                                className={`${styles.dropdownChevron} ${openDropdown === 'solutions' ? styles.chevronRotated : ''}`}
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div
                            className={`${styles.dropdownMenu} ${openDropdown === 'solutions' ? styles.dropdownOpen : ''}`}
                            onMouseEnter={() => handleDropdownEnter('solutions')}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <Link to="/distributors" className={styles.dropdownItem} onClick={closeAllMenus}>
                                Distributors
                            </Link>
                            <div className={styles.dropdownDivider} />
                            <Link to="/logistics" className={styles.dropdownItem} onClick={closeAllMenus}>
                                Logistics
                            </Link>
                        </div>
                    </li>

                    {/* 4. Pricing */}
                    <li className={location.pathname === '/pricing' ? styles.active : ''}>
                        <Link to="/pricing" onClick={closeAllMenus} className={styles.navItemLink}>
                            Pricing
                        </Link>
                    </li>

                    {/* 5. Why Mandates */}
                    <li className={location.pathname === '/why-mandates' ? styles.active : ''}>
                        <Link to="/why-mandates" onClick={closeAllMenus} className={styles.navItemLink}>
                            Why mandates
                        </Link>
                    </li>

                    {/* 6. About */}
                    <li className={location.pathname === '/about' ? styles.active : ''}>
                        <Link to="/about" onClick={closeAllMenus} className={styles.navItemLink}>
                            About
                        </Link>
                    </li>

                    {/* 7. Careers */}
                    <li className={location.pathname === '/careers' ? styles.active : ''}>
                        <Link to="/careers" onClick={closeAllMenus} className={styles.navItemLink}>
                            Careers
                        </Link>
                    </li>

                    {/* 8. Resources Dropdown (News, FAQ, Blog) */}
                    <li
                        className={`${styles.dropdownParent} ${isResourcesActive ? styles.active : ''}`}
                        onMouseEnter={() => handleDropdownEnter('resources')}
                        onMouseLeave={handleDropdownLeave}
                    >
                        <div
                            className={styles.dropdownTrigger}
                            onClick={() => setOpenDropdown((prev) => (prev === 'resources' ? null : 'resources'))}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setOpenDropdown((prev) => (prev === 'resources' ? null : 'resources'));
                                }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-expanded={openDropdown === 'resources'}
                        >
                            <span>Resources</span>
                            <svg
                                className={`${styles.dropdownChevron} ${openDropdown === 'resources' ? styles.chevronRotated : ''}`}
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div
                            className={`${styles.dropdownMenu} ${openDropdown === 'resources' ? styles.dropdownOpen : ''}`}
                            onMouseEnter={() => handleDropdownEnter('resources')}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <Link to="/news" className={styles.dropdownItem} onClick={closeAllMenus}>
                                News
                            </Link>
                            <div className={styles.dropdownDivider} />
                            <Link to="/faq" className={styles.dropdownItem} onClick={closeAllMenus}>
                                FAQ
                            </Link>
                            <div className={styles.dropdownDivider} />
                            <Link to="/blog" className={styles.dropdownItem} onClick={closeAllMenus}>
                                Blog
                            </Link>
                        </div>
                    </li>

                    {/* 9. Contact */}
                    <li className={location.pathname === '/contact' ? styles.active : ''}>
                        <Link to="/contact" onClick={closeAllMenus} className={styles.navItemLink}>
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Right Actions: Book a Demo CTA + Mobile Hamburger */}
                <div className={styles.navRightActions}>
                    <a
                        href="https://calendly.com/giropie/giropie-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.trialBtn}
                        style={{ textDecoration: 'none' }}
                    >
                        Book a demo
                    </a>

                    <button
                        type="button"
                        className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.toggleActive : ''}`}
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
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
                        <Link to="/" onClick={closeAllMenus}>Home</Link>
                    </li>

                    {/* Product Accordion */}
                    <li className={styles.mobileDropdownParent}>
                        <div
                            className={styles.mobileDropdownTrigger}
                            onClick={() => toggleMobileAccordion('product')}
                        >
                            <span>Product</span>
                            <svg
                                className={`${styles.dropdownChevron} ${mobileAccordion === 'product' ? styles.chevronRotated : ''}`}
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                            >
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {mobileAccordion === 'product' && (
                            <div className={styles.mobileSubMenu}>
                                <Link to="/how-it-works" onClick={closeAllMenus}>How it works</Link>
                                <Link to="/features" onClick={closeAllMenus}>Features</Link>
                                <Link to="/trust" onClick={closeAllMenus}>Trust &amp; Compliance</Link>
                            </div>
                        )}
                    </li>

                    {/* Solutions Accordion */}
                    <li className={styles.mobileDropdownParent}>
                        <div
                            className={styles.mobileDropdownTrigger}
                            onClick={() => toggleMobileAccordion('solutions')}
                        >
                            <span>Solutions</span>
                            <svg
                                className={`${styles.dropdownChevron} ${mobileAccordion === 'solutions' ? styles.chevronRotated : ''}`}
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                            >
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {mobileAccordion === 'solutions' && (
                            <div className={styles.mobileSubMenu}>
                                <Link to="/distributors" onClick={closeAllMenus}>Distributors</Link>
                                <Link to="/logistics" onClick={closeAllMenus}>Logistics</Link>
                            </div>
                        )}
                    </li>

                    <li className={location.pathname === '/pricing' ? styles.mobileActive : ''}>
                        <Link to="/pricing" onClick={closeAllMenus}>Pricing</Link>
                    </li>

                    <li className={location.pathname === '/why-mandates' ? styles.mobileActive : ''}>
                        <Link to="/why-mandates" onClick={closeAllMenus}>Why mandates</Link>
                    </li>

                    <li className={location.pathname === '/about' ? styles.mobileActive : ''}>
                        <Link to="/about" onClick={closeAllMenus}>About</Link>
                    </li>

                    <li className={location.pathname === '/careers' ? styles.mobileActive : ''}>
                        <Link to="/careers" onClick={closeAllMenus}>Careers</Link>
                    </li>

                    {/* Resources Accordion (News, FAQ, Blog) */}
                    <li className={styles.mobileDropdownParent}>
                        <div
                            className={styles.mobileDropdownTrigger}
                            onClick={() => toggleMobileAccordion('resources')}
                        >
                            <span>Resources</span>
                            <svg
                                className={`${styles.dropdownChevron} ${mobileAccordion === 'resources' ? styles.chevronRotated : ''}`}
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                            >
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {mobileAccordion === 'resources' && (
                            <div className={styles.mobileSubMenu}>
                                <Link to="/news" onClick={closeAllMenus}>News</Link>
                                <Link to="/faq" onClick={closeAllMenus}>FAQ</Link>
                                <Link to="/blog" onClick={closeAllMenus}>Blog</Link>
                            </div>
                        )}
                    </li>

                    <li className={location.pathname === '/contact' ? styles.mobileActive : ''}>
                        <Link to="/contact" onClick={closeAllMenus}>Contact</Link>
                    </li>
                </ul>

                {/* Mobile Drawer Primary & Secondary CTAs */}
                <div className={styles.mobileDrawerActions}>
                    <a
                        href="https://calendly.com/giropie/giropie-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mobileTrialBtn}
                        onClick={closeAllMenus}
                    >
                        Book a 30-minute demo
                    </a>
                    <a
                        href="https://live.giropie.com/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mobileSecondaryBtn}
                        onClick={closeAllMenus}
                    >
                        Start your trial &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
