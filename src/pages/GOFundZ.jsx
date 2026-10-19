import React, { useState } from 'react';
import styles from './GOFundZ.module.css';
import gofundzHeroImg from '../assets/gofundz page.png';
import {
    FaHandshake,
    FaMoneyBillTrendUp,
    FaFileInvoiceDollar,
    FaShieldHalved,
    FaBoltLightning,
    FaArrowRight
} from 'react-icons/fa6';

const industryData = [
    {
        name: 'Manufacturing & Industrial Goods',
        description: 'Enables manufacturers to optimize cash flow by automating invoice collections, payables, and financing. Reduces dependency on manual payment cycles and ensures real-time working capital access.'
    },
    {
        name: 'Distribution & Wholesale Trade',
        description: 'Equips distributors and wholesalers with fast working capital and invoice discounting to maintain continuous inventory flow and bridge credit gaps between supplier payments and client settlements.'
    },
    {
        name: 'Retail Trade',
        description: 'Provides flexible credit lines and merchant financing to manage seasonal demand peaks, supplier payables, and store expansions without operational stress.'
    },
    {
        name: 'Pharmaceutical & Healthcare',
        description: 'Tailored liquidity solutions for pharma manufacturers, distributors, and hospital suppliers managing extended payment terms from institutional healthcare buyers.'
    },
    {
        name: 'Automotive & Ancillaries',
        description: 'Supports tier-1 and tier-2 auto component manufacturers and dealerships with supply chain financing, inventory credit, and real-time vendor settlement.'
    }
];

