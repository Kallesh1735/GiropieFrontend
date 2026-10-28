import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Features.module.css';
import {
    FaChartLine,
    FaFileInvoiceDollar,
    FaBoltLightning,
    FaArrowsRotate,
    FaCheckDouble,
    FaHandshake,
    FaArrowRight
} from 'react-icons/fa6';

// ============================================================================
// SECTION 1: HOME PAGE FEATURE CARDS DATA
// Easy to edit: Modify card titles, descriptions, or icons below.
// ============================================================================
const featureData = [
    {
        title: "Real-Time Cash Flow Position",
        desc: "Get a live view of collections, payables, value in dispute, partial payment schedules in one place.",
        icon: <FaChartLine />
    },
    {
        title: "Dynamic AR & AP Management",
        desc: "Track invoice-level receivables and payables, aging and outstanding obligations with a Pay-by-Date.",
        icon: <FaFileInvoiceDollar />
    },
    {
        title: "Invoice-Level Payment Automation",
        desc: "Enable payment requests, scheduled payments and controlled settlement around individual invoices.",
        icon: <FaBoltLightning />
    },
    {
        title: "AR / AP Payment Orchestration",
        desc: "Coordinate collection and payment workflows with visibility into what is due, when and how it will move.",
        icon: <FaArrowsRotate />
    },
    {
        title: "Real-Time Reconciliation",
        desc: "Match payments to invoices on-the-go and keep settlement status updated with zero manual intervention.",
        icon: <FaCheckDouble />
    },
    {
        title: "Trade Finance Solutions",
        desc: "Connect eligible invoices to financing and trade-credit solutions when additional liquidity is required.",
        icon: <FaHandshake />
    }
];

// ============================================================================
// SECTION 2: HOME PAGE FEATURES GRID COMPONENT
// ============================================================================
const Features = () => {
    return (
        <section className={styles.featuresSection}>
            {/* Section Header */}
            <div className={styles.header}>
                <div className={styles.badge}>Platform Features</div>
                <h2>Powering Smarter Cash Flow</h2>
                <p>Everything you need to automate your invoice-to-cash process.</p>
            </div>

            {/* 6-Card Feature Grid */}
            <div className={styles.grid}>
                {featureData.map((feature, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconWrapper}>
                            {feature.icon}
                        </div>
                        <h3 className={styles.cardTitle}>{feature.title}</h3>
                        <p className={styles.cardDesc}>{feature.desc}</p>
                    </div>
                ))}
            </div>

            {/* Footer CTA linking to the detailed /features page */}
            <div className={styles.exploreCtaRow}>
                <Link to="/features" className={styles.exploreBtn}>
                    Explore All Platform Features <FaArrowRight />
                </Link>
            </div>
        </section>
    );
};

export default Features;
