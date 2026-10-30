import { useState } from 'react';
import styles from './Calculators.module.css';
import { formatInr, calculateDsoRelease } from '../utils/calculators';

// ============================================================================
// DSO WORKING CAPITAL CALCULATOR (P1 #3 Spec)
// Inputs: Annual sales (₹ crore), current DSO (days), expected DSO (days)
// Output: One-time cash released = (Annual sales / 365) * days removed
// Compliance: Labeled strictly as an illustration; never shows a named customer.
// ============================================================================

const DsoCalculator = () => {
    const [annualSalesCrore, setAnnualSalesCrore] = useState(25);
    const [currentDso, setCurrentDso] = useState(45);
    const [expectedDso, setExpectedDso] = useState(38);

    const result = calculateDsoRelease(annualSalesCrore, currentDso, expectedDso);

    return (
        <div className={styles.calcCard} id="dso-calculator">
            <div className={styles.calcHeader}>
                <div>
                    <h2 className={styles.calcTitle}>DSO Cash-Release Illustration</h2>
                    <p className={styles.calcSubtitle}>
                        See how much working capital is unlocked when credit collection days come down across your dealer network.
                    </p>
                </div>
                <span className={styles.illustrationBadge}>Illustration Only</span>
            </div>

            <div className={styles.calcBodyGrid}>
                {/* Left Column: Inputs */}
                <div className={styles.inputsColumn}>
                    <div className={styles.fieldBlock}>
                        <div className={styles.fieldTopRow}>
                            <label htmlFor="dso-annual-sales" className={styles.fieldLabel}>
                                Annual credit sales (₹ crore)
                            </label>
                            <span className={styles.fieldValueHint}>₹{result.salesCr} Cr</span>
                        </div>

                        <div className={styles.numberInputWrap}>
                            <span className={styles.unitPrefix}>₹</span>
                            <input
                                id="dso-annual-sales"
                                type="number"
                                min="1"
                                max="5000"
                                step="1"
                                value={annualSalesCrore}
                                onChange={(e) => setAnnualSalesCrore(e.target.value)}
                                className={styles.numberInput}
                            />
                            <span className={styles.unitSuffix}>Crore</span>
                        </div>

                        <input
                            type="range"
                            min="2"
                            max="250"
                            step="1"
                            value={Math.min(250, Math.max(2, result.salesCr))}
                            onChange={(e) => setAnnualSalesCrore(Number(e.target.value))}
                            aria-label="Adjust annual sales in crore"
                            className={styles.rangeSlider}
                        />
                    </div>

                    <div className={styles.fieldBlock}>
                        <div className={styles.fieldTopRow}>
                            <label htmlFor="dso-current-days" className={styles.fieldLabel}>
                                Current DSO (days)
                            </label>
                            <span className={styles.fieldValueHint}>{result.curDays} days</span>
                        </div>

                        <div className={styles.numberInputWrap}>
                            <input
                                id="dso-current-days"
                                type="number"
                                min="1"
                                max="180"
                                step="1"
                                value={currentDso}
                                onChange={(e) => setCurrentDso(e.target.value)}
                                className={styles.numberInput}
                            />
                            <span className={styles.unitSuffix}>days</span>
                        </div>

                        <input
                            type="range"
                            min="10"
                            max="120"
                            step="1"
                            value={Math.min(120, Math.max(10, result.curDays))}
                            onChange={(e) => setCurrentDso(Number(e.target.value))}
                            aria-label="Adjust current DSO days"
                            className={styles.rangeSlider}
                        />
                    </div>

                    <div className={styles.fieldBlock}>
                        <div className={styles.fieldTopRow}>
                            <label htmlFor="dso-expected-days" className={styles.fieldLabel}>
                                Expected DSO (days)
                            </label>
                            <span className={styles.fieldValueHint}>{result.expDays} days</span>
                        </div>

                        <div className={styles.numberInputWrap}>
                            <input
                                id="dso-expected-days"
                                type="number"
                                min="0"
                                max="180"
                                step="1"
                                value={expectedDso}
                                onChange={(e) => setExpectedDso(e.target.value)}
                                className={styles.numberInput}
                            />
                            <span className={styles.unitSuffix}>days</span>
                        </div>

                        <input
                            type="range"
                            min="5"
                            max="120"
                            step="1"
                            value={Math.min(120, Math.max(5, result.expDays))}
                            onChange={(e) => setExpectedDso(Number(e.target.value))}
                            aria-label="Adjust expected DSO days"
                            className={styles.rangeSlider}
                        />
                    </div>
                </div>

                {/* Right Column: Output */}
                <div className={styles.resultsPanel} aria-live="polite">
                    <div className={styles.primaryResultBox}>
                        <span className={styles.resultEyebrow}>One-time working capital released</span>
                        <div className={styles.bigFigure}>{formatInr(result.cashReleased)}</div>
                        <span className={styles.resultSubnote}>
                            Approx. ₹{result.cashReleasedLakhs.toFixed(2)} Lakh freed from receivables
                        </span>
                    </div>

                    <div className={styles.metricsGrid}>
                        <div className={styles.metricBox}>
                            <span className={styles.metricLabel}>DSO days removed</span>
                            <span className={styles.metricValue}>{result.daysRemoved} days</span>
                        </div>
                        <div className={styles.metricBox}>
                            <span className={styles.metricLabel}>Daily credit sales</span>
                            <span className={styles.metricValue}>
                                {formatInr(Math.round((result.salesCr * 10000000) / 365))}
                            </span>
                        </div>
                    </div>

                    <div className={styles.rulePill}>
                        Formula: Annual sales (₹{result.salesCr} Cr) ÷ 365 × {result.daysRemoved} days removed.
                    </div>
                </div>
            </div>

            <p className={styles.footnote}>
                Illustration only — calculated strictly from the hypothetical inputs above and never from a named customer&apos;s figures. Actual DSO improvement varies by credit cycle, buyer mandate adoption, and contract terms.
            </p>
        </div>
    );
};

export default DsoCalculator;
