import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './TrueCostModal.module.css';
import logo from '../assets/giropie-logo.png';
import invoiceImg from '../assets/Invoice.png';
import {
    FaXmark,
    FaRotateLeft,
    FaCalendarCheck,
    FaCircleInfo,
    FaCheck
} from 'react-icons/fa6';

// ============================================================================
// SECTION 1: SPEND MAPPING INPUT DEFINITIONS (24 FIELDS)
// Easy to edit: Update labels, suffixes ('₹' or '%'), or hover tooltips below.
// ============================================================================

// Accounts Receivable (AR) — Inputs 1 to 12
const AR_FIELDS = [
    { id: 'ar_invoices_per_month', num: 1, label: 'Avg. number of invoices per month', suffix: '', tooltip: 'Total volume of customer credit sales invoices generated and dispatched per month' },
    { id: 'ar_invoice_avg_value', num: 2, label: 'Average invoice value (₹)', suffix: '₹', tooltip: 'Mean monetary value across your customer invoices' },
    { id: 'ar_finance_time_per_invoice', num: 3, label: 'Accounting/Finance staff time spent per invoice (minutes)', suffix: '', tooltip: 'Time spent by accounts team on data entry, validation, sending & tracking per invoice' },
    { id: 'ar_finance_cost_per_hour', num: 4, label: 'Avg. Accounting/Finance staff cost per hour (₹)', suffix: '₹', tooltip: 'Fully loaded hourly salary and compensation for finance & billing personnel' },
    { id: 'ar_sales_time_per_invoice', num: 5, label: 'AR Team/Sales staff time spent per invoice (minutes)', suffix: '', tooltip: 'Time spent by sales/collection reps following up on pending dues per invoice' },
    { id: 'ar_sales_cost_per_hour', num: 6, label: 'AR Team/Field sales. Avg cost per hour (₹)', suffix: '₹', tooltip: 'Hourly cost of collection agents or sales personnel chasing receivables' },
    { id: 'ar_bad_debts_pct', num: 7, label: 'Bad debts/write-offs (% of invoice value)', suffix: '%', tooltip: 'Percentage of total invoice value lost to uncollectible defaults annually' },
    { id: 'ar_software_cost_month', num: 8, label: 'Avg. ERP/CRM/Business Acct. software cost per month (₹)', suffix: '₹', tooltip: 'Monthly software subscription fees (Tally, Zoho, SAP, etc.) allocated to receivables' },
    { id: 'ar_pg_invoices', num: 9, label: 'Avg. number of invoices collected thru PA/PG', suffix: '', tooltip: 'Invoices settled via Payment Aggregators or Payment Gateways' },
    { id: 'ar_pg_charge_pct', num: 10, label: 'Payment gateway charges avg. (%)', suffix: '%', tooltip: 'Average MDR / processing fee percentage charged by payment gateways' },
    { id: 'ar_brs_hours_month', num: 11, label: 'Avg. BRS process time/month (Hours)', suffix: '', tooltip: 'Bank Reconciliation Statement hours spent matching bank credits every month' },
    { id: 'ar_current_dso', num: 12, label: 'Current achieved DSO (days)', suffix: '', tooltip: 'Days Sales Outstanding: average number of days taken to collect payment post-invoice' }
];

