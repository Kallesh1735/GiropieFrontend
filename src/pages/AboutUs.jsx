import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutUs.module.css';
import { trackEvent } from '../utils/analytics';
import flowDiagram from '../assets/GIROPie-Flow Diagram.avif';
import {
    FaBullseye,
    FaEye,
    FaHandshake,
    FaQuoteLeft,
    FaLayerGroup,
    FaArrowsRotate,
    FaArrowTrendDown,
    FaCheck,
    FaYoutube,
    FaFacebook,
    FaXTwitter,
    FaLinkedin
} from 'react-icons/fa6';
import missionImg from '../assets/Mission.avif';
import visionImg from '../assets/Focus_edited.avif';
import valueImg from '../assets/Brochure-PTAI.avif';
import aboutHeroImg from '../assets/aboutpageimage.jpg';

// ============================================================================
// FOUNDERS CONFIGURATION DATA (P0 #6)
// Easy to edit: Once client headshot files are supplied in src/assets/, import
// them above and assign them to `photo` below, or update the two-line bios.
// ============================================================================
const FOUNDERS_DATA = [
    {
        id: 'manjunatha-ns',
        name: 'Manjunatha NS',
        title: 'Founder and CEO',
        initials: 'MN',
        photo: null,
        bio: 'Leads product architecture, patented invoice-to-cash workflows, and enterprise partnerships at GIROPie, drawing on extensive experience across commercial operations and B2B finance.'
    },
    {
        id: 'hemalatha-bs',
        name: 'Hemalatha BS',
        title: 'Founder',
        initials: 'HB',
        photo: null,
        bio: 'Guides corporate governance, operational execution, and financial controls at PepperTree.AI, focused on dependable receivable automation for Indian MSMEs and distributors.'
    }
];

// Confirmation text shown after contact form submission (Tech Fix #9)
const CONTACT_CONFIRMATION_TEXT =
    'Thank you — we have received your details and our team will reach out within one business day.';

