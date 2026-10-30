import styles from './P1Pages.module.css';
import DsoCalculator from '../components/DsoCalculator';
import {
    FaCalendarDays,
    FaArrowRight,
    FaBoxesStacked,
    FaHandshake,
    FaArrowsRotate,
    FaCircleCheck
} from 'react-icons/fa6';

// ============================================================================
// FOR DISTRIBUTORS PAGE — /distributors (P1 #3)
// Built for wholesale distributors, stockists, and multi-dealer networks.
// Includes the illustrative DSO Cash-Release Calculator (zero customer names).
// ============================================================================

const Distributors = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                {/* 1. Hero */}
                <header className={styles.heroSection}>
                    <div className={styles.eyebrowBadge}>
                        <span className={styles.eyebrowDot} />
                        Solutions · For Distributors &amp; Stockists
                    </div>
                    <h1 className={styles.heroTitle}>
                        Turn dealer credit cycles into <span className={styles.heroHighlight}>predictable due-date cash.</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Wholesale distributors lose days of working capital when sales teams double as collection agents. GIROPie connects TallyPrime invoices with dealer Pay-by-Dates and automated bank mandate settlement.
                    </p>
                    <div className={styles.heroActions}>
                        <a
                            href="https://calendly.com/giropie/giropie-demo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.primaryCta}
                        >
                            <FaCalendarDays /> Book a 30-minute demo
                        </a>
                        <a href="#dso-calculator" className={styles.secondaryCta}>
                            Estimate DSO Cash Release <FaArrowRight />
                        </a>
                    </div>
                </header>

                {/* 2. Distributor Pain Points Solved */}
                <section className={styles.sectionBlock}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Built for High-Volume Dealer &amp; Retailer Networks</h2>
                        <p className={styles.sectionLead}>
                            Keep credit relationships flexible for your dealers while removing manual follow-ups and unallocated bank credits.
                        </p>
                    </div>

                    <div className={styles.gridThree}>
                        <article className={styles.infoCard}>
                            <div className={styles.iconPod}><FaBoxesStacked /></div>
                            <span className={styles.cardTag}>TallyPrime Ready</span>
                            <h3 className={styles.cardTitle}>Sync Dispatch Invoices Effortlessly</h3>
                            <p className={styles.cardText}>
                                Keep raising GST invoices in TallyPrime or your ERP. GIROPie mirrors open receivables, aging buckets, and dealer balances without double entry.
                            </p>
                        </article>

                        <article className={styles.infoCard}>
                            <div className={styles.iconPod}><FaHandshake /></div>
                            <span className={styles.cardTag}>Dealer Flexibility</span>
                            <h3 className={styles.cardTitle}>Split &amp; Reschedule Without Friction</h3>
                            <p className={styles.cardText}>
                                When a retailer needs to settle an invoice in two parts or request a short extension, they submit it directly on the invoice for your one-click approval.
                            </p>
                        </article>

                        <article className={styles.infoCard}>
                            <div className={styles.iconPod}><FaArrowsRotate /></div>
                            <span className={styles.cardTag}>Mandate Pull</span>
                            <h3 className={styles.cardTitle}>Free Sales Teams From Chasing Cheques</h3>
                            <p className={styles.cardText}>
                                Replace post-dated cheques and field collection visits with authorized NPCI eMandate and NACH debits that reconcile straight to each bill.
                            </p>
                        </article>
                    </div>
                </section>

                {/* 3. Interactive DSO Cash-Release Calculator */}
                <section className={styles.sectionBlock} aria-label="DSO Working Capital Calculator">
                    <DsoCalculator />
                </section>

                {/* 4. Distributor Workflow Highlights */}
                <section className={styles.sectionBlock}>
                    <div className={styles.calloutCard}>
                        <h2 className={styles.calloutTitle}>Designed Around Real Distribution Realities</h2>
                        <ul className={styles.checkList}>
                            <li>
                                <FaCircleCheck className={styles.checkIcon} />
                                <span><strong>Gradual dealer onboarding:</strong> Start with unlinked email mandate requests and move top dealers onto linked shared ledgers at your pace.</span>
                            </li>
                            <li>
                                <FaCircleCheck className={styles.checkIcon} />
                                <span><strong>Pre-due-date dispute visibility:</strong> Short-supply, rate-difference, or damaged-goods claims surface immediately instead of delaying settlement at 60 days.</span>
                            </li>
                            <li>
                                <FaCircleCheck className={styles.checkIcon} />
                                <span><strong>Buyers pay ₹0 platform fee:</strong> Linked dealers and retailers use GIROPie Payable Management at no charge.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 5. Bottom CTA */}
                <section className={styles.bottomCtaBanner}>
                    <h2>See How GIROPie Fits Your Distribution Network</h2>
                    <p>Book a 30-minute walkthrough tailored to your monthly invoice volume and TallyPrime workflow.</p>
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

export default Distributors;