// Accounts Payable (AP) — Inputs 13 to 19
const AP_FIELDS = [
    { id: 'ap_bills_per_month', num: 13, label: 'Avg. Number of bills processed per month', suffix: '', tooltip: 'Total supplier and vendor bills received and processed per month' },
    { id: 'ap_bill_avg_value', num: 14, label: 'Average bill value (₹)', suffix: '₹', tooltip: 'Mean monetary value of vendor bills received' },
    { id: 'ap_finance_time_per_bill', num: 15, label: 'Accounting/Finance staff time spent per bill (minutes)', suffix: '', tooltip: 'Time required to manually verify, 3-way match, approve, and execute vendor bill payment' },
    { id: 'ap_staff_cost_per_hour', num: 16, label: 'Staff cost per hour - AP (₹)', suffix: '₹', tooltip: 'Hourly cost of AP accounts team members executing vendor payouts' },
    { id: 'ap_software_cost_month', num: 17, label: 'Avg. ERP/CRM/Business Acct. software cost per month - AP (₹)', suffix: '₹', tooltip: 'Portion of accounting/procurement software allocated to payables' },
    { id: 'ap_bank_charges_per_tx', num: 18, label: 'Bank charges per transaction (₹)', suffix: '₹', tooltip: 'Average NEFT/RTGS/IMPS/processing charges levied by corporate banks per transfer' },
    { id: 'ap_delayed_penalties_month', num: 19, label: 'Avg. Delayed payment penalties per month (₹)', suffix: '₹', tooltip: 'Penalties or lost early-payment discounts due to delayed vendor settlement' }
];

// Working Capital (WC) — Inputs 20 to 24
const WC_FIELDS = [
    { id: 'wc_overdue_invoices', num: 20, label: 'Number of overdue invoices', suffix: '', tooltip: 'Number of customer invoices currently pending beyond agreed credit terms' },
    { id: 'wc_overdue_avg_value', num: 21, label: 'Avg. Value of overdue invoices (₹)', suffix: '₹', tooltip: 'Average ticket size of invoices currently in overdue status' },
    { id: 'wc_overdue_dso', num: 22, label: 'Avg. DSO of overdue invoices', suffix: '', tooltip: 'Additional days past due date for overdue receivables' },
    { id: 'wc_od_loan_per_month', num: 23, label: 'Avg. OD/Loan facility used per month (₹)', suffix: '₹', tooltip: 'Average working capital overdraft (OD) or line of credit balance drawn each month' },
    { id: 'wc_od_utilization_pct', num: 24, label: 'Utilization % of OD/Loan used towards AR delays', suffix: '%', tooltip: 'Portion of short-term borrowing incurred specifically to bridge delayed receivables' }
];
// Initial empty state for all 24 inputs (no pre-filled dummy values)
const EMPTY_SPEND = {
    ar_invoices_per_month: '',
    ar_invoice_avg_value: '',
    ar_finance_time_per_invoice: '',
    ar_finance_cost_per_hour: '',
    ar_sales_time_per_invoice: '',
    ar_sales_cost_per_hour: '',
    ar_bad_debts_pct: '',
    ar_software_cost_month: '',
    ar_pg_invoices: '',
    ar_pg_charge_pct: '',
    ar_brs_hours_month: '',
    ar_current_dso: '',

    ap_bills_per_month: '',
    ap_bill_avg_value: '',
    ap_finance_time_per_bill: '',
    ap_staff_cost_per_hour: '',
    ap_software_cost_month: '',
    ap_bank_charges_per_tx: '',
    ap_delayed_penalties_month: '',

    wc_overdue_invoices: '',
    wc_overdue_avg_value: '',
    wc_overdue_dso: '',
    wc_od_loan_per_month: '',
    wc_od_utilization_pct: ''
};

