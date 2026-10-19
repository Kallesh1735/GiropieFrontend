import React from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/giropie-logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <div className={styles.navbarWrapper}>
            <nav className={styles.navbar}>
                <Link to="/">
                    <img src={logo} alt="GIROPie Logo" className={styles.logoImg} />
                </Link>

                <ul className={styles.navLinks}>
                    <li className={location.pathname === '/' ? styles.active : ''}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
                    </li>
                    <li className={location.pathname === '/about' ? styles.active : ''}>
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
                    <li className={location.pathname === '/resources' ? styles.active : ''}>
                        <Link to="/resources" style={{ textDecoration: 'none', color: 'inherit' }}>Resources</Link>
                    </li>
                    <li className={location.pathname === '/contact' ? styles.active : ''}>
                        <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
                    </li>
                </ul>

                <a
                    href="https://live.giropie.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.trialBtn}
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                    Start Your Trial {'>'}
                </a>

            </nav>
        </div>
    );
};


export default Navbar;
