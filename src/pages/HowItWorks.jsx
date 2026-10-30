import styles from './P1Pages.module.css';
import {
    FaCalendarDays,
    FaArrowRight,
    FaCircleCheck
} from 'react-icons/fa6';

// ============================================================================
// HOW IT WORKS PAGE — /how-it-works (P1 #1)
// Four-step Invoice-to-Cash flow + neutral Returned-Status workflow note.
// NOTE: Avoids any unapproved legal "bounce" claims per compliance rules until
// approved wording from legal counsel is supplied.
// ============================================================================

const STEPS = [
    {
        step: '01',
        tag: 'Invoice Sync',
        title: 'Sync from TallyPrime or Upload Invoices',
        desc: 'Bring trade credit invoices from TallyPrime or your ERP onto GIROPie without changing how your accounting team books sales.'
    },
    {
        step: '02',
        tag: 'Pay-by-Date',
        title: 'Buyer Confirms or Schedules Pay-by-Date',
        desc: 'Linked buyers view the shared invoice, confirm a Pay-by-Date, request a split schedule, or flag a discrepancy early—before the due date arrives.'
    },
    {
        step: '03',
        tag: 'Mandate Setup',
        title: 'Authorize Bank Mandate (eMandate / NACH)',
        desc: 'Buyers authorize recurring or invoice-level debit mandates through regulated NPCI eMandate and NACH banking rails—even in unlinked email mode.'
    },
    {
        step: '04',
        tag: 'Due-Date Settlement',
        title: 'Collect on Due Date & Auto-Reconcile',
        desc: 'When an invoice reaches Today, initiate collection against the authorized mandate and match settled funds back to the exact invoice automatically.'
    }
];

const RETURNED_WORKFLOW_COPY =
    'If a scheduled bank debit does not clear, GIROPie marks the invoice under Returned status in your Reconciliation workspace. Your finance team can review the reason code, reschedule a new Pay-by-Date with the buyer, split the invoice into partial settlements, or re-initiate collection—keeping a complete operational audit trail on the invoice.';

const HowItWorks = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                {/* 1. Hero */}
                <header className={styles.heroSection}>
                    <div className={styles.eyebrowBadge}>
                        <span className={styles.eyebrowDot} />
                        How GIROPie Works
                    </div>
                    <h1 className={styles.heroTitle}>
                        From TallyPrime invoice to <span className={styles.heroHighlight}>settled bank debit</span> in four steps.
                    </h1>
                    <p className={styles.heroSubtitle}>
                        GIROPie sits alongside your existing ERP and connects invoice confirmation, Pay-by-Date scheduling, NPCI mandate execution, and invoice-level reconciliation.
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

                {/* 2. Four-Step Workflow */}
                <section className={styles.sectionBlock} aria-label="Four-step workflow">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>The Four-Step Settlement Lifecycle</h2>
                        <p className={styles.sectionLead}>
                            Every credit invoice progresses transparently through Upcoming, Tomorrow, Today, and Reconciled stages.
                        </p>
                    </div>

                    <div className={styles.gridFour}>
                        {STEPS.map((item) => (
                            <article key={item.step} className={styles.infoCard}>
                                <span className={styles.stepNumberBadge}>{item.step}</span>
                                <span className={styles.cardTag}>{item.tag}</span>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardText}>{item.desc}</p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* 3. Linked vs Unlinked Operating Modes (Sideways scrollable on 390px) */}
                <section className={styles.sectionBlock}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Works Whether Your Buyer Joins or Not</h2>
                        <p className={styles.sectionLead}>
                            Start immediately in Unlinked mode and onboard repeat buyers to Linked collaboration over time.
                        </p>
                    </div>

                    <div className={styles.mobileSwipeHint} aria-hidden="true">
                        Swipe sideways to compare &rarr;
                    </div>
                    <div className={styles.tableScrollWrap}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    <th>Capability</th>
                                    <th>Linked Mode (Buyer on GIROPie)</th>
                                    <th>Unlinked Mode (Buyer via Email Link)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Buyer registration required?</td>
                                    <td>Yes — shared AR/AP workspace (free for buyers)</td>
                                    <td>No — buyer authorizes directly from secure email link</td>
                                </tr>
                                <tr>
                                    <td>Pay-by-Date scheduling</td>
                                    <td>Collaborative scheduling, split &amp; reschedule requests</td>
                                    <td>Supplier sets invoice due date and sends mandate request</td>
                                </tr>
                                <tr>
                                    <td>Dispute handling</td>
                                    <td>Structured pre-due-date dispute pause &amp; resolution</td>
                                    <td>Managed via supplier notifications and invoice notes</td>
                                </tr>
                                <tr>
                                    <td>Bank mandate debit &amp; reconciliation</td>
                                    <td>Recurring or per-invoice NPCI eMandate / NACH</td>
                                    <td>Invoice-level authorized debit &amp; automatic matching</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 4. Returned Debit Handling */}
                <section className={styles.sectionBlock}>
                    <div className={styles.calloutCard}>
                        <h2 className={styles.calloutTitle}>Handling Returned Debits &amp; Rescheduling</h2>
                        <p className={styles.calloutText}>{RETURNED_WORKFLOW_COPY}</p>
                        <ul className={styles.checkList}>
                            <li>
                                <FaCircleCheck className={styles.checkIcon} />
                                <span>Disputed invoices pause automatically before presentation so only confirmed invoices are submitted for collection.</span>
                            </li>
                            <li>
                                <FaCircleCheck className={styles.checkIcon} />
                                <span>Buyers can split an invoice across multiple dates when partial cash-flow scheduling is needed.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 5. Bottom CTA */}
                <section className={styles.bottomCtaBanner}>
                    <h2>See the 4-Step Flow on Your Own Invoice Cycle</h2>
                    <p>Walk through TallyPrime sync, mandate authorization, and auto-reconciliation in 30 minutes.</p>
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

export default HowItWorks;

