import React from 'react';
import styles from './FeaturesPage.module.css';
import featureHeroImg from '../assets/faeture page.jpg';
import endToEndArApImg from '../assets/end to end ar ap.avif';
import dynamicCollabImg from '../assets/dynamic collabration.avif';
import liveCashFlowImg from '../assets/live cash flow dashbaord.avif';
import onTheGoImg from '../assets/on the go.avif';
import embeddedSupplyChainImg from '../assets/embeded supply chain.avif';
import {
    FaLinkSlash,
    FaCalendarXmark,
    FaCommentsDollar,
    FaArrowRight
} from 'react-icons/fa6';

// ============================================================================
// FEATURES PAGE COMPONENT - GIROPie
// ============================================================================
const FeaturesPage = () => {
    return (
        <div className={styles.featuresPage}>
            {/* Ambient Lighting Orbs */}
            <div className={styles.bgGlow1}></div>
            <div className={styles.bgGlow2}></div>

            {/* ==============================================================
                SECTION 1: HERO BANNER IMAGE
                ============================================================== */}
            <section className={styles.heroBanner}>
                <img
                    src={featureHeroImg}
                    alt="Your ERP Records Transactions - GIROPie Executes Operational Cash Flow"
                    className={styles.heroImage}
                />
            </section>

            {/* ==============================================================
                SECTION 2: THE OPERATIONAL GAP (3 CARDS)
                ============================================================== */}
            <section className={styles.gapSection}>
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionBadge}>The Challenge</div>
                    <h2 className={styles.sectionTitle}>The Operational Gap</h2>
                    <p className={styles.sectionSubtitle}>
                        Receivables, payables, payments, and reconciliation often operate in silos.
                    </p>
                </div>

                <div className={styles.gapGrid}>
                    {/* Gap Card 1 */}
                    <div className={`${styles.gapCard} ${styles.gapCard1}`}>
                        <div className={`${styles.gapIconPod} ${styles.iconPodRed}`}>
                            <FaLinkSlash />
                        </div>
                        <span className={`${styles.gapTag} ${styles.tagRed}`}>01 • Disconnected Workflow</span>
                        <p className={styles.gapText}>
                            Invoice status, payment commitments, and settlements are rarely connected end-to-end across buyers and suppliers.
                        </p>
                    </div>

                    {/* Gap Card 2 */}
                    <div className={`${styles.gapCard} ${styles.gapCard2}`}>
                        <div className={`${styles.gapIconPod} ${styles.iconPodAmber}`}>
                            <FaCalendarXmark />
                        </div>
                        <span className={`${styles.gapTag} ${styles.tagAmber}`}>02 • Unpredictable Forecasting</span>
                        <p className={styles.gapText}>
                            Cash-flow planning relies on expected collections rather than committed, verified payment dates.
                        </p>
                    </div>

                    {/* Gap Card 3 */}
                    <div className={`${styles.gapCard} ${styles.gapCard3}`}>
                        <div className={`${styles.gapIconPod} ${styles.iconPodBlue}`}>
                            <FaCommentsDollar />
                        </div>
                        <span className={`${styles.gapTag} ${styles.tagBlue}`}>03 • Manual Chasing &amp; Disputes</span>
                        <p className={styles.gapText}>
                            Teams spend significant time chasing payments, managing disputes, approvals, and reconciliation across fragmented systems.
                        </p>
                    </div>
                </div>
            </section>

            {/* ==============================================================
                SECTION 3: CORE CAPABILITIES (5 DETAILED CARDS WITH BRAND GRAPHICS)
                ============================================================== */}
            <section className={styles.capabilitiesSection}>
                <div className={styles.sectionHeader}>
                    <div className={styles.sectionBadge}>Platform Capabilities</div>
                    <h2 className={styles.sectionTitle}>Explore the Power of GIROPie</h2>
                    <p className={styles.sectionSubtitle}>
                        Capabilities that help businesses collaborate, automate, control, and reconcile their cash flow operations.
                    </p>
                </div>

                <div className={styles.featuresList}>
                    {/* Feature 1 */}
                    <div className={styles.featureCard}>
                        <div className={styles.featureImgContainer}>
                            <img
                                src={endToEndArApImg}
                                alt="End-to-End AR/AP Automation"
                                className={styles.featureGraphic}
                            />
                        </div>
                        <div className={styles.featureTitleWrapper}>
                            <span className={styles.categoryTag}>Automation</span>
                            <h3 className={styles.featureTitle}>End-to-End AR/AP Automation</h3>
                        </div>
                        <p className={styles.featureDesc}>
                            Automates the full Invoice-to-Cash lifecycle—triggering receivable collections and scheduling payables via integrated digital payments—removing manual dependencies and ensuring timely cash movement.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className={styles.featureCard}>
                        <div className={styles.featureImgContainer}>
                            <img
                                src={dynamicCollabImg}
                                alt="Dynamic Invoice Collaboration & Pay-By-Date Tracking"
                                className={styles.featureGraphic}
                            />
                        </div>
                        <div className={styles.featureTitleWrapper}>
                            <span className={styles.categoryTag}>Collaboration</span>
                            <h3 className={styles.featureTitle}>Dynamic Invoice Collaboration &amp; Pay-By-Date Tracking</h3>
                        </div>
                        <p className={styles.featureDesc}>
                            Enables customers to set invoice-level &apos;Pay-by-Dates&apos; visible to suppliers from the outset. Ensures commitment-based payments, reduces disputes, and avoids unintentional delays across supply chain partners.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className={styles.featureCard}>
                        <div className={styles.featureImgContainer}>
                            <img
                                src={liveCashFlowImg}
                                alt="Live Cash-Flow Dashboard with AR/AP Aging"
                                className={styles.featureGraphic}
                            />
                        </div>
                        <div className={styles.featureTitleWrapper}>
                            <span className={styles.categoryTag}>Intelligence</span>
                            <h3 className={styles.featureTitle}>Live Cash-Flow Dashboard with AR/AP Aging</h3>
                        </div>
                        <p className={styles.featureDesc}>
                            Providing real-time visualization of receivables, payables, and cash balances, along with invoice-aging insights. Helps distributors and retailers make data-driven decisions around inventory, procurement, and working capital deployment.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className={styles.featureCard}>
                        <div className={styles.featureImgContainer}>
                            <img
                                src={onTheGoImg}
                                alt="On-the-Go, Invoice-Level Reconciliation"
                                className={styles.featureGraphic}
                            />
                        </div>
                        <div className={styles.featureTitleWrapper}>
                            <span className={styles.categoryTag}>Reconciliation</span>
                            <h3 className={styles.featureTitle}>On-the-Go, Invoice-Level Reconciliation</h3>
                        </div>
                        <p className={styles.featureDesc}>
                            Automates payment matching against each invoice immediately upon transaction. This simplifies month-end closures and improves accuracy—especially critical for high-invoice-volume distribution networks.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className={styles.featureCard}>
                        <div className={styles.featureImgContainer}>
                            <img
                                src={embeddedSupplyChainImg}
                                alt="Embedded Supply Chain Finance Options"
                                className={styles.featureGraphic}
                            />
                        </div>
                        <div className={styles.featureTitleWrapper}>
                            <span className={styles.categoryTag}>Liquidity</span>
                            <h3 className={styles.featureTitle}>Embedded Supply Chain Finance Options</h3>
                        </div>
                        <p className={styles.featureDesc}>
                            Access invoice discounting, factoring, and payables finance directly within the platform. Ideal for suppliers or stockists needing cash flow relief, without impacting buyer payment schedules.
                        </p>
                    </div>
                </div>

                {/* Bottom Call to Action */}
                <div className={styles.ctaBox}>
                    <h2>Ready to Automate Your Cash Flow Operations?</h2>
                    <p>Get started with GIROPie today and experience real-time invoice-to-cash execution.</p>
                    <a
                        href="https://live.giropie.com/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.ctaButton}
                    >
                        Start Your Free Trial <FaArrowRight />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default FeaturesPage;