const TrueCostModal = ({ isOpen, onClose }) => {
    // Step 1: Contact Capture Form
    // Step 2: Spend Mapping Form (AR, AP, WC)
    // Step 3: Result & Information Confirmation Page (Screenshot 1)
    // Step 4: Submission Confirmation / Thank You
    const [step, setStep] = useState(1);
    const [activeTab, setActiveTab] = useState('ar'); // 'ar' | 'ap' | 'wc'
    const [activeTooltip, setActiveTooltip] = useState(null);
    const [consentChecked, setConsentChecked] = useState(true);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [spendData, setSpendData] = useState(EMPTY_SPEND);

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

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSpendChange = (fieldId, val) => {
        const parsed = val === '' ? '' : Number(val);
        setSpendData((prev) => ({ ...prev, [fieldId]: parsed }));
    };

    const handleStart = (e) => {
        e.preventDefault();
        setStep(2);
        setActiveTab('ar');
    };

    const handleNextTab = () => {
        if (activeTab === 'ar') setActiveTab('ap');
        else if (activeTab === 'ap') setActiveTab('wc');
        else if (activeTab === 'wc') setStep(3); // Moves to True Cost Results & Info (Screenshot 1)
    };

    const handleBackTab = () => {
        if (activeTab === 'wc') setActiveTab('ap');
        else if (activeTab === 'ap') setActiveTab('ar');
        else if (activeTab === 'ar') setStep(1);
    };

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        setStep(4); // Move to confirmation
    };

    const handleReset = () => {
        setStep(1);
        setActiveTab('ar');
    };

    // ========================================================================
    // SECTION 3: TRUE COST CALCULATION ENGINE
    // NOTE FOR FUTURE EDIT: Replace the formula inside calculateDisplayCost()
    // when the final production calculation formula is provided.
    // ========================================================================
    const calculateDisplayCost = () => {
        const arInvoices = Number(spendData.ar_invoices_per_month) || 2500;
        const arFinanceHours = (arInvoices * (Number(spendData.ar_finance_time_per_invoice) || 12)) / 60;
        const arFinanceCost = arFinanceHours * (Number(spendData.ar_finance_cost_per_hour) || 350);
        const arSalesHours = (arInvoices * (Number(spendData.ar_sales_time_per_invoice) || 8)) / 60;
        const arSalesCost = arSalesHours * (Number(spendData.ar_sales_cost_per_hour) || 400);
        const arBrsCost = (Number(spendData.ar_brs_hours_month) || 20) * (Number(spendData.ar_finance_cost_per_hour) || 350);
        const arSoftware = Number(spendData.ar_software_cost_month) || 25000;
        const apPenalties = Number(spendData.ap_delayed_penalties_month) || 15000;
        const odInterest = ((Number(spendData.wc_od_loan_per_month) || 1500000) * ((Number(spendData.wc_od_utilization_pct) || 60) / 100) * 0.11) / 12;

        const total = Math.round(arFinanceCost + arSalesCost + arBrsCost + arSoftware + apPenalties + odInterest);
        return total > 1000 ? total : 260950;
    };

    const computedCost = calculateDisplayCost();

    // Get current fields list for active tab
    const getActiveFields = () => {
        if (activeTab === 'ar') return AR_FIELDS;
        if (activeTab === 'ap') return AP_FIELDS;
        return WC_FIELDS;
    };

    const getTabTitle = () => {
        if (activeTab === 'ar') return 'Accounts Receivable (AR)';
        if (activeTab === 'ap') return 'Accounts Payable (AP)';
        return 'Working Capital (WC)';
    };

    const currentFields = getActiveFields();
    const midIndex = Math.ceil(currentFields.length / 2);
    const col1Fields = currentFields.slice(0, midIndex);
    const col2Fields = currentFields.slice(midIndex);

    const renderField = (field) => {
        const val = spendData[field.id];
        const isTooltipOpen = activeTooltip === field.id;

        return (
            <div key={field.id} className={styles.inputRow}>
                <div className={styles.labelCol}>
                    <span className={styles.fieldNumberLabel}>
                        {field.num}. {field.label}
                    </span>
                    <div className={styles.tooltipWrapper}>
                        <button
                            type="button"
                            className={styles.infoIconBtn}
                            onClick={() => setActiveTooltip(isTooltipOpen ? null : field.id)}
                            onMouseEnter={() => setActiveTooltip(field.id)}
                            onMouseLeave={() => setActiveTooltip(null)}
                            aria-label={`Info about ${field.label}`}
                        >
                            <FaCircleInfo />
                        </button>
                        {isTooltipOpen && (
                            <div className={styles.floatingTooltip}>
                                {field.tooltip}
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.inputBoxContainer}>
                    <input
                        type="number"
                        value={val !== undefined ? val : ''}
                        onChange={(e) => handleSpendChange(field.id, e.target.value)}
                        className={styles.numericInputField}
                    />
                    {field.suffix && (
                        <span className={styles.inputSuffix}>{field.suffix}</span>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={`${styles.modalCard} ${step === 2 || step === 3 ? styles.modalCardLarge : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button (X) */}
                <button
                    type="button"
                    className={styles.closeBtn}
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    <FaXmark />
                </button>

                {/* Header with Logo */}
                <div className={styles.modalHeader}>
                    <img src={logo} alt="GIROPie Logo" className={styles.modalLogo} />
                    {step === 1 && (
                        <h2 className={styles.modalHeading}>
                            Discover The Actual Cost Your Organization Incurs To Collect And Process Each Payment
                        </h2>
                    )}
                    {step === 2 && (
                        <h2 className={styles.modalHeading}>
                            The Following Inputs Are Critical To Mapping Your Current Spend
                            <span className={styles.modalSubHeadingLine}>
                                Don&apos;t Have All The Details Right Now ?? No Problem — Fill In What You Can And Return Later To Complete The Rest
                            </span>
                        </h2>
                    )}
                </div>

                {/* ==========================================================
                   STEP 1: CAPTURE FORM (Pixel-matched with seamless image)
                   ========================================================== */}
                {step === 1 && (
                    <div>
                        <div className={styles.modalBodyGrid}>
                            {/* Left Column: Seamless Fintech Illustration */}
                            <div className={styles.illustrationCol}>
                                <img
                                    src={invoiceImg}
                                    alt="Discover The Actual Cost Per Invoice"
                                    className={styles.invoiceImg}
                                />
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
                                        onChange={handleFormChange}
                                        className={styles.fieldInput}
                                        required
                                    />
                                </div>

                                <div className={styles.formField}>
                                    <label className={styles.fieldLabel}>Drop Your Email Here</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="example@email.com"
                                        value={formData.email}
                                        onChange={handleFormChange}
                                        className={styles.fieldInput}
                                        required
                                    />
                                </div>

                                <div className={styles.formField}>
                                    <label className={styles.fieldLabel}>Help Us With Your Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Best number to reach you"
                                        value={formData.phone}
                                        onChange={handleFormChange}
                                        className={styles.fieldInput}
                                        required
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
                )}

                {/* ==========================================================
                   STEP 2: DETAILED SPEND MAPPING FORM (Screenshot 2 matched)
                   ========================================================== */}
                {step === 2 && (
                    <div className={styles.spendMappingView}>
                        {/* Category Navigation Tabs */}
                        <div className={styles.categoryTabsRow}>
                            <button
                                type="button"
                                className={`${styles.categoryTabBtn} ${activeTab === 'ar' ? styles.categoryTabActive : ''}`}
                                onClick={() => setActiveTab('ar')}
                            >
                                <span>Accounts Receivable (AR)</span>
                                <span className={styles.tabBadge}>12 Inputs</span>
                            </button>
                            <button
                                type="button"
                                className={`${styles.categoryTabBtn} ${activeTab === 'ap' ? styles.categoryTabActive : ''}`}
                                onClick={() => setActiveTab('ap')}
                            >
                                <span>Accounts Payable (AP)</span>
                                <span className={styles.tabBadge}>7 Inputs</span>
                            </button>
                            <button
                                type="button"
                                className={`${styles.categoryTabBtn} ${activeTab === 'wc' ? styles.categoryTabActive : ''}`}
                                onClick={() => setActiveTab('wc')}
                            >
                                <span>Working Capital (WC)</span>
                                <span className={styles.tabBadge}>5 Inputs</span>
                            </button>
                        </div>

                        {/* Form Card Box with Vertical Dark Blue Side Tab */}
                        <div className={styles.formCardBox}>
                            {/* Vertical Left Blue Bar */}
                            <div className={styles.verticalSideBar}>
                                <div className={styles.verticalBarText}>
                                    {getTabTitle()}
                                </div>
                            </div>

                            {/* 2-Column Inputs Grid */}
                            <div className={styles.cardGridContent}>
                                <div className={styles.gridColumn}>
                                    {col1Fields.map(renderField)}
                                </div>
                                <div className={styles.gridColumn}>
                                    {col2Fields.map(renderField)}
                                </div>
                            </div>
                        </div>

                        {/* Centered Back / Next Navigation Buttons (Matching Screenshot 2) */}
                        <div className={styles.centeredNavBtnRow}>
                            <button
                                type="button"
                                onClick={handleBackTab}
                                className={styles.indigoBtn}
                            >
                                Back
                            </button>

                            <button
                                type="button"
                                onClick={handleNextTab}
                                className={styles.indigoBtn}
                            >
                                Next
                            </button>
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
                )}

                {/* ==========================================================
                   STEP 3: RESULTS & YOUR INFORMATION (Screenshot 1 matched)
                   ========================================================== */}
                {step === 3 && (
                    <div className={styles.step3ResultsView}>
                        {/* Outer Two-Column Card Container */}
                        <div className={styles.step3CardContainer}>
                            {/* Left Column: Festive Confetti Cost Card */}
                            <div className={styles.confettiCostCard}>
                                {/* Confetti Particles */}
                                <div className={styles.particle} style={{ top: '14%', left: '20%', width: '10px', height: '10px', borderRadius: '50%', background: '#4ade80' }} />
                                <div className={styles.particle} style={{ top: '24%', left: '18%', width: '8px', height: '8px', background: '#f87171' }} />
                                <div className={styles.particle} style={{ top: '32%', left: '15%', width: '13px', height: '13px', background: '#38bdf8' }} />
                                <div className={styles.particle} style={{ top: '32%', left: '38%', width: '10px', height: '10px', borderRadius: '50%', background: '#e879f9' }} />
                                <div className={styles.particle} style={{ top: '22%', left: '46%', width: '7px', height: '7px', background: '#86efac' }} />
                                <div className={styles.particle} style={{ top: '18%', right: '22%', width: '14px', height: '14px', transform: 'rotate(45deg)', background: '#f87171' }} />
                                <div className={styles.particle} style={{ top: '15%', right: '14%', width: '8px', height: '8px', borderRadius: '50%', background: '#fb7185' }} />
                                <div className={styles.particle} style={{ top: '24%', right: '12%', width: '9px', height: '9px', borderRadius: '50%', background: '#38bdf8' }} />
                                <div className={styles.particle} style={{ top: '48%', left: '16%', width: '10px', height: '10px', borderRadius: '50%', background: '#f87171' }} />
                                <div className={styles.particle} style={{ top: '48%', right: '32%', width: '11px', height: '11px', background: '#fcd34d' }} />
                                <div className={styles.particle} style={{ top: '48%', right: '24%', width: '12px', height: '12px', borderRadius: '50%', background: '#f472b6' }} />
                                <div className={styles.particle} style={{ top: '62%', left: '46%', width: '10px', height: '10px', transform: 'rotate(45deg)', background: '#f87171' }} />
                                <div className={styles.particle} style={{ top: '50%', right: '36%', width: '7px', height: '7px', borderRadius: '50%', background: '#c084fc' }} />
                                <div className={styles.particle} style={{ top: '68%', left: '16%', width: '8px', height: '8px', background: '#f87171' }} />
                                <div className={styles.particle} style={{ top: '76%', left: '26%', width: '9px', height: '9px', background: '#fb923c' }} />
                                <div className={styles.particle} style={{ top: '84%', left: '42%', width: '8px', height: '8px', borderRadius: '50%', background: '#818cf8' }} />
                                <div className={styles.particle} style={{ top: '82%', right: '22%', width: '8px', height: '8px', borderRadius: '50%', background: '#c084fc' }} />
                                <div className={styles.particle} style={{ top: '55%', left: '8%', width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8' }} />

                                {/* Cost Headline & Figure */}
                                <div className={styles.costHeadlineWrapper}>
                                    <h4 className={styles.costSubhead}>YOUR TRUE PROCESSING COST</h4>
                                    <h4 className={styles.costSubhead}>PER INVOICE IS MORE THAN</h4>
                                    <div className={styles.costMainValue}>₹{computedCost}</div>
                                </div>
                            </div>

                            {/* Right Column: Your Information & Consent */}
                            <div className={styles.yourInfoCol}>
                                <h3 className={styles.yourInfoTitle}>Your Information</h3>
                                <div className={styles.yourInfoDivider} />

                                {/* Contact Details Card with Blue Left Stripe */}
                                <div className={styles.infoDetailsCard}>
                                    <div className={styles.infoFieldItem}>
                                        <span className={styles.infoItemLabel}>Name</span>
                                        <span className={styles.infoItemVal}>{formData.name || '—'}</span>
                                    </div>
                                    <div className={styles.infoFieldItem}>
                                        <span className={styles.infoItemLabel}>Email</span>
                                        <span className={styles.infoItemVal}>{formData.email || '—'}</span>
                                    </div>
                                    <div className={styles.infoFieldItem}>
                                        <span className={styles.infoItemLabel}>Phone</span>
                                        <span className={styles.infoItemVal}>{formData.phone || '—'}</span>
                                    </div>
                                </div>

                                {/* Consent Checkbox Card with Blue Left Stripe */}
                                <div className={styles.consentCard}>
                                    <label className={styles.consentLabel}>
                                        <input
                                            type="checkbox"
                                            checked={consentChecked}
                                            onChange={(e) => setConsentChecked(e.target.checked)}
                                            className={styles.consentCheckbox}
                                        />
                                        <span className={styles.consentText}>
                                            I consent to be contacted via email or phone to receive insights and recommendations on improving cash flow and operational efficiency
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Centered Navigation Buttons (Matching Screenshot 1) */}
                        <div className={styles.centeredNavBtnRow}>
                            <button
                                type="button"
                                onClick={() => {
                                    setStep(2);
                                    setActiveTab('wc');
                                }}
                                className={styles.indigoBtn}
                            >
                                Back
                            </button>

                            <button
                                type="button"
                                onClick={handleSubmit}
                                className={styles.indigoBtn}
                            >
                                Submit
                            </button>
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
                )}

                {/* ==========================================================
                   STEP 4: SUBMISSION CONFIRMATION / THANK YOU
                   ========================================================== */}
                {step === 4 && (
                    <div className={styles.thankYouView}>
                        <div className={styles.successIconBadge}>
                            <FaCheck />
                        </div>
                        <h3 className={styles.thankYouHeading}>
                            Thank You, {formData.name || 'Valued Partner'}!
                        </h3>
                        <p className={styles.thankYouSub}>
                            Your True Cost Per Invoice analysis has been successfully recorded.
                        </p>

                        <div className={styles.summaryBox}>
                            <div className={styles.summaryRow}>
                                <span>Estimated True Cost Per Invoice:</span>
                                <strong>₹{computedCost}</strong>
                            </div>
                            <div className={styles.summaryRow}>
                                <span>Contact Details Confirmed:</span>
                                <strong>{formData.email} | {formData.phone}</strong>
                            </div>
                            <p className={styles.summaryNote}>
                                Our enterprise working capital advisory team will review your efficiency metrics and share tailored recommendations on reducing invoice processing friction and shortening your credit cycle.
                            </p>
                        </div>

                        <div className={styles.thankYouActions}>
                            <a
                                href="https://calendly.com/giropie/giropie-demo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.demoLinkBtn}
                            >
                                <FaCalendarCheck style={{ marginRight: '0.45rem' }} /> Book Walkthrough & Demo
                            </a>

                            <button
                                type="button"
                                onClick={() => {
                                    setStep(2);
                                    setActiveTab('ar');
                                }}
                                className={styles.editInputsBtn}
                            >
                                <FaRotateLeft style={{ marginRight: '0.4rem' }} /> Edit Inputs / Recalculate
                            </button>

                            <button
                                type="button"
                                onClick={onClose}
                                className={styles.closeModalActionBtn}
                            >
                                Done
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrueCostModal;
