import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Pricing.module.css';
import pricingHeroImg from '../assets/pricing page.png';
import { FaCircleCheck, FaArrowRight, FaCalendarDays } from 'react-icons/fa6';

const plansData = {
    micro: {
        audience: 'For Micro Businesses',
        title: 'Micro Plan',
        price: '₹ 999',
        originalPrice: '₹ 1,499',
        period: '/month',
        badge: 'Limited-Time Launch Offer',
        subtext: 'Platform Subscription + Usage-based transaction charges',
        note: '*Excluding applicable taxes. Transparent pricing with no hidden fees.',
        actionType: 'trial',
        features: [
            'Buyer–Supplier Collaboration',
            'Collection Account',
            'Accounts Receivable Management',
            'Invoice-Level Payment Commitments',
            'Accounts Payable Management',
            'Flexi Autopay setup & Management',
            'Pay-by-Date Management',
            'Invoice Dispute Resolution',
            'Split & Rescheduled Payment Management',
            'Payment Reminders & Notifications',
            'Payment Orchestration'
        ]
    },
    smb: {
        audience: 'For Small & Medium Businesses',
        title: 'SMB Plan',
        customPrice: 'Tailored to Scale',
        badge: 'Growth Enabler',
        subtext: 'Ideal for expanding operations with team-based management',
        note: '*Dedicated onboarding and operational support included.',
        actionType: 'inquire',
        features: [
            'Everything in Micro Plan +',
            'Bulk Invoice Upload',
            'Role-Based User Management',
            'Dedicated Account Manager*'
        ]
    },
    growth: {
        audience: 'For Growing Businesses',
        title: 'Growth Plan',
        customPrice: 'High Volume Volume',
        badge: 'Multi-Entity Ready',
        subtext: 'Custom reporting and ERP integration for scaling enterprises',
        note: '*Includes custom ERP connector setup and API guidance.',
        actionType: 'inquire',
        features: [
            'Everything in SMB +',
            'Multiple Business Units',
            'Custom Reports*',
            'Advanced Analytics*',
            'ERP/Accounting Integration*'
        ]
    },
    enterprise: {
        audience: 'For Large Corporations',
        title: 'Enterprise Plan',
        customPrice: 'Bespoke Architecture',
        badge: 'Maximum Control',
        subtext: 'Custom SLAs, white-label options, and dedicated infrastructure',
        note: '*Direct priority support and on-premise/private cloud integration.',
        actionType: 'inquire',
        features: [
            'Everything in Growth Plan +',
            'Priority Support SLA',
            'Custom Integrations*',
            'White-label / OEM Options*',
            'Dedicated Deployment & Training*',
            'Custom API Access*'
        ]
    }
};

const Pricing = () => {
    const [activePlan, setActivePlan] = useState('micro');
    const current = plansData[activePlan];

    return (
        <div className={styles.pricingPage}>
            {/* Ambient Background Lights */}
            <div className={styles.bgGlow1}></div>
            <div className={styles.bgGlow2}></div>

            {/* ==============================================================
                SECTION 1: HERO BANNER IMAGE
                ============================================================== */}
            <section className={styles.heroBanner}>
                <img
                    src={pricingHeroImg}
                    alt="Flexible and Transparent Pricing Tailored to Businesses of All Sizes"
                    className={styles.heroImage}
                />
            </section>

            {/* ==============================================================
                SECTION 2: INTERACTIVE PRICING TABS & CARD
                ============================================================== */}
            <section className={styles.pricingContainer}>
                {/* Segmented Tab Bar */}
                <div className={styles.tabBar}>
                    <button
                        className={`${styles.tabButton} ${activePlan === 'micro' ? styles.activeTab : ''}`}
                        onClick={() => setActivePlan('micro')}
                    >
                        Micro
                    </button>
                    <button
                        className={`${styles.tabButton} ${activePlan === 'smb' ? styles.activeTab : ''}`}
                        onClick={() => setActivePlan('smb')}
                    >
                        SMB
                    </button>
                    <button
                        className={`${styles.tabButton} ${activePlan === 'growth' ? styles.activeTab : ''}`}
                        onClick={() => setActivePlan('growth')}
                    >
                        Growth
                    </button>
                    <button
                        className={`${styles.tabButton} ${activePlan === 'enterprise' ? styles.activeTab : ''}`}
                        onClick={() => setActivePlan('enterprise')}
                    >
                        Enterprise
                    </button>
                </div>

                {/* Active Plan Display Card */}
                <div className={styles.planCard}>
                    {/* Left Side: Features */}
                    <div className={styles.planInfo}>
                        <span className={styles.planAudience}>{current.audience}</span>
                        <h2 className={styles.planTitle}>{current.title}</h2>

                        <ul className={styles.featureList}>
                            {current.features.map((feature, idx) => (
                                <li key={idx} className={styles.featureItem}>
                                    <FaCircleCheck className={styles.checkIcon} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side: Pricing Pod */}
                    <div className={styles.priceBox}>
                        <span className={styles.offerBadge}>{current.badge}</span>

                        {current.price ? (
                            <>
                                <span className={styles.strikethroughPrice}>{current.originalPrice}</span>
                                <div className={styles.currentPrice}>
                                    {current.price} <span>{current.period}</span>
                                </div>
                            </>
                        ) : (
                            <div className={styles.customPriceHeading}>{current.customPrice}</div>
                        )}

                        <p className={styles.priceSubtext}>{current.subtext}</p>

                        {current.actionType === 'trial' ? (
                            <a
                                href="https://live.giropie.com/signup"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.actionBtn} ${styles.primaryActionBtn}`}
                            >
                                Start 14-Day Free Trial <FaArrowRight />
                            </a>
                        ) : (
                            <Link
                                to="/contact"
                                className={`${styles.actionBtn} ${styles.secondaryActionBtn}`}
                            >
                                Inquire Now <FaArrowRight />
                            </Link>
                        )}

                        <span className={styles.priceNote}>{current.note}</span>
                    </div>
                </div>
            </section>

            {/* ==============================================================
                SECTION 3: CONSULTATION CALL TO ACTION
                ============================================================== */}
            <section className={styles.consultationSection}>
                <div className={styles.consultationCard}>
                    <h2 className={styles.consultationTitle}>Not sure which plan suits your requirement?</h2>
                    <div className={styles.accentBar}></div>
                    <p className={styles.consultationText}>
                        Every business has unique invoice volumes, payment cycles, and operational workflows. Tell us a little about your business, and we'll recommend the plan that best fits your needs.
                    </p>
                    <a
                        href="https://calendly.com/giropie/giropie-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.consultationBtn}
                    >
                        <FaCalendarDays /> Book a 30-minute Consultation
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
