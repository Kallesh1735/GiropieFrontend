import React from 'react';
import styles from './AboutUs.module.css';
import flowDiagram from '../assets/GIROPie-Flow Diagram.avif';
import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa6';
import missionBg from '../assets/mission-bg.jpg';
import visionBg from '../assets/vision-bg.jpg';
import valueBg from '../assets/value-bg.jpg';
import aboutHeroImg from '../assets/aboutpageimage.jpg';

const AboutUs = () => {
    return (
        <div className={styles.aboutPage}>
            {/* Ambient Background Glows */}
            <div className={styles.bgGlow1}></div>
            <div className={styles.bgGlow2}></div>
            <div className={styles.bgGlow3}></div>

            {/* ==============================================================
                SECTION 1: HERO BANNER IMAGE
                ============================================================== */}
            <section className={styles.heroBanner}>
                <img
                    src={aboutHeroImg}
                    alt="Know your True Cost per Invoice and take control of receivables and payables with real-time insights - Powered by GIROPie"
                    className={styles.heroImage}
                />
            </section>


            {/* ==============================================================
                SECTION 2: OUR STORY & THE TEAM
                ============================================================== */}
            <section className={styles.storySection}>
                {/* Part 1: Our Story */}
                <div className={styles.storyBlock}>
                    <h2 className={styles.storyTitle}>Our story</h2>

                    <div className={styles.storyQuote}>
                        “The operational complexity behind managing cash flow across receivables, payables, payments, and reconciliation.”
                    </div>

                    <p className={styles.storyText}>
                        GIROPie was founded to solve one of the most overlooked challenges in business finance. Every invoice raised triggers multiple workflows involving buyers, suppliers, finance teams, banking systems, disputes, follow-ups, and ledger reconciliation. Most organizations manage these processes through fragmented systems, manual effort, and disconnected communication.
                    </p>

                    <p className={styles.storyText}>
                        GIROPie was built to transform these fragmented workflows into a connected, real-time <strong>Invoice-to-Cash execution layer</strong>.
                    </p>
                </div>

                <div className={styles.storyDivider}></div>

                {/* Part 2: The Team */}
                <div className={styles.storyBlock}>
                    <h2 className={styles.storyTitle}>The team</h2>

                    <p className={styles.storyText}>
                        Our leadership team brings together decades of experience across commercial operations, trade finance, enterprise workflows, and business process management across Indian and global markets.
                    </p>

                    <p className={styles.storyText}>
                        This deep operational understanding drives GIROPie's approach to simplifying how businesses manage collections, payments, reconciliation, and working capital execution.
                    </p>
                </div>
            </section>
            {/* ==============================================================
                SECTION 3: WHAT WE DO & FLOW DIAGRAM
                ============================================================== */}
            <section className={styles.whatWeDoSection}>
                <h2 className={styles.storyTitle}>What we do</h2>

                <p className={styles.leadText}>
                    GIROPie connects suppliers and buyers around a shared invoice layer, bringing together the key activities that move an invoice from transaction to settlement.
                </p>

                {/* Feature Highlights Bar */}
                <div className={styles.featureTagBar}>
                    Shared Invoice Layer <span>•</span> Connected Cash-Flow <span>•</span> Reduced Operational Costs
                </div>

                {/* Central Diagram Card */}
                <div className={styles.diagramContainer}>
                    <img
                        src={flowDiagram}
                        alt="GIROPie Shared Invoice Layer Architecture Flow"
                        className={styles.diagramImg}
                    />
                </div>

                <p className={styles.diagramCaption}>
                    Together, these create a connected operational workflow across the invoice lifecycle helping businesses collaborate, resolve, schedule, pay and reconcile with real-time visibility and control. GIROPie works alongside your existing ERP and accounting systems, connecting invoice information with the actions that move cash.
                </p>
            </section>
            {/* ==============================================================
                SECTION 4: MISSION, VISION & VALUE CARDS
                ============================================================== */}
            <section className={styles.pillarsSection}>
                <div className={styles.pillarsGrid}>
                    {/* Card 1: Mission */}
                    <div className={styles.pillarCard}>
                        <img src={missionBg} alt="Mission" className={styles.pillarImage} />
                        <h3 className={styles.pillarTitle}>Mission</h3>
                        <div className={styles.pillarBar}></div>
                        <p className={styles.pillarDesc}>
                            Facilitate businesses to accurately forecast and accelerate collection of receivables by reimagining cash flow management.
                        </p>
                    </div>
                    {/* Card 2: Vision */}
                    <div className={styles.pillarCard}>
                        <img src={visionBg} alt="Vision" className={styles.pillarImage} />
                        <h3 className={styles.pillarTitle}>Vision</h3>
                        <div className={styles.pillarBar}></div>
                        <p className={styles.pillarDesc}>
                            Transforming B2B finance by becoming the leader in invoice-to-cash management, unifying AR & AP, enhancing cash flow visibility, and enabling cost-effective payment automation with embedded financing solutions.
                        </p>
                    </div>
                    {/* Card 3: Value */}
                    <div className={styles.pillarCard}>
                        <img src={valueBg} alt="Value" className={styles.pillarImage} />
                        <h3 className={styles.pillarTitle}>Value</h3>
                        <div className={styles.pillarBar}></div>
                        <p className={styles.pillarDesc}>
                            Seamless integration of digital payment system, AR/AP management, your accounting software and ERP / CRMs for informed decision making.
                        </p>
                    </div>
                </div>
            </section>
            {/* ==============================================================
                SECTION 5: INQUIRY FORM ("We Would Love to Hear From You")
                ============================================================== */}
            <section className={styles.contactSection}>
                <h2 className={styles.contactTitle}>We would love to hear from you</h2>
                <p className={styles.contactSubtitle}>
                    Powering the future of cash flow visibility and invoice automation for MSMEs.
                </p>

                <form className={styles.formGrid} onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your message has been received.'); }}>
                    {/* My Company */}
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                        <label className={styles.formLabel}>My company *</label>
                        <input
                            type="text"
                            required
                            placeholder="Enter your company name"
                            className={styles.formInput}
                        />
                    </div>

                    {/* First Name */}
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>First name *</label>
                        <input
                            type="text"
                            required
                            placeholder="Enter first name"
                            className={styles.formInput}
                        />
                    </div>

                    {/* Last Name */}
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Last name</label>
                        <input
                            type="text"
                            placeholder="Enter last name"
                            className={styles.formInput}
                        />
                    </div>

                    {/* Email */}
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Email *</label>
                        <input
                            type="email"
                            required
                            placeholder="name@company.com"
                            className={styles.formInput}
                        />
                    </div>

                    {/* Phone */}
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel}>Phone *</label>
                        <div className={styles.phoneInputWrapper}>
                            <span className={styles.countryFlag}>🇮🇳 </span>
                            <input
                                type="tel"
                                required
                                placeholder="98765 43210"
                                className={styles.phoneInput}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className={styles.submitBtnWrapper}>
                        <button type="submit" className={styles.submitBtn}>
                            Submit
                        </button>
                    </div>

                    {/* Privacy Confirmation */}
                    <p className={styles.privacyText}>
                        By submitting this form, I confirm and agree to storing and processing of my data by GIROPie as defined in the <a href="#privacy">Privacy Policy</a>*
                    </p>
                </form>
            </section>




        </div>
    );
};


export default AboutUs;
