import { useState } from 'react';
import styles from './Calculators.module.css';
import { formatInr, calculateUpiMdr } from '../utils/calculators';

// ============================================================================
// UPI MDR CALCULATOR (P1 #2 Spec)
// Rule:
//   - MDR = ₹0 if invoice value <= ₹2,000
//   - Otherwise smaller of 0.4% of invoice value and ₹300
// Sample checks: ₹2,000 -> ₹0 | ₹3,000 -> ₹12 | ₹50,000 -> ₹200 | ₹1,00,000 -> ₹300
// ============================================================================

const SAMPLE_VALUES = [2000, 3000, 50000, 100000];

const MdrCalculator = () => {
    const [invoiceValue, setInvoiceValue] = useState(50000);
    const [invoicesPerMonth, setInvoicesPerMonth] = useState(100);

    const result = calculateUpiMdr(invoiceValue, invoicesPerMonth);

    return (
        <div className={styles.calcCard} id="mdr-calculator">
            <div className={styles.calcHeader}>
                <div>
                    <h2 className={styles.calcTitle}>UPI Merchant Fee (MDR) Calculator</h2>
                    <p className={styles.calcSubtitle}>
                        Estimate annual UPI merchant fees on B2B invoices above ₹2,000 (0.4% capped at ₹300 per transaction).
                    </p>
                </div>
                <span className={styles.illustrationBadge}>Illustrative Estimate</span>
            </div>

            <div className={styles.calcBodyGrid}>
                {/* Left Column: Inputs */}
                <div className={styles.inputsColumn}>
                    <div className={styles.fieldBlock}>
                        <div className={styles.fieldTopRow}>
                            <label htmlFor="mdr-invoice-value" className={styles.fieldLabel}>
                                Average invoice value (₹)
                            </label>
                            <span className={styles.fieldValueHint}>{formatInr(result.value)}</span>
                        </div>

                        <div className={styles.numberInputWrap}>
                            <span className={styles.unitPrefix}>₹</span>
                            <input
                                id="mdr-invoice-value"
                                type="number"
                                min="0"
                                max="10000000"
                                step="500"
                                value={invoiceValue}
                                onChange={(e) => setInvoiceValue(e.target.value)}
                                className={styles.numberInput}
                            />
                        </div>

                        <input
                            type="range"
                            min="1000"
                            max="200000"
                            step="1000"
                            value={Math.min(200000, Math.max(1000, result.value))}
                            onChange={(e) => setInvoiceValue(Number(e.target.value))}
                            aria-label="Adjust average invoice value"
                            className={styles.rangeSlider}
                        />

                        <div className={styles.presetRow}>
                            <span className={styles.presetLabel}>Sample values:</span>
                            {SAMPLE_VALUES.map((sample) => (
                                <button
                                    key={sample}
                                    type="button"
                                    onClick={() => setInvoiceValue(sample)}
                                    className={`${styles.presetBtn} ${result.value === sample ? styles.presetBtnActive : ''}`}
                                >
                                    {formatInr(sample)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.fieldBlock}>
                        <div className={styles.fieldTopRow}>
                            <label htmlFor="mdr-invoices-month" className={styles.fieldLabel}>
                                Invoices per month
                            </label>
                            <span className={styles.fieldValueHint}>
                                {new Intl.NumberFormat('en-IN').format(result.count)} / mo
                            </span>
                        </div>

                        <div className={styles.numberInputWrap}>
                            <input
                                id="mdr-invoices-month"
                                type="number"
                                min="0"
                                max="100000"
                                step="10"
                                value={invoicesPerMonth}
                                onChange={(e) => setInvoicesPerMonth(e.target.value)}
                                className={styles.numberInput}
                            />
                            <span className={styles.unitSuffix}>invoices</span>
                        </div>

                        <input
                            type="range"
                            min="10"
                            max="2000"
                            step="10"
                            value={Math.min(2000, Math.max(10, result.count))}
                            onChange={(e) => setInvoicesPerMonth(Number(e.target.value))}
                            aria-label="Adjust invoices per month"
                            className={styles.rangeSlider}
                        />
                    </div>
                </div>

                {/* Right Column: Calculated Outputs */}
                <div className={styles.resultsPanel} aria-live="polite">
                    <div className={styles.primaryResultBox}>
                        <span className={styles.resultEyebrow}>Estimated UPI MDR per year</span>
                        <div className={styles.bigFigure}>{formatInr(result.feePerYear)}</div>
                        <span className={styles.resultSubnote}>
                            Across {new Intl.NumberFormat('en-IN').format(result.count * 12)} annual invoices
                        </span>
                    </div>

                    <div className={styles.metricsGrid}>
                        <div className={styles.metricBox}>
                            <span className={styles.metricLabel}>Fee per invoice</span>
                            <span className={styles.metricValue}>{formatInr(result.feePerInvoice)}</span>
                        </div>
                        <div className={styles.metricBox}>
                            <span className={styles.metricLabel}>Effective rate</span>
                            <span className={styles.metricValue}>{result.effectiveRatePct.toFixed(2)}%</span>
                        </div>
                        <div className={styles.metricBox}>
                            <span className={styles.metricLabel}>Fee per month</span>
                            <span className={styles.metricValue}>{formatInr(result.feePerMonth)}</span>
                        </div>
                        <div className={styles.metricBox}>
                            <span className={styles.metricLabel}>Fee per year</span>
                            <span className={styles.metricValue}>{formatInr(result.feePerYear)}</span>
                        </div>
                    </div>

                    <div className={styles.rulePill}>
                        {result.value <= 2000
                            ? 'Invoices of ₹2,000 or less carry ₹0 MDR under the current threshold.'
                            : result.value * 0.004 >= 300
                            ? '0.4% exceeds ₹300 on this ticket size, so the ₹300 per-transaction cap applies.'
                            : '0.4% of invoice value applies (below the ₹300 per-transaction cap).'}
                    </div>
                </div>
            </div>

            <p className={styles.footnote}>
                Source: Ministry of Finance FAQs on MDR for select UPI person-to-merchant transactions, 15 September 2026. Rates and scope can change, so confirm current details with your bank.
            </p>
        </div>
    );
};

export default MdrCalculator;
