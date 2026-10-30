import { Link } from 'react-router-dom';
import styles from './P1Pages.module.css';
import MdrCalculator from '../components/MdrCalculator';
import {
    FaCalendarDays,
    FaArrowRight,
    FaBuildingColumns,
    FaFileInvoiceDollar,
    FaCheckDouble
} from 'react-icons/fa6';

// ============================================================================
// WHY MANDATES (UPI MDR) PAGE — /why-mandates (P1 #2)
// Includes the interactive UPI MDR Calculator + required Ministry of Finance
// source line. States pricing model only (no unverified percentage comparisons).
// ============================================================================

const WhyMandates = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                {/* 1. Hero */}
                <header className={styles.heroSection}>
                    <div className={styles.eyebrowBadge}>
                        <span className={styles.eyebrowDot} />
                        Why Bank Mandates for B2B
                    </div>
                    <h1 className={styles.heroTitle}>
                        UPI collections now carry a <span className={styles.heroHighlight}>merchant fee above ₹2,000.</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        B2B trade credit invoices routinely exceed ₹2,000. Understand how percentage-based merchant fees impact high-volume receivables—and why scheduled NPCI eMandate and NACH collections are purpose-built for B2B credit cycles.
                    </p>
                    <div className={styles.heroActions}>
                        <a href="#mdr-calculator" className={styles.primaryCta}>
                            Calculate Your UPI Fee Impact <FaArrowRight />
                        </a>
                        <Link to="/pricing" className={styles.secondaryCta}>
                            View GIROPie Pricing Model
                        </Link>
                    </div>
                </header>

                {/* 2. Interactive MDR Calculator */}
                <section className={styles.sectionBlock} aria-label="UPI MDR Calculator">
                    <MdrCalculator />
                </section>

                {/* 3. Three Core Reasons B2B Teams Use Mandates */}
                <section className={styles.sectionBlock}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Why B2B Receivables Belong on Bank Mandates</h2>
                        <p className={styles.sectionLead}>
                            Payment links and ad-hoc transfers still depend on manual buyer action on the due date. Authorized mandates execute on schedule.
                        </p>
                    </div>

                    <div className={styles.gridThree}>
                        <article className={styles.infoCard}>
                            <div className={styles.iconPod}><FaBuildingColumns /></div>
                            <span className={styles.cardTag}>Scheduled Execution</span>
                            <h3 className={styles.cardTitle}>Pull on the Committed Due Date</h3>
                            <p className={styles.cardText}>
                                Instead of sending reminders and waiting for buyers to initiate a push transfer, authorized NPCI eMandate and NACH debits trigger on the agreed Pay-by-Date.
                            </p>
                        </article>

                        <article className={styles.infoCard}>
                            <div className={styles.iconPod}><FaFileInvoiceDollar /></div>
                            <span className={styles.cardTag}>Predictable Fee Model</span>
                            <h3 className={styles.cardTitle}>Per-Transaction Fee Quoted Upfront</h3>
                            <p className={styles.cardText}>
                                GIROPie operates on a platform subscription plus a per-transaction fee quoted before you send a mandate request—aligned with invoice workflow effort.
                            </p>
                        </article>

                        <article className={styles.infoCard}>
                            <div className={styles.iconPod}><FaCheckDouble /></div>
                            <span className={styles.cardTag}>Zero Unmatched Credits</span>
                            <h3 className={styles.cardTitle}>Invoice-Level Auto-Reconciliation</h3>
                            <p className={styles.cardText}>
                                Ad-hoc bank transfers and UPI credits often arrive without invoice references. Every GIROPie mandate debit is tied directly to its originating invoice.
                            </p>
                        </article>
                    </div>
                </section>

                {/* 4. Comparison Table */}
                <section className={styles.sectionBlock}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Ad-Hoc UPI Collection vs. GIROPie Bank Mandates</h2>
                    </div>

                    <div className={styles.mobileSwipeHint} aria-hidden="true">
                        Swipe sideways to compare &rarr;
                    </div>
                    <div className={styles.tableScrollWrap}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    <th>Dimension</th>
                                    <th>Ad-Hoc UPI / Payment Links</th>
                                    <th>GIROPie (NPCI eMandate &amp; NACH)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Initiation on due date</td>
                                    <td>Buyer must manually approve or initiate payment</td>
                                    <td>Scheduled debit against buyer&apos;s pre-authorized mandate</td>
                                </tr>
                                <tr>
                                    <td>B2B invoice ticket sizes</td>
                                    <td>Constrained by per-transaction UPI limits &amp; MDR above ₹2,000</td>
                                    <td>Built for B2B wholesale, distribution, and enterprise invoices</td>
                                </tr>
                                <tr>
                                    <td>Pricing visibility</td>
                                    <td>Percentage MDR above ₹2,000 (up to cap, per bank terms)</td>
                                    <td>Subscription + per-transaction fee quoted before mandate request</td>
                                </tr>
                                <tr>
                                    <td>Ledger reconciliation</td>
                                    <td>Manual UTR-to-invoice matching at month-end</td>
                                    <td>Automatic invoice-level settlement matching with TallyPrime</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 5. Bottom CTA */}
                <section className={styles.bottomCtaBanner}>
                    <h2>Switch Recurring B2B Collections to Authorized Mandates</h2>
                    <p>Review your monthly invoice mix and TallyPrime setup with our team in a 30-minute walkthrough.</p>
                    <div className={styles.heroActions}>
                        <a
                            href="https://calendly.com/giropie/giropie-demo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.bannerOrangeBtn}
                        >
                            <FaCalendarDays /> Book a 30-minute demo
                        </a>
                        <a
                            href="https://live.giropie.com/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.bannerGhostBtn}
                        >
                            Start your trial <FaArrowRight />
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default WhyMandates;

