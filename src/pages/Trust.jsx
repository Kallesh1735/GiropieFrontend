import { Link } from 'react-router-dom';
import styles from './P1Pages.module.css';
import {
    FaShieldHalved,
    FaBuildingColumns,
    FaLock,
    FaAward,
    FaCircleCheck,
    FaCalendarDays
} from 'react-icons/fa6';

// ============================================================================
// TRUST & COMPLIANCE PAGE — /trust (P1 #5)
// COMPLIANCE RULES:
//   - Granted Indian patent number is allowed ONLY on this page (set
//     `PATENT_RECORD.number` below once supplied by the client; never on Home).
//   - Bank names and unapproved institution logos are strictly withheld until
//     written permission is on file.
// ============================================================================

const PATENT_RECORD = {
    jurisdiction: 'Republic of India',
    assignee: 'PepperTree.AI Pvt. Ltd.',
    status: 'Granted Indian Patent',
    // Set exact granted patent number string here when supplied by client (e.g. '5XXXXX')
    number: null,
    scope: 'Collaborative B2B invoice-to-cash settlement, Pay-by-Date commitment, and automated mandate orchestration workflow.'
};

const Trust = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                {/* 1. Hero */}
                <header className={styles.heroSection}>
                    <div className={styles.eyebrowBadge}>
                        <span className={styles.eyebrowDot} />
                        Trust, IP &amp; Regulatory Architecture
                    </div>
                    <h1 className={styles.heroTitle}>
                        Patented workflow architecture built on <span className={styles.heroHighlight}>regulated payment rails.</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        GIROPie is engineered by PepperTree.AI Pvt. Ltd. as a pure technology orchestration layer—connecting enterprise accounting systems with authorized banking infrastructure without holding customer funds.
                    </p>
                </header>

                {/* 2. Patent & Regulatory Architecture Pillars */}
                <section className={styles.sectionBlock}>
                    <div className={styles.gridTwo}>
                        {/* Granted Patent Card (Patent number rendered here ONLY when supplied) */}
                        <article className={styles.infoCard}>
                            <div className={styles.iconPod}><FaShieldHalved /></div>
                            <span className={styles.cardTag}>{PATENT_RECORD.status}</span>
                            <h2 className={styles.cardTitle}>
                                Patented in India
                                {PATENT_RECORD.number ? ` (Patent No. ${PATENT_RECORD.number})` : ''}
                            </h2>
                            <p className={styles.cardText}>{PATENT_RECORD.scope}</p>
                            <ul className={styles.checkList}>
                                <li>
                                    <FaCircleCheck className={styles.checkIcon} />
                                    <span><strong>Assignee:</strong> {PATENT_RECORD.assignee}</span>
                                </li>
                                <li>
                                    <FaCircleCheck className={styles.checkIcon} />
                                    <span><strong>Jurisdiction:</strong> {PATENT_RECORD.jurisdiction}</span>
                                </li>
                            </ul>
                        </article>

                        {/* Non-Custodial Payment Architecture */}
                        <article className={styles.infoCard}>
                            <div className={styles.iconPod}><FaBuildingColumns /></div>
                            <span className={styles.cardTag}>Settlement Rails</span>
                            <h2 className={styles.cardTitle}>Non-Custodial Mandate Execution</h2>
                            <p className={styles.cardText}>
                                GIROPie acts strictly as an invoice collaboration and payment orchestration platform. All fund debits and settlements flow through regulated banking and payment partner ecosystems.
                            </p>
                            <ul className={styles.checkList}>
                                <li>
                                    <FaCircleCheck className={styles.checkIcon} />
                                    <span><strong>Built on NPCI eMandate and NACH</strong> for buyer-authorized recurring and invoice-level debits</span>
                                </li>
                                <li>
                                    <FaCircleCheck className={styles.checkIcon} />
                                    <span><strong>Easebuzz payment partner</strong> integration for regulated settlement routing</span>
                                </li>
                                <li>
                                    <FaCircleCheck className={styles.checkIcon} />
                                    <span><strong>Zero fund custody:</strong> GIROPie never holds customer monies on its balance sheet</span>
                                </li>
                            </ul>
                        </article>

                        {/* Security & Data Controls */}
                        <article className={styles.infoCard}>
                            <div className={styles.iconPod}><FaLock /></div>
                            <span className={styles.cardTag}>Security &amp; Privacy</span>
                            <h2 className={styles.cardTitle}>Enterprise Controls &amp; Auditability</h2>
                            <p className={styles.cardText}>
                                Financial records, invoice schedules, and mandate instructions are protected with role-based permissions and immutable workflow logs.
                            </p>
                            <ul className={styles.checkList}>
                                <li>
                                    <FaCircleCheck className={styles.checkIcon} />
                                    <span>TLS encryption in transit and encrypted cloud storage</span>
                                </li>
                                <li>
                                    <FaCircleCheck className={styles.checkIcon} />
                                    <span>Role-based user access and approval hierarchies</span>
                                </li>
                                <li>
                                    <FaCircleCheck className={styles.checkIcon} />
                                    <span>Aligned with applicable Indian data governance standards (<Link to="/privacy">Privacy Policy</Link>)</span>
                                </li>
                            </ul>
                        </article>

                        {/* Verified Ecosystem Recognitions */}
                        <article className={styles.infoCard}>
                            <div className={styles.iconPod}><FaAward /></div>
                            <span className={styles.cardTag}>Verified Credentials</span>
                            <h2 className={styles.cardTitle}>Recognitions &amp; Integrations</h2>
                            <p className={styles.cardText}>
                                GIROPie has been evaluated across national and state innovation programs for B2B working capital automation.
                            </p>
                            <ul className={styles.checkList}>
                                <li>
                                    <FaCircleCheck className={styles.checkIcon} />
                                    <span><strong>Runner-up NSA 5.0</strong></span>
                                </li>
                                <li>
                                    <FaCircleCheck className={styles.checkIcon} />
                                    <span><strong>ElevateNXT Deeptech</strong> winner / recognition</span>
                                </li>
                                <li>
                                    <FaCircleCheck className={styles.checkIcon} />
                                    <span><strong>TallyPrime integrated</strong> for seamless Indian MSME &amp; distributor adoption</span>
                                </li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* 3. Corporate & Grievance Officer Disclosure */}
                <section className={styles.sectionBlock}>
                    <div className={styles.calloutCard}>
                        <h2 className={styles.calloutTitle}>Corporate Entity &amp; Grievance Redressal</h2>
                        <p className={styles.calloutText}>
                            <strong>PepperTree.AI Pvt. Ltd.</strong> · No. 1139, Maruthi Complex, 3rd Floor, BEML Layout, 3rd Stage, Bangalore 560098, Karnataka, India.
                        </p>
                        <p className={styles.calloutText}>
                            <strong>Grievance Officer:</strong> Krishna Kumar B S · <a href="mailto:legalquery@peppertree.ai" style={{ color: '#1C4E80', fontWeight: 700 }}>legalquery@peppertree.ai</a>
                        </p>
                    </div>
                </section>

                {/* 4. Bottom CTA */}
                <section className={styles.bottomCtaBanner}>
                    <h2>Have Compliance, Security, or Integration Questions?</h2>
                    <p>Schedule a technical and operational walkthrough with our founding team.</p>
                    <div className={styles.heroActions}>
                        <a
                            href="https://calendly.com/giropie/giropie-demo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.bannerOrangeBtn}
                        >
                            <FaCalendarDays /> Book a 30-minute demo
                        </a>
                        <Link to="/contact" className={styles.bannerGhostBtn}>
                            Contact Our Team
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Trust;

