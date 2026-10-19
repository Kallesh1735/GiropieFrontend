import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/giropie-logo.png';
import { FaYoutube, FaFacebook, FaXTwitter, FaLinkedin } from 'react-icons/fa6';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.columns}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        {/* Use the logo image here! */}
                        <img src={logo} alt="GIROPie Logo" className={styles.footerLogo} />

                        <p>
                            PepperTree.AI Pvt. Ltd.<br />
                            No 1138, Maruthi Complex, 3rd Floor,<br />
                            BEML Layout, 3rd Stage, Bangalore<br />
                            560098, Karnataka, India
                        </p>
                    </div>
                    {/* Links Columns */}
                    <div className={styles.column}>
                        <h4>Product</h4>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">GOFundZ</a></li>
                            <li><a href="#">Book a Demo</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Resources</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Backed By</h4>
                        <ul>
                            <li><a href="#">NPCI</a></li>
                            <li><a href="#">Startup Karnataka</a></li>
                            <li><a href="#">Seed Fund Scheme</a></li>
                            <li><a href="#">FinGlobe</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p>© 2023 by PepperTree.AI Pvt. Ltd. All rights reserved.</p>
                    <div className={styles.socials}>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <FaYoutube size={18} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <FaFacebook size={18} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <FaXTwitter size={18} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                            <FaLinkedin size={18} />
                        </a>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
