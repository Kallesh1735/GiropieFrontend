import { Link } from 'react-router-dom';
import styles from './UpiMdrBanner.module.css';
import { FaArrowRight, FaBuildingColumns } from 'react-icons/fa6';

// ============================================================================
// UPI MDR CALLOUT BANNER (P0 #5 & P1 #2)
// Displayed on the Home page directly above the Features section and links to
// /why-mandates (interactive UPI MDR calculator & mandate comparison).
// ============================================================================
const UpiMdrBanner = () => {
    return (
        <section className={styles.bannerSection} aria-label="UPI merchant fee update">
            <div className={styles.bannerCard}>
                <div className={styles.leftContent}>
                    <span className={styles.updatePill}>
                        <FaBuildingColumns /> Payment Update
                    </span>
                    <div className={styles.textBlock}>
                        <h2 className={styles.headline}>
                            UPI collections now carry a merchant fee above ₹2,000.
                        </h2>
                        <p className={styles.subline}>
                            Collecting B2B trade credit invoices over ₹2,000? Switch recurring receivables to authorized NPCI eMandate and NACH collections with predictable per-invoice fees quoted upfront.
                        </p>
                    </div>
                </div>

                <Link to="/why-mandates" className={styles.ctaLink}>
                    <span>Calculate your UPI fee</span>
                    <FaArrowRight className={styles.arrowIcon} />
                </Link>
            </div>
        </section>
    );
};

export default UpiMdrBanner;
