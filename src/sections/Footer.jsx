import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../assets/giropie-logo.png';
import npciLogo from '../assets/1200px-NPCI-Logo_edited.avif';
import sisfsLogo from '../assets/SISFS.avif';
import finGlobeLogo from '../assets/363830_22611d70f35747eb83147a55d60a060d~mv2.avif';
import { FaYoutube, FaFacebook, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

// ============================================================================
// GLOBAL FOOTER COMPONENT - GIROPie
// Organized into 5 easy-to-edit sections:
// 1. Brand Identity & Registered Corporate Address
// 2. Product Navigation Links
// 3. Company Navigation Links
// 4. Backed By Partner Badges
// 5. Copyright & Official Social Media Channels
// ============================================================================

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.columns}>
                    {/* ------------------------------------------------------
                        1. BRAND COLUMN & CORPORATE ADDRESS (P0 #9: No. 1139)
                        Easy to edit: Keep corporate address synced with PrivacyPolicy.jsx.
                       ------------------------------------------------------ */}
                    <div className={styles.brandColumn}>
                        <img src={logo} alt="GIROPie Logo" className={styles.footerLogo} />

                        <p>
                            PepperTree.AI Pvt. Ltd.<br />
                            No. 1139, Maruthi Complex, 3rd Floor,<br />
                            BEML Layout, 3rd Stage, Bangalore<br />
                            560098, Karnataka, India
                        </p>
                    </div>

                    {/* ------------------------------------------------------
                        2. PRODUCT & SOLUTIONS LINKS COLUMN
                        (P0 #10: GOFundZ removed from nav; P1 pages added)
                       ------------------------------------------------------ */}
                    <div className={styles.column}>
                        <h4>Product</h4>
                        <ul>
                            <li><Link to="/how-it-works">How It Works</Link></li>
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to="/why-mandates">Why Mandates</Link></li>
                            <li><Link to="/distributors">For Distributors</Link></li>
                            <li><Link to="/logistics">For Logistics (CollectX)</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/trust">Trust &amp; Compliance</Link></li>
                        </ul>
                    </div>

                    {/* ------------------------------------------------------
                        3. COMPANY & RESOURCES LINKS COLUMN
                       ------------------------------------------------------ */}
                    <div className={styles.column}>
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/news">News</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/contact">Contact &amp; Demo</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* ------------------------------------------------------
                        4. BACKED BY PARTNER BADGES COLUMN
                        NOTE: Institution logos requiring written permission
                        (e.g. Startup Karnataka) are withheld until on file.
                       ------------------------------------------------------ */}
                    <div className={styles.column}>
                        <h4>Backed By</h4>
                        <div className={styles.backedByGrid}>
                            <div className={styles.backedByBadge} title="NPCI">
                                <img src={npciLogo} alt="NPCI" className={styles.backedByLogo} />
                            </div>
                            <div className={styles.backedByBadge} title="Seed Fund Scheme">
                                <img src={sisfsLogo} alt="Seed Fund Scheme" className={styles.backedByLogo} />
                            </div>
                            <div className={styles.backedByBadge} title="FinGlobe">
                                <img src={finGlobeLogo} alt="FinGlobe" className={styles.backedByLogo} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ----------------------------------------------------------
                    5. BOTTOM BAR: COPYRIGHT & OFFICIAL SOCIAL LINKS
                   ---------------------------------------------------------- */}
                <div className={styles.bottomBar}>
                    <p>© {new Date().getFullYear()} by PepperTree.AI Pvt. Ltd. All rights reserved.</p>
                    <div className={styles.socials}>
                        <a
                            href="https://www.youtube.com/@giropie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.socialIcon} ${styles.youtube}`}
                            aria-label="YouTube"
                        >
                            <FaYoutube size={19} />
                        </a>
                        <a
                            href="https://www.facebook.com/giropie/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.socialIcon} ${styles.facebook}`}
                            aria-label="Facebook"
                        >
                            <FaFacebook size={19} />
                        </a>
                        <a
                            href="https://x.com/PeppertreeAI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.socialIcon} ${styles.twitter}`}
                            aria-label="X (Twitter)"
                        >
                            <FaXTwitter size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/peppertreeai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.socialIcon} ${styles.linkedin}`}
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={19} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
