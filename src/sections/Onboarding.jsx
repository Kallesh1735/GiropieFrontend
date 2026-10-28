import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Onboarding.module.css';
import { FaCircleCheck, FaArrowRight, FaCheck } from 'react-icons/fa6';

// ============================================================================
// SECTION 1: ROLE-BASED PERSONA TAB DATA
// Easy to edit: Update role labels, descriptions, or highlight pills below.
// ============================================================================
const tabData = [
    {
        id: 'executive',
        label: 'Executive Leadership',
        content: 'Automate and optimize accounts receivable and payable processes for a healthy cash flow and opportunities for strategic business growth, with positive working capital.',
        highlights: [
            'Live working capital visibility',
            'Predictable settlement cycles',
            'Lower cost per invoice'
        ]
    },
    {
        id: 'finance',
        label: 'Finance & Accounting',
        content: 'Eliminate manual reconciliation and get real-time ledger updates. Empower your team to focus on strategic financial planning rather than chasing invoices.',
        highlights: [
            'Automated BRS reconciliation',
            'Structured dispute resolution',
            'ERP-friendly invoice tracking'
        ]
    },
    {
        id: 'ar',
        label: 'AR Management',
        content: 'Reduce DSO (Days Sales Outstanding) by 5-10 days. Send automated payment links and orchestrate collection workflows effortlessly.',
        highlights: [
            'Scheduled Pay-by-Date tracking',
            'Authorized bank mandate debits',
            'Automated buyer reminders'
        ]
    },
    {
        id: 'sales',
        label: 'Sales & BD',
        content: 'Close deals faster by offering flexible trade finance and automated payment schedules right at the point of sale.',
        highlights: [
            'Flexible split-payment options',
            'Zero collection friction with buyers',
            'Faster credit limit turnaround'
        ]
    }
];

// ============================================================================
// SECTION 2: ONBOARDING & PERSONAS SECTION COMPONENT
// ============================================================================
const Onboarding = () => {
    const [activeTab, setActiveTab] = useState('executive');
    const currentPersona = tabData.find((t) => t.id === activeTab) || tabData[0];

    return (
        <section className={styles.onboardingSection}>
            {/* --------------------------------------------------------------
                2.1 LEFT COLUMN: INTERACTIVE ROLE TABS & CONTENT CARD
               -------------------------------------------------------------- */}
            <div className={styles.tabsContainer}>
                <h2 className={styles.sectionTitle}>
                    Powering Leaders, Finance Teams &amp; Sales for Smarter Cash Flow.
                </h2>

                {/* Role Selector Tab Bar */}
                <div className={styles.tabHeaders}>
                    {tabData.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Role Description & Highlights Card (key triggers smooth fade animation) */}
                <div key={activeTab} className={styles.tabContent}>
                    <p>{currentPersona.content}</p>

                    <div className={styles.highlightsRow}>
                        {currentPersona.highlights.map((item, idx) => (
                            <span key={idx} className={styles.highlightPill}>
                                <FaCheck className={styles.highlightCheck} /> {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* --------------------------------------------------------------
                2.2 RIGHT COLUMN: 3-STEP ONBOARDING CHECKLIST & CTAs
               -------------------------------------------------------------- */}
            <div className={styles.onboardRight}>
                <h2>Easy to Onboard</h2>
                <h3>3 steps to go...</h3>

                {/* 3-Step Checklist */}
                <div className={styles.stepList}>
                    <div className={styles.stepItem}>
                        <FaCircleCheck className={styles.stepIcon} />
                        <span>Sign up in minutes</span>
                    </div>
                    <div className={styles.stepItem}>
                        <FaCircleCheck className={styles.stepIcon} />
                        <span>Get a collection account</span>
                    </div>
                    <div className={styles.stepItem}>
                        <FaCircleCheck className={styles.stepIcon} />
                        <span>Invite your Customers &amp; Suppliers</span>
                    </div>
                </div>

                {/* Action CTA Buttons */}
                <div className={styles.btnGroup}>
                    <a
                        href="https://calendly.com/giropie/giropie-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.demoBtn}
                    >
                        Book a Demo <FaArrowRight />
                    </a>
                    <Link to="/about#contact" className={styles.contactBtn}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Onboarding;
