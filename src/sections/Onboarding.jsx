import React, { useState } from 'react';
import styles from './Onboarding.module.css';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'; // Importing modern icons

const tabData = [
    {
        id: 'executive',
        label: 'Executive Leadership',
        content: 'Automate and optimize accounts receivable and payable processes for a healthy cash flow and opportunities for strategic business growth, with positive working capital.'
    },
    {
        id: 'finance',
        label: 'Finance & Accounting',
        content: 'Eliminate manual reconciliation and get real-time ledger updates. Empower your team to focus on strategic financial planning rather than chasing invoices.'
    },
    {
        id: 'ar',
        label: 'AR Management',
        content: 'Reduce DSO (Days Sales Outstanding) by 5-10 days. Send automated payment links and orchestrate collection workflows effortlessly.'
    },
    {
        id: 'sales',
        label: 'Sales & BD',
        content: 'Close deals faster by offering flexible trade finance and automated payment schedules right at the point of sale.'
    }
];

const Onboarding = () => {
    const [activeTab, setActiveTab] = useState('executive');

    return (
        <section className={styles.onboardingSection}>
            {/* Left Side: Interactive Tabs */}
            <div className={styles.tabsContainer}>
                <h2 className={styles.sectionTitle}>
                    Powering Leaders, Finance Teams & Sales for Smarter Cash Flow.
                </h2>

                <div className={styles.tabHeaders}>
                    {tabData.map((tab) => (
                        <button
                            key={tab.id}
                            className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className={styles.tabContent}>
                    <p>{tabData.find(t => t.id === activeTab).content}</p>
                </div>
            </div>

            {/* Right Side: Call to Action */}
            <div className={styles.onboardRight}>
                <h2>Easy to Onboard</h2>
                <h3>3 steps to go...</h3>

                {/* Modern Checklist */}
                <div className={styles.stepList}>
                    <div className={styles.stepItem}>
                        <FaCheckCircle className={styles.stepIcon} />
                        <span>Sign up in minutes</span>
                    </div>
                    <div className={styles.stepItem}>
                        <FaCheckCircle className={styles.stepIcon} />
                        <span>Get a collection account</span>
                    </div>
                    <div className={styles.stepItem}>
                        <FaCheckCircle className={styles.stepIcon} />
                        <span>Invite your Customers & Suppliers</span>
                    </div>
                </div>

                <div className={styles.btnGroup}>
                    <button className={styles.demoBtn}>Book a Demo <FaArrowRight /></button>
                    <button className={styles.contactBtn}>Contact Us</button>
                </div>
            </div>
        </section>
    );
};

export default Onboarding;