const GOFundZ = () => {
    const [activeIndustry, setActiveIndustry] = useState(0);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! Your trade finance application has been submitted. Our team will contact you shortly.');
    };

    return (
        <div className={styles.gofundzPage}>
            {/* Ambient Lighting Orbs */}
            <div className={styles.bgGlow1}></div>
            <div className={styles.bgGlow2}></div>

            {/* ==============================================================
                SECTION 1: HERO BANNER (CLEAN IMAGE + EDITABLE OVERLAY TEXT)
                ============================================================== */}
            <section className={styles.heroBanner}>
                <div className={styles.heroImageWrapper}>
                    <img
                        src={gofundzHeroImg}
                        alt="GOFundZ Trade Finance Solutions"
                        className={styles.heroImage}
                    />

                    {/* Editable HTML Text & Button Overlay */}
                    <div className={styles.heroOverlayContent}>
                        <span className={styles.heroTag}>Empower Your Trade with</span>
                        <h1 className={styles.heroTitle}>
                            <span className={styles.titleBlue}>HASSLE-FREE</span> <span className={styles.titleOrange}>FINANCING</span>
                        </h1>
                        <a href="#apply-section" className={styles.applyNowBtn}>
                            Apply Now <FaArrowRight />
                        </a>
                    </div>
                </div>
            </section>

            {/* Intro Lead Text */}
            <p className={styles.introText}>
                Get the right financial support to streamline your domestic trade operations. Access trade finance solutions that enhance cash flow, mitigate risks, and drive business growth—helping you manage receivables, payables, and working capital with ease.
            </p>

            {/* ==============================================================
                SECTION 2: IMPORTANCE OF TRADE FINANCE (5 PILLARS)
                ============================================================== */}
            <section className={styles.importanceSection}>
                <h2 className={styles.sectionTitle}>The Importance of Trade Finance for Businesses</h2>
                <div className={styles.pillarsGrid}>
                    <div className={styles.pillarCard}>
                        <div className={`${styles.pillarIconPod} ${styles.podBlue}`}>
                            <FaHandshake />
                        </div>
                        <h3 className={styles.pillarTitle}>Unlock Working Capital</h3>
                    </div>

                    <div className={styles.pillarCard}>
                        <div className={`${styles.pillarIconPod} ${styles.podGreen}`}>
                            <FaMoneyBillTrendUp />
                        </div>
                        <h3 className={styles.pillarTitle}>Invoice Financing</h3>
                    </div>

                    <div className={styles.pillarCard}>
                        <div className={`${styles.pillarIconPod} ${styles.podOrange}`}>
                            <FaFileInvoiceDollar />
                        </div>
                        <h3 className={styles.pillarTitle}>Bill Discounting</h3>
                    </div>

                    <div className={styles.pillarCard}>
                        <div className={`${styles.pillarIconPod} ${styles.podPurple}`}>
                            <FaShieldHalved />
                        </div>
                        <h3 className={styles.pillarTitle}>Mitigate Risks</h3>
                    </div>

                    <div className={styles.pillarCard}>
                        <div className={`${styles.pillarIconPod} ${styles.podCyan}`}>
                            <FaBoltLightning />
                        </div>
                        <h3 className={styles.pillarTitle}>Fast & Easy Processing</h3>
                    </div>
                </div>
            </section>

            {/* ==============================================================
                SECTION 3: SOLUTIONS & APPLY FORM (2-COLUMN SPLIT)
                ============================================================== */}
            <section id="apply-section" className={styles.solutionsSection}>
                <div className={styles.solutionsGrid}>
                    {/* Left: 5 Solution Cards */}
                    <div>
                        <h2 className={styles.sectionTitle} style={{ textAlign: 'left', marginBottom: '2rem' }}>
                            Our Trade Finance Solutions
                        </h2>
                        <div className={styles.solutionsList}>
                            <div className={styles.solutionCard}>
                                <h3 className={styles.solutionTitle}>Working Capital</h3>
                                <p className={styles.solutionDesc}>
                                    Ensure smooth business operations with flexible financing solutions, giving you access to funds when you need them the most.
                                </p>
                            </div>

                            <div className={styles.solutionCard}>
                                <h3 className={styles.solutionTitle}>Letter of Credit (LC)</h3>
                                <p className={styles.solutionDesc}>
                                    Facilitate secure domestic and international trade with a Letter of Credit, ensuring guaranteed payments and reduced transaction risks.
                                </p>
                            </div>

                            <div className={styles.solutionCard}>
                                <h3 className={styles.solutionTitle}>Invoice Discounting</h3>
                                <p className={styles.solutionDesc}>
                                    Convert unpaid invoices into instant cash flow, helping you maintain liquidity without disrupting customer relationships.
                                </p>
                            </div>

                            <div className={styles.solutionCard}>
                                <h3 className={styles.solutionTitle}>Supply Chain Financing</h3>
                                <p className={styles.solutionDesc}>
                                    Strengthen your supply chain by enabling early supplier payments while extending credit terms for buyers, ensuring balanced cash flow.
                                </p>
                            </div>

                            <div className={styles.solutionCard}>
                                <h3 className={styles.solutionTitle}>Bank Guarantee (BG)</h3>
                                <p className={styles.solutionDesc}>
                                    Enhance business credibility and secure contracts with a Bank Guarantee, offering financial assurance for large-scale transactions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Apply Today Form */}
                    <div className={styles.applyCard}>
                        <h3 className={styles.applyTitle}>Apply Today</h3>
                        <form className={styles.applyForm} onSubmit={handleFormSubmit}>
                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Company Name *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter company name"
                                    className={styles.formInput}
                                />
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Email *</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="name@company.com"
                                        className={styles.formInput}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Mobile Number *</label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="98765 43210"
                                        className={styles.formInput}
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Business Vintage *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. 3 Years"
                                        className={styles.formInput}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Turnover *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. ₹5 Cr"
                                        className={styles.formInput}
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.formLabel}>Solution *</label>
                                <select required className={styles.formSelect}>
                                    <option value="">Select a solution</option>
                                    <option value="Working Capital">Working Capital</option>
                                    <option value="Letter of Credit">Letter of Credit (LC)</option>
                                    <option value="Invoice Discounting">Invoice Discounting</option>
                                    <option value="Supply Chain Financing">Supply Chain Financing</option>
                                    <option value="Bank Guarantee">Bank Guarantee (BG)</option>
                                </select>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* ==============================================================
                SECTION 4: WHO WE SUPPORT (INDUSTRY TABS)
                ============================================================== */}
            <section className={styles.supportSection}>
                <h2 className={styles.sectionTitle}>Who We Support</h2>
                <div className={styles.supportCard}>
                    <div className={styles.industryTabs}>
                        {industryData.map((item, idx) => (
                            <button
                                key={idx}
                                className={`${styles.industryTab} ${activeIndustry === idx ? styles.activeIndustryTab : ''}`}
                                onClick={() => setActiveIndustry(idx)}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    <div className={styles.industryContent}>
                        <p>{industryData[activeIndustry].description}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GOFundZ;