const AboutUs = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [confirmationMsg, setConfirmationMsg] = useState(CONTACT_CONFIRMATION_TEXT);
    const formStartedAtRef = useRef(0);

    useEffect(() => {
        formStartedAtRef.current = Date.now();
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        const form = e.currentTarget;
        const formData = new FormData(form);
        const payload = {
            company: (formData.get('company') || '').toString().trim(),
            firstName: (formData.get('firstName') || '').toString().trim(),
            lastName: (formData.get('lastName') || '').toString().trim(),
            email: (formData.get('email') || '').toString().trim(),
            phone: (formData.get('phone') || '').toString().trim(),
            website_url: (formData.get('website_url') || '').toString().trim(),
            elapsedMs: formStartedAtRef.current ? Date.now() - formStartedAtRef.current : 0,
            pagePath: typeof window !== 'undefined' ? window.location.pathname : '/about'
        };

        setIsSubmitting(true);
        setSubmitError('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const contentType = response.headers.get('content-type') || '';
            const isJson = contentType.includes('application/json');
            const data = isJson ? await response.json() : null;

            if (!response.ok) {
                // Allow local `vite` dev server testing when `/api/contact` is not mounted
                if (import.meta.env.DEV && response.status === 404) {
                    console.info('[GIROPie Dev] Contact payload validated locally:', payload);
                } else {
                    throw new Error(
                        (data && data.error) ||
                            'Unable to submit your inquiry right now. Please try again shortly.'
                    );
                }
            }

            if (data && data.message) {
                setConfirmationMsg(data.message);
            } else {
                setConfirmationMsg(CONTACT_CONFIRMATION_TEXT);
            }

            trackEvent('contact_form_submit', {
                form_id: 'about_contact_form',
                page_path: payload.pagePath
            });

            setIsSubmitted(true);
            form.reset();
            formStartedAtRef.current = Date.now();
            setTimeout(() => {
                setIsSubmitted(false);
            }, 9000);
        } catch (err) {
            setSubmitError(err.message || 'Unable to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                <div className={styles.heroBadge}>
                    <span className={styles.badgeDot}></span>
                    About GIROPie
                </div>
                <div className={styles.heroImageContainer}>
                    <img
                        src={aboutHeroImg}
                        alt="About GIROPie - Connected Invoice-to-Cash and Receivables Automation Platform"
                        className={styles.heroImage}
                    />
                </div>
            </section>

            {/* ==============================================================
                SECTION 2: OUR STORY & THE TEAM
                ============================================================== */}
            <section className={styles.storySection}>
                {/* Part 1: Our Story */}
                <div className={styles.storyCard}>
                    <div className={styles.storyHeader}>
                        <h2 className={styles.storyTitle}>Our story</h2>
                        <div className={styles.storyTitleUnderline}></div>
                    </div>

                    <div className={styles.storyQuoteBox}>
                        <FaQuoteLeft className={styles.quoteIcon} />
                        <p className={styles.storyQuoteText}>
                            “The operational complexity behind managing cash flow across receivables, payables, payments, and reconciliation.”
                        </p>
                    </div>

                    <p className={styles.storyText}>
                        GIROPie was founded to solve one of the most overlooked challenges in business finance. Every invoice raised triggers multiple workflows involving buyers, suppliers, finance teams, banking systems, disputes, follow-ups, and ledger reconciliation. Most organizations manage these processes through fragmented systems, manual effort, and disconnected communication.
                    </p>

                    <p className={styles.storyText}>
                        GIROPie was built to transform these fragmented workflows into a connected, real-time <strong>Invoice-to-Cash execution layer</strong>.
                    </p>
                </div>

                {/* Part 2: The Team — Two Founder Cards (P0 #6) */}
                <div className={styles.teamCard}>
                    <div className={styles.storyHeader}>
                        <h2 className={styles.storyTitle}>The team</h2>
                        <div className={styles.teamTitleUnderline}></div>
                    </div>

                    <div className={styles.foundersGrid}>
                        {FOUNDERS_DATA.map((founder) => (
                            <article key={founder.id} className={styles.founderCard}>
                                <div className={styles.founderPhotoWrap}>
                                    {founder.photo ? (
                                        <img
                                            src={founder.photo}
                                            alt={`${founder.name}, ${founder.title}`}
                                            className={styles.founderPhoto}
                                        />
                                    ) : (
                                        <div
                                            className={styles.founderAvatarFallback}
                                            role="img"
                                            aria-label={`${founder.name}, ${founder.title}`}
                                        >
                                            <span>{founder.initials}</span>
                                        </div>
                                    )}
                                </div>

                                <div className={styles.founderDetails}>
                                    <div className={styles.founderHeadingRow}>
                                        <h3 className={styles.founderName}>{founder.name}</h3>
                                        <span className={styles.founderRoleBadge}>{founder.title}</span>
                                    </div>
                                    <p className={styles.founderBio}>{founder.bio}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==============================================================
                SECTION 3: WHAT WE DO & FLOW DIAGRAM (Shared Invoice Layer)
                ============================================================== */}
            <section id="what-we-do" className={styles.whatWeDoSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.storyTitle}>What we do</h2>
                    <p className={styles.leadText}>
                        GIROPie connects suppliers and buyers around a shared invoice layer, bringing together the key activities that move an invoice from transaction to settlement.
                    </p>
                </div>

                {/* 3 Core Highlight Cards */}
                <div className={styles.pillarsTrioGrid}>
                    <div className={styles.trioCard}>
                        <div className={`${styles.trioIconWrapper} ${styles.trioIcon1}`}>
                            <FaLayerGroup />
                        </div>
                        <h3 className={styles.trioTitle}>Shared Invoice Layer</h3>
                    </div>

                    <div className={styles.trioCard}>
                        <div className={`${styles.trioIconWrapper} ${styles.trioIcon2}`}>
                            <FaArrowsRotate />
                        </div>
                        <h3 className={styles.trioTitle}>Connected Cash-Flow</h3>
                    </div>

                    <div className={styles.trioCard}>
                        <div className={`${styles.trioIconWrapper} ${styles.trioIcon3}`}>
                            <FaArrowTrendDown />
                        </div>
                        <h3 className={styles.trioTitle}>Reduced Operational Costs</h3>
                    </div>
                </div>

                {/* Central Architecture Flow Diagram */}
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
                        <div className={styles.pillarImageFrame}>
                            <img src={missionImg} alt="Mission" className={styles.pillarImage} />
                            <div className={`${styles.pillarIconBadge} ${styles.missionBadge}`}>
                                <FaBullseye />
                            </div>
                        </div>
                        <h3 className={styles.pillarTitle}>Mission</h3>
                        <div className={styles.pillarBar}></div>
                        <p className={styles.pillarDesc}>
                            Facilitate businesses to accurately forecast and accelerate collection of receivables by reimagining cash flow management.
                        </p>
                    </div>

                    {/* Card 2: Vision */}
                    <div className={styles.pillarCard}>
                        <div className={styles.pillarImageFrame}>
                            <img src={visionImg} alt="Vision" className={styles.pillarImage} />
                            <div className={`${styles.pillarIconBadge} ${styles.visionBadge}`}>
                                <FaEye />
                            </div>
                        </div>
                        <h3 className={styles.pillarTitle}>Vision</h3>
                        <div className={styles.pillarBar}></div>
                        <p className={styles.pillarDesc}>
                            Transforming B2B finance by becoming the leader in invoice-to-cash management, unifying AR & AP, enhancing cash flow visibility, and enabling cost-effective payment automation with embedded financing solutions.
                        </p>
                    </div>

                    {/* Card 3: Value */}
                    <div className={styles.pillarCard}>
                        <div className={styles.pillarImageFrame}>
                            <img src={valueImg} alt="Value" className={styles.pillarImage} />
                            <div className={`${styles.pillarIconBadge} ${styles.valueBadge}`}>
                                <FaHandshake />
                            </div>
                        </div>
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
            <section className={styles.contactSection} id="contact">
                <h2 className={styles.contactTitle}>We would love to hear from you</h2>
                <p className={styles.contactSubtitle}>
                    Powering the future of cash flow visibility and invoice automation for MSMEs.
                </p>

                <form className={styles.formGrid} onSubmit={handleFormSubmit} noValidate={false}>
                    {/* Hidden Honeypot Field for Automated Spam Bot Protection (Tech Fix #9) */}
                    <div className={styles.honeypotField} aria-hidden="true">
                        <label htmlFor="contact-website-url">Website</label>
                        <input
                            id="contact-website-url"
                            name="website_url"
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                        />
                    </div>

                    {/* In-page Success Notice Banner */}
                    {isSubmitted && (
                        <div className={styles.successNotice} role="status" aria-live="polite">
                            <FaCheck className={styles.successIcon} />
                            <span>{confirmationMsg}</span>
                        </div>
                    )}

                    {/* Validation / Delivery Error Banner */}
                    {submitError && (
                        <div className={styles.errorNotice} role="alert">
                            <span>{submitError}</span>
                        </div>
                    )}

                    {/* My Company */}
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                        <label htmlFor="contact-company" className={styles.formLabel}>My company *</label>
                        <input
                            id="contact-company"
                            name="company"
                            type="text"
                            required
                            autoComplete="organization"
                            placeholder="Enter your company name"
                            className={styles.formInput}
                        />
                    </div>

                    {/* First Name */}
                    <div className={styles.formGroup}>
                        <label htmlFor="contact-first-name" className={styles.formLabel}>First name *</label>
                        <input
                            id="contact-first-name"
                            name="firstName"
                            type="text"
                            required
                            autoComplete="given-name"
                            placeholder="Enter first name"
                            className={styles.formInput}
                        />
                    </div>

                    {/* Last Name */}
                    <div className={styles.formGroup}>
                        <label htmlFor="contact-last-name" className={styles.formLabel}>Last name</label>
                        <input
                            id="contact-last-name"
                            name="lastName"
                            type="text"
                            autoComplete="family-name"
                            placeholder="Enter last name"
                            className={styles.formInput}
                        />
                    </div>

                    {/* Email */}
                    <div className={styles.formGroup}>
                        <label htmlFor="contact-email" className={styles.formLabel}>Email *</label>
                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="name@company.com"
                            className={styles.formInput}
                        />
                    </div>

                    {/* Phone */}
                    <div className={styles.formGroup}>
                        <label htmlFor="contact-phone" className={styles.formLabel}>Phone *</label>
                        <div className={styles.phoneInputWrapper}>
                            <span className={styles.countryFlag}>🇮🇳</span>
                            <input
                                id="contact-phone"
                                name="phone"
                                type="tel"
                                required
                                autoComplete="tel"
                                placeholder="98765 43210"
                                className={styles.phoneInput}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className={styles.submitBtnWrapper}>
                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>

                    {/* Privacy Confirmation */}
                    <p className={styles.privacyText}>
                        By submitting this form, I confirm and agree to storing and processing of my data by GIROPie as defined in the <Link to="/privacy">Privacy Policy</Link>*
                    </p>

                    {/* Social Media Connect Bar */}
                    <div className={styles.socialConnectBar}>
                        <h3 className={styles.socialConnectTitle}>Connect with GIROPie</h3>
                        <p className={styles.socialConnectSubtitle}>
                            Follow us on social media for working capital insights, product releases, and news.
                        </p>
                        <div className={styles.socialConnectLinks}>
                            <a
                                href="https://www.linkedin.com/company/peppertreeai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.socialPill} ${styles.linkedin}`}
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={18} /> <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://x.com/PeppertreeAI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.socialPill} ${styles.twitter}`}
                                aria-label="X (Twitter)"
                            >
                                <FaXTwitter size={17} /> <span>X (Twitter)</span>
                            </a>
                            <a
                                href="https://www.youtube.com/@giropie"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.socialPill} ${styles.youtube}`}
                                aria-label="YouTube"
                            >
                                <FaYoutube size={18} /> <span>YouTube</span>
                            </a>
                            <a
                                href="https://www.facebook.com/giropie/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.socialPill} ${styles.facebook}`}
                                aria-label="Facebook"
                            >
                                <FaFacebook size={18} /> <span>Facebook</span>
                            </a>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AboutUs;
