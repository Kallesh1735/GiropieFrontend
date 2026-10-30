// ============================================================================
// PURE FINANCIAL CALCULATOR HELPERS (P1 #2 MDR & P1 #3 DSO)
// Shared by UI components and unit verification checks.
// ============================================================================

const inrFractionFormatter = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 2
});

const inrWholeFormatter = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0
});

export function formatInr(amount) {
    const num = Number(amount) || 0;
    const isWhole = Math.abs(num - Math.round(num)) < 0.005;
    if (isWhole) {
        return `₹${inrWholeFormatter.format(Math.round(num))}`;
    }
    return `₹${inrFractionFormatter.format(num)}`;
}

/**
 * UPI Merchant Fee (MDR) calculation (P1 #2):
 * - ₹0 if invoice value <= ₹2,000
 * - Otherwise smaller of 0.4% of invoice value and ₹300
 */
export function calculateUpiMdr(invoiceValue, invoicesPerMonth) {
    const value = Math.max(0, Number(invoiceValue) || 0);
    const count = Math.max(0, Math.round(Number(invoicesPerMonth) || 0));

    const feePerInvoice = value <= 2000 ? 0 : Math.min(value * 0.004, 300);
    const effectiveRatePct = value > 0 ? (feePerInvoice / value) * 100 : 0;
    const feePerMonth = feePerInvoice * count;
    const feePerYear = feePerMonth * 12;

    return {
        value,
        count,
        feePerInvoice,
        effectiveRatePct,
        feePerMonth,
        feePerYear
    };
}

/**
 * DSO Working Capital Cash-Release illustration (P1 #3):
 * - One-time cash released = (Annual sales in ₹ / 365) * days removed
 */
export function calculateDsoRelease(annualSalesCrore, currentDso, expectedDso) {
    const salesCr = Math.max(0, Number(annualSalesCrore) || 0);
    const curDays = Math.max(0, Number(currentDso) || 0);
    const expDays = Math.max(0, Number(expectedDso) || 0);
    const daysRemoved = Math.max(0, curDays - expDays);

    const annualSalesRupees = salesCr * 10000000;
    const cashReleased = Math.round((annualSalesRupees / 365) * daysRemoved);
    const cashReleasedLakhs = cashReleased / 100000;

    return {
        salesCr,
        curDays,
        expDays,
        daysRemoved,
        annualSalesRupees,
        cashReleased,
        cashReleasedLakhs
    };
}

