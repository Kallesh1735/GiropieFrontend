import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './TrueCostModal.module.css';
import logo from '../assets/giropie-logo.png';
import { FaXmark, FaRotateLeft, FaCalendarCheck } from 'react-icons/fa6';

const TrueCostModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1); // 1 = Info Form, 2 = Interactive Calculator
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // Calculator state
    const [monthlyInvoices, setMonthlyInvoices] = useState(2500);

    // Close on ESC key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleStart = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handleReset = () => {
        setStep(1);
    };

    // Cost calculations based on ₹150 average manual cost per credit invoice (from FAQ)
    const costPerInvoice = 150;
    const currentAnnualCost = monthlyInvoices * costPerInvoice * 12;
    // Estimated 40% - 60% operational reduction with GIROPie
    const annualSavings = Math.round(currentAnnualCost * 0.45);
    const hoursSavedPerYear = Math.round(monthlyInvoices * 0.22 * 12);

    // Format currency to Indian Rupees Lakhs or Crores
    const formatINR = (val) => {
        if (val >= 10000000) {
            return `₹${(val / 10000000).toFixed(2)} Cr`;
        }
        if (val >= 100000) {
            return `₹${(val / 100000).toFixed(2)} Lakhs`;
        }
        return `₹${val.toLocaleString('en-IN')}`;
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                    type="button"
                    className={styles.closeBtn}
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <FaXmark />
                </button>

                {/* Modal Header */}
                <div className={styles.modalHeader}>
                    <img src={logo} alt="GIROPie Logo" className={styles.modalLogo} />
                    <h2 className={styles.modalHeading}>
                        {step === 1
                            ? 'Discover The Actual Cost Your Organization Incurs To Collect And Process Each Payment'
                            : `True Cost Analysis for ${formData.name || 'Your Organization'}`}
                    </h2>
                </div>

                {step === 1 ? (
                    /* ==========================================================
                       STEP 1: CAPTURE FORM (Pixel-matched to old website screenshot)
                       ========================================================== */
                    <div>
                        <div className={styles.modalBodyGrid}>
                            {/* Left Column: Clean Fintech Illustration */}
                            <div className={styles.illustrationCol}>
                                <svg
                                    className={styles.fintechSvg}
                                    viewBox="0 0 400 320"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Laptop Base */}
                                    <rect x="50" y="190" width="300" height="16" rx="8" fill="#1C4E80" />
                                    <path d="M70 190L100 80H300L330 190H70Z" fill="#3A8DD5" opacity="0.25" />
                                    <rect x="95" y="80" width="210" height="110" rx="6" fill="#1C4E80" />
                                    <rect x="105" y="90" width="190" height="90" rx="4" fill="#F8FAFC" />

                                    {/* Folders & Data on Screen */}
                                    <rect x="115" y="100" width="28" height="22" rx="3" fill="#3A8DD5" />
                                    <rect x="150" y="100" width="28" height="22" rx="3" fill="#3A8DD5" />
                                    <rect x="185" y="100" width="28" height="22" rx="3" fill="#3A8DD5" />
                                    <rect x="115" y="130" width="100" height="6" rx="3" fill="#CBD5E1" />
                                    <rect x="115" y="142" width="70" height="6" rx="3" fill="#E2E8F0" />
                                    <rect x="115" y="154" width="90" height="6" rx="3" fill="#E2E8F0" />

                                    {/* Giant Floating Invoice */}
                                    <rect x="190" y="40" width="130" height="170" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.1))" />
                                    <rect x="205" y="55" width="55" height="12" rx="3" fill="#1C4E80" />
                                    <rect x="205" y="75" width="100" height="4" rx="2" fill="#E2E8F0" />
                                    <rect x="205" y="85" width="90" height="4" rx="2" fill="#E2E8F0" />
                                    <rect x="205" y="95" width="100" height="4" rx="2" fill="#E2E8F0" />
                                    <rect x="205" y="115" width="100" height="1" fill="#E2E8F0" />
                                    <circle cx="285" cy="145" r="14" fill="#22C55E" opacity="0.2" />
                                    <path d="M279 145L283 149L292 140" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                                    {/* Coins Stack */}
                                    <ellipse cx="80" cy="240" rx="24" ry="10" fill="#F7931E" />
                                    <ellipse cx="80" cy="232" rx="24" ry="10" fill="#FFAA47" />
                                    <ellipse cx="80" cy="224" rx="24" ry="10" fill="#FFC27A" />
                                    <ellipse cx="80" cy="216" rx="24" ry="10" fill="#F7931E" />

                                    {/* Calculator & Receipt */}
                                    <rect x="280" y="150" width="75" height="95" rx="6" fill="#1E293B" />
                                    <rect x="290" y="160" width="55" height="16" rx="3" fill="#64748B" />
                                    <circle cx="295" cy="190" r="4" fill="#38BDF8" />
                                    <circle cx="308" cy="190" r="4" fill="#38BDF8" />
                                    <circle cx="321" cy="190" r="4" fill="#38BDF8" />
                                    <circle cx="334" cy="190" r="4" fill="#F7931E" />
                                    <circle cx="295" cy="204" r="4" fill="#94A3B8" />
                                    <circle cx="308" cy="204" r="4" fill="#94A3B8" />
                                    <circle cx="321" cy="204" r="4" fill="#94A3B8" />
                                    <circle cx="334" cy="204" r="4" fill="#F7931E" />
                                    <circle cx="295" cy="218" r="4" fill="#94A3B8" />
                                    <circle cx="308" cy="218" r="4" fill="#94A3B8" />
                                    <circle cx="321" cy="218" r="4" fill="#94A3B8" />
                                    <circle cx="334" cy="218" r="4" fill="#22C55E" />
                                </svg>
                            </div>

                            {/* Right Column: 3 Form Inputs */}
                            <form onSubmit={handleStart} className={styles.formCol}>
                                <div className={styles.formField}>
                                    <label className={styles.fieldLabel}>Let's Start With Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Who are we speaking to?"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className={styles.fieldInput}
                                    />
                                </div>

                                <div className={styles.formField}>
                                    <label className={styles.fieldLabel}>Drop Your Email Here</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="example@email.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className={styles.fieldInput}
                                    />
                                </div>

                                <div className={styles.formField}>
                                    <label className={styles.fieldLabel}>Help Us With Your Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Best number to reach you"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className={styles.fieldInput}
                                    />
                                </div>

                                <button type="submit" className={styles.startBtn}>
                                    Start
                                </button>
                            </form>
                        </div>

                        {/* Footer Disclaimer */}
                        <div className={styles.modalFooter}>
                            <p className={styles.disclaimerText}>
                                The information you provide will be used solely to discover your True Cost per Invoice and share insights on how GIROPie can help optimize your receivable and payable processes. Your details will not be shared with third parties without consent. For more information, please review our{' '}
                                <Link to="/privacy" onClick={onClose}>
                                    Privacy Policy
                                </Link>.
                            </p>
                        </div>
                    </div>
                ) : (
                    /* ==========================================================
                       STEP 2: INTERACTIVE SAVINGS CALCULATOR
                       ========================================================== */
                    <div className={styles.calculatorView}>
                        <p className={styles.calcSubhead}>
                            Adjust your monthly credit invoice volume to estimate your annual operational cost savings.
                        </p>

                        {/* Invoice Volume Slider */}
                        <div className={styles.sliderBox}>
                            <div className={styles.sliderLabelRow}>
                                <span className={styles.sliderLabel}>Monthly Credit Invoices Handled:</span>
                                <span className={styles.sliderValue}>
                                    {monthlyInvoices.toLocaleString('en-IN')} invoices
                                </span>
                            </div>
                            <input
                                type="range"
                                min="500"
                                max="25000"
                                step="250"
                                value={monthlyInvoices}
                                onChange={(e) => setMonthlyInvoices(Number(e.target.value))}
                                className={styles.rangeInput}
                            />
                        </div>

                        {/* Key Results Grid */}
                        <div className={styles.calcResultsGrid}>
                            <div className={styles.resultCard}>
                                <div className={styles.resultTitle}>Estimated Manual Cost</div>
                                <h3 className={styles.resultStat}>{formatINR(currentAnnualCost)}</h3>
                                <div className={styles.resultNote}>@ ₹150 avg manual cost / invoice</div>
                            </div>

                            <div className={`${styles.resultCard} ${styles.resultHighlight}`}>
                                <div className={styles.resultTitle}>Est. GIROPie Annual Savings</div>
                                <h3 className={`${styles.resultStat} ${styles.highlightStat}`}>
                                    {formatINR(annualSavings)}
                                </h3>
                                <div className={styles.resultNote}>Up to 45% workflow cost reduction</div>
                            </div>

                            <div className={styles.resultCard}>
                                <div className={styles.resultTitle}>DSO Cycle Reduction</div>
                                <h3 className={styles.resultStat}>5 – 10 Days</h3>
                                <div className={styles.resultNote}>+{hoursSavedPerYear.toLocaleString()} hrs saved / yr</div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className={styles.calcActionsRow}>
                            <a
                                href="https://calendly.com/giropie/giropie-demo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.demoBtn}
                            >
                                <FaCalendarCheck style={{ marginRight: '0.45rem' }} /> Book Walkthrough & Demo
                            </a>

                            <button
                                type="button"
                                onClick={handleReset}
                                className={styles.recalcBtn}
                            >
                                <FaRotateLeft style={{ marginRight: '0.4rem' }} /> Recalculate
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrueCostModal;
