import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './P1Pages.module.css';
import { trackEvent } from '../utils/analytics';
import {
    FaCalendarDays,
    FaArrowRight,
    FaLocationDot,
    FaCheck
} from 'react-icons/fa6';

// ============================================================================
// CONTACT & BOOK A DEMO PAGE — /contact (P1 #7 & Tech Fix #9)
// Five-field inquiry form routed to POST /api/contact (mailbox + CRM + spam
// protection) alongside direct 30-minute Calendly booking and trial signup.
// ============================================================================

const CONFIRMATION_TEXT =
    'Thank you — we have received your details and our team will reach out within one business day.';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [confirmationMsg, setConfirmationMsg] = useState(CONFIRMATION_TEXT);
    const formStartedAtRef = useRef(0);

    useEffect(() => {
        formStartedAtRef.current = Date.now();
    }, []);

    const handleSubmit = async (e) => {
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
            pagePath: '/contact'
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
            const data = contentType.includes('application/json') ? await response.json() : null;

            if (!response.ok) {
                if (import.meta.env.DEV && response.status === 404) {
                    console.info('[GIROPie Dev] Contact payload validated locally:', payload);
                } else {
                    throw new Error(
                        (data && data.error) ||
                            'Unable to submit your inquiry right now. Please try again shortly.'
                    );
                }
            }

            setConfirmationMsg((data && data.message) || CONFIRMATION_TEXT);
            trackEvent('contact_form_submit', {
                form_id: 'contact_page_form',
                page_path: '/contact'
            });

            setIsSubmitted(true);
            form.reset();
            formStartedAtRef.current = Date.now();
        } catch (err) {
            setSubmitError(err.message || 'Unable to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                {/* 1. Hero */}
                <header className={styles.heroSection}>
                    <div className={styles.eyebrowBadge}>
                        <span className={styles.eyebrowDot} />
                        Contact &amp; Product Walkthrough
                    </div>
                    <h1 className={styles.heroTitle}>
                        Book a 30-minute demo or <span className={styles.heroHighlight}>talk to our team.</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Walk through GIROPie on your TallyPrime or ERP invoice workflow, review mandate pricing for your monthly volume, or send us a question below.
                    </p>
                </header>

                {/* 2. Split Grid: Direct Actions (Left) + 5-Field Inquiry Form (Right) */}
                <section className={styles.sectionBlock}>
                    <div className={styles.contactSplitGrid}>
                        {/* Left Column */}
                        <div className={styles.contactSideStack}>
                            <div className={styles.infoCard}>
                                <span className={styles.cardTag}>Fastest Way to Evaluate</span>
                                <h2 className={styles.cardTitle}>Book a 30-Minute Live Demo</h2>
                                <p className={styles.cardText}>
                                    Pick a convenient slot on Calendly for a live walkthrough covering Pay-by-Date scheduling, NPCI eMandate/NACH debits, and TallyPrime reconciliation.
                                </p>
                                <div>
                                    <a
                                        href="https://calendly.com/giropie/giropie-demo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.primaryCta}
                                    >
                                        <FaCalendarDays /> Book on Calendly
                                    </a>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <span className={styles.cardTag}>Ready to Onboard?</span>
                                <h2 className={styles.cardTitle}>Start Your Trial</h2>
                                <p className={styles.cardText}>
                                    Create your GIROPie account, set up your collection workflow, and invite buyers or send invoice-level mandate links.
                                </p>
                                <div>
                                    <a
                                        href="https://live.giropie.com/signup"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.secondaryCta}
                                    >
                                        Start your trial <FaArrowRight />
                                    </a>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.iconPod}><FaLocationDot /></div>
                                <h2 className={styles.cardTitle}>Registered Office</h2>
                                <p className={styles.cardText}>
                                    <strong>PepperTree.AI Pvt. Ltd.</strong><br />
                                    No. 1139, Maruthi Complex, 3rd Floor,<br />
                                    BEML Layout, 3rd Stage, Bangalore 560098,<br />
                                    Karnataka, India
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Five-Field Form */}
                        <div className={styles.contactFormCard}>
                            <h2 className={styles.cardTitle} style={{ marginBottom: '0.4rem' }}>
                                Send Us Your Details
                            </h2>
                            <p className={styles.cardText} style={{ marginBottom: '1.5rem' }}>
                                Fill in the five fields below and our team will respond within one business day.
                            </p>

                            <form className={styles.formGrid} onSubmit={handleSubmit}>
                                {/* Hidden Honeypot for Bot Spam Protection */}
                                <div className={styles.honeypot} aria-hidden="true">
                                    <label htmlFor="contact-page-website">Website</label>
                                    <input
                                        id="contact-page-website"
                                        name="website_url"
                                        type="text"
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                </div>

                                {isSubmitted && (
                                    <div className={styles.statusSuccess} role="status" aria-live="polite">
                                        <FaCheck />
                                        <span>{confirmationMsg}</span>
                                    </div>
                                )}

                                {submitError && (
                                    <div className={styles.statusError} role="alert">
                                        {submitError}
                                    </div>
                                )}

                                {/* Field 1: Company */}
                                <div className={`${styles.fieldGroup} ${styles.fullSpan}`}>
                                    <label htmlFor="cp-company" className={styles.fieldLabel}>
                                        Company name *
                                    </label>
                                    <input
                                        id="cp-company"
                                        name="company"
                                        type="text"
                                        required
                                        autoComplete="organization"
                                        placeholder="Enter your company name"
                                        className={styles.textInput}
                                    />
                                </div>

                                {/* Field 2: First Name */}
                                <div className={styles.fieldGroup}>
                                    <label htmlFor="cp-first-name" className={styles.fieldLabel}>
                                        First name *
                                    </label>
                                    <input
                                        id="cp-first-name"
                                        name="firstName"
                                        type="text"
                                        required
                                        autoComplete="given-name"
                                        placeholder="Enter first name"
                                        className={styles.textInput}
                                    />
                                </div>

                                {/* Field 3: Last Name */}
                                <div className={styles.fieldGroup}>
                                    <label htmlFor="cp-last-name" className={styles.fieldLabel}>
                                        Last name
                                    </label>
                                    <input
                                        id="cp-last-name"
                                        name="lastName"
                                        type="text"
                                        autoComplete="family-name"
                                        placeholder="Enter last name"
                                        className={styles.textInput}
                                    />
                                </div>

                                {/* Field 4: Business Email */}
                                <div className={styles.fieldGroup}>
                                    <label htmlFor="cp-email" className={styles.fieldLabel}>
                                        Business email *
                                    </label>
                                    <input
                                        id="cp-email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        placeholder="name@company.com"
                                        className={styles.textInput}
                                    />
                                </div>

                                {/* Field 5: Phone */}
                                <div className={styles.fieldGroup}>
                                    <label htmlFor="cp-phone" className={styles.fieldLabel}>
                                        Phone number *
                                    </label>
                                    <input
                                        id="cp-phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        autoComplete="tel"
                                        placeholder="+91 98765 43210"
                                        className={styles.textInput}
                                    />
                                </div>

                                <div className={styles.fullSpan}>
                                    <button
                                        type="submit"
                                        className={styles.submitBtn}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                                    </button>
                                </div>

                                <p className={styles.privacyHint}>
                                    By submitting this form, you agree to the processing of your contact information by GIROPie in accordance with our <Link to="/privacy">Privacy Policy</Link>.
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;

