import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Pricing.module.css';
import pricingHeroImg from '../assets/pricing page.png';
import { FaCircleCheck, FaArrowRight, FaCalendarDays } from 'react-icons/fa6';

// ============================================================================
// SECTION 1: PRICING PLANS CONFIGURATION DATA (P0 #7 & P0 #8)
// NOTE: States the pricing model only (no negotiated per-transaction rate cards).
// Every visible tab has full content with zero empty states.
// ============================================================================
const PLAN_ORDER = ['micro', 'smb', 'growth', 'enterprise'];

const plansData = {
    // --- PLAN 1: MICRO BUSINESSES ---
    micro: {
        tabLabel: 'Micro',
        audience: 'For Micro Businesses',
        title: 'Micro Plan',
        price: '₹ 999',
        originalPrice: '₹ 1,499',
        period: '/month',
        badge: 'Choose Your Plan',
        subtext: 'Platform subscription plus a per-transaction fee, quoted before you send a mandate request.',
        note: '*Excluding applicable taxes.',
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

    // --- PLAN 2: SMALL & MEDIUM BUSINESSES (SMB) ---
    smb: {
        tabLabel: 'SMB',
        audience: 'For Small & Medium Businesses',
        title: 'SMB Plan',
        customPrice: 'Tailored to Scale',
        badge: 'Growth Enabler',
        subtext: 'Platform subscription plus a per-transaction fee, quoted before you send a mandate request.',
        note: '*Dedicated onboarding and operational support included. Excluding applicable taxes.',
        actionType: 'inquire',
        features: [
            'Everything in Micro Plan +',
            'Bulk Invoice Upload & Batch Scheduling',
            'Role-Based User & Approval Management',
            'Automated AR/AP Aging & Settlement Views',
            'Multi-Buyer Mandate Tracking',
            'Dedicated Account Manager*'
        ]
    },

    // --- PLAN 3: GROWTH BUSINESSES ---
    growth: {
        tabLabel: 'Growth',
        audience: 'For Growing Businesses',
        title: 'Growth Plan',
        customPrice: 'High Volume Operations',
        badge: 'Multi-Entity Ready',
        subtext: 'Platform subscription plus a per-transaction fee, quoted before you send a mandate request.',
        note: '*Includes ERP/TallyPrime integration setup and API guidance. Excluding applicable taxes.',
        actionType: 'inquire',
        features: [
            'Everything in SMB Plan +',
            'Multiple Business Units & Branches',
            'ERP / TallyPrime Accounting Integration*',
            'Custom Settlement & Reconciliation Reports*',
            'Advanced Cash-Flow & DSO Analytics*',
            'High-Volume Mandate Orchestration'
        ]
    },

    // --- PLAN 4: LARGE ENTERPRISES ---
    enterprise: {
        tabLabel: 'Enterprise',
        audience: 'For Large Corporations',
        title: 'Enterprise Plan',
        customPrice: 'Bespoke Architecture',
        badge: 'Maximum Control',
        subtext: 'Platform subscription plus a per-transaction fee, quoted before you send a mandate request.',
        note: '*Direct priority support and custom enterprise integration. Excluding applicable taxes.',
        actionType: 'inquire',
        features: [
            'Everything in Growth Plan +',
            'Priority Support SLA & Escalation Desk',
            'Custom ERP & Banking Workflow Integrations*',
            'White-label / OEM Deployment Options*',
            'Dedicated Rollout & Distributor Training*',
            'Custom API & Webhook Access*'
        ]
    }
};

// ============================================================================
// SECTION 2: PRICING PAGE COMPONENT
// ============================================================================
const Pricing = () => {
    const [activePlan, setActivePlan] = useState('micro');

    return (
        <div className={styles.pricingPage}>
            {/* Ambient Background Lights */}
            <div className={styles.bgGlow1}></div>
            <div className={styles.bgGlow2}></div>

            {/* --------------------------------------------------------------
                2.1 HERO BANNER IMAGE
               -------------------------------------------------------------- */}
            <section className={styles.heroBanner}>
                <img
                    src={pricingHeroImg}
                    alt="Flexible Subscription and Mandate Pricing Tailored to Businesses of All Sizes"
                    className={styles.heroImage}
                />
            </section>

            {/* --------------------------------------------------------------
                2.2 INTERACTIVE PRICING TABS & PLAN DISPLAY CARDS
                All 4 plan panels stay mounted in the DOM (aria/SEO accessible)
                with zero empty states across Micro, SMB, Growth, and Enterprise.
               -------------------------------------------------------------- */}
            <section className={styles.pricingContainer}>
                {/* Segmented Tab Bar */}
                <div className={styles.tabBar} role="tablist" aria-label="GIROPie subscription plans">
                    {PLAN_ORDER.map((planKey) => {
                        const plan = plansData[planKey];
                        const isSelected = activePlan === planKey;
                        return (
                            <button
                                key={planKey}
                                id={`tab-${planKey}`}
                                role="tab"
                                aria-selected={isSelected}
                                aria-controls={`panel-${planKey}`}
                                type="button"
                                className={`${styles.tabButton} ${isSelected ? styles.activeTab : ''}`}
                                onClick={() => setActivePlan(planKey)}
                            >
                                {plan.tabLabel}
                            </button>
                        );
                    })}
                </div>

                {/* Plan Display Panels */}
                {PLAN_ORDER.map((planKey) => {
                    const plan = plansData[planKey];
                    const isSelected = activePlan === planKey;

                    return (
                        <div
                            key={planKey}
                            id={`panel-${planKey}`}
                            role="tabpanel"
                            aria-labelledby={`tab-${planKey}`}
                            hidden={!isSelected}
                            className={isSelected ? styles.planCard : styles.hiddenPlanCard}
                        >
                            {/* Left Column: Plan Features List */}
                            <div className={styles.planInfo}>
                                <span className={styles.planAudience}>{plan.audience}</span>
                                <h2 className={styles.planTitle}>{plan.title}</h2>

                                <ul className={styles.featureList}>
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className={styles.featureItem}>
                                            <FaCircleCheck className={styles.checkIcon} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right Column: Pricing Pod & CTA */}
                            <div className={styles.priceBox}>
                                <span className={styles.offerBadge}>{plan.badge}</span>

                                {plan.price ? (
                                    <>
                                        <span className={styles.strikethroughPrice}>{plan.originalPrice}</span>
                                        <div className={styles.currentPrice}>
                                            {plan.price} <span>{plan.period}</span>
                                        </div>
                                    </>
                                ) : (
                                    <div className={styles.customPriceHeading}>{plan.customPrice}</div>
                                )}

                                <p className={styles.priceSubtext}>{plan.subtext}</p>

                                {plan.actionType === 'trial' ? (
                                    <a
                                        href="https://live.giropie.com/signup"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.actionBtn} ${styles.primaryActionBtn}`}
                                    >
                                        Start your trial <FaArrowRight />
                                    </a>
                                ) : (
                                    <Link
                                        to="/contact"
                                        className={`${styles.actionBtn} ${styles.secondaryActionBtn}`}
                                    >
                                        Inquire Now <FaArrowRight />
                                    </Link>
                                )}

                                <span className={styles.priceNote}>{plan.note}</span>
                            </div>
                        </div>
                    );
                })}
            </section>

            {/* --------------------------------------------------------------
                2.3 CONSULTATION CALL TO ACTION
               -------------------------------------------------------------- */}
            <section className={styles.consultationSection}>
                <div className={styles.consultationCard}>
                    <h2 className={styles.consultationTitle}>Not sure which plan suits your requirement?</h2>
                    <div className={styles.accentBar}></div>
                    <p className={styles.consultationText}>
                        Every business has unique invoice volumes, payment cycles, and operational workflows. Tell us a little about your business, and we&apos;ll recommend the plan that best fits your needs.
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
