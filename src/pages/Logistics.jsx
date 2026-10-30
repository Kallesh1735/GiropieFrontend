import styles from './P1Pages.module.css';
import {
    FaCalendarDays,
    FaArrowRight,
    FaTruckFast,
    FaFileContract,
    FaRoute,
    FaCircleCheck
} from 'react-icons/fa6';

// ============================================================================
// FOR LOGISTICS (COLLECTX) PAGE — /logistics (P1 #4)
// COMPLIANCE NOTE ("Do not publish" #5): Do NOT add "Patent-pending" wording
// for CollectX until confirmed in writing by the patent attorney.
// ============================================================================

const COLLECTX_EYEBROW = 'Solutions · For Logistics (CollectX)';

const Logistics = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                {/* 1. Hero */}
                <header className={styles.heroSection}>
                    <div className={styles.eyebrowBadge}>
                        <span className={styles.eyebrowDot} />
                        {COLLECTX_EYEBROW}
                    </div>
                    <h1 className={styles.heroTitle}>
                        Close the gap between <span className={styles.heroHighlight}>freight delivery and freight settlement.</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Logistics operators, 3PLs, and fleet owners face stretched receivable cycles while fuel, tolls, and driver payouts happen upfront. CollectX on GIROPie structures freight invoice confirmation, discrepancy resolution, and scheduled mandate collection.
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
                        <a
                            href="https://live.giropie.com/signup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondaryCta}
                        >
                            Start your trial <FaArrowRight />
                        </a>
                    </div>
                </header>

                {/* 2. Three Pillars of CollectX */}
                <section className={styles.sectionBlock}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Purpose-Built for Contracted Freight &amp; 3PL Billing</h2>
                        <p className={styles.sectionLead}>
                            Keep multi-trip freight bills, detention adjustments, and shipper payment commitments organized on one shared layer.
                        </p>
                    </div>

                    <div className={styles.gridThree}>
                        <article className={styles.infoCard}>
                            <div className={styles.iconPod}><FaFileContract /></div>
                            <span className={styles.cardTag}>Invoice Confirmation</span>
                            <h3 className={styles.cardTitle}>Early Freight Bill Verification</h3>
                            <p className={styles.cardText}>
                                Present consolidated or trip-level invoices to enterprise shippers with clear Pay-by-Dates so rate or POD queries are resolved days before maturity.
                            </p>
                        </article>

                        <article className={styles.infoCard}>
                            <div className={styles.iconPod}><FaRoute /></div>
                            <span className={styles.cardTag}>Multi-Branch Control</span>
                            <h3 className={styles.cardTitle}>Centralized Branch Receivables</h3>
                            <p className={styles.cardText}>
                                Track Upcoming, Today, Past Due, and Disputed freight receivables across branches and shipper accounts from one live cash-flow dashboard.
                            </p>
                        </article>

                        <article className={styles.infoCard}>
                            <div className={styles.iconPod}><FaTruckFast /></div>
                            <span className={styles.cardTag}>Scheduled Settlement</span>
                            <h3 className={styles.cardTitle}>Mandate-Backed Contract Collections</h3>
                            <p className={styles.cardText}>
                                Collect contracted shipper receivables on the committed date via authorized NPCI eMandate and NACH debits with automatic bill-wise reconciliation.
                            </p>
                        </article>
                    </div>
                </section>

                {/* 3. Operational Fit Callout */}
                <section className={styles.sectionBlock}>
                    <div className={styles.calloutCard}>
                        <h2 className={styles.calloutTitle}>Where CollectX Fits in Your Logistics Stack</h2>
                        <p className={styles.calloutText}>
                            CollectX complements your existing TMS and TallyPrime/ERP setup—connecting billed trips with shipper-approved Pay-by-Dates and automated bank mandate settlement.
                        </p>
                        <ul className={styles.checkList}>
                            <li>
                                <FaCircleCheck className={styles.checkIcon} />
                                <span><strong>Full-truckload &amp; contracted fleet operators:</strong> Align monthly shipper billing cycles with predictable cash inflows.</span>
                            </li>
                            <li>
                                <FaCircleCheck className={styles.checkIcon} />
                                <span><strong>3PL, warehousing &amp; C&amp;F agents:</strong> Separate confirmed base billing from disputed detention or ancillary line items using invoice split workflows.</span>
                            </li>
                            <li>
                                <FaCircleCheck className={styles.checkIcon} />
                                <span><strong>Instant remittance matching:</strong> Eliminate week-long BRS reconciliation across multi-invoice shipper advices.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 4. Bottom CTA */}
                <section className={styles.bottomCtaBanner}>
                    <h2>Explore CollectX for Your Fleet or 3PL Operations</h2>
                    <p>Walk through contracted freight billing and automated shipper mandate workflows with our team.</p>
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

export default Logistics;

