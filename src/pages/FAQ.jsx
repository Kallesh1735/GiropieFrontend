import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { FaChevronDown, FaMagnifyingGlass, FaCalculator } from 'react-icons/fa6';
import TrueCostModal from '../components/TrueCostModal';

// ============================================================================
// SECTION 1: FAQ CATEGORY LABELS
// Easy to edit: Map category keys ('about', 'operational', 'pricing') to display titles.
// ============================================================================
const CATEGORY_LABELS = {
    about: 'About GIROPie',
    operational: 'Operational',
    pricing: 'Pricing'
};

// ============================================================================
// SECTION 2: FAQ QUESTIONS & ANSWERS DATABASE
// Easy to edit: Add, modify, or reorder questions inside 'about', 'operational', or 'pricing'.
// Use double newlines (\n\n) inside answer strings to create separate paragraphs.
// ============================================================================
const faqData = {
    // --- TAB 1: ABOUT GIROPIE ---
    about: [
        {
            id: 'about-1',
            question: 'What is GIROPie?',
            answer: 'GIROPie is a B2B invoice-to-cash platform that enables suppliers and buyers to collaboratively manage trade credit invoices while allowing suppliers to collect payments through authorized bank mandates.'
        },
        {
            id: 'about-2',
            question: 'Do my buyers need to join GIROPie?',
            answer: `GIROPie is designed as a collaborative platform where suppliers and buyers manage trade credit invoices together on a shared invoice layer. In this Linked environment, buyers join the platform and can interact directly on invoices — including scheduling the Pay-by-Date, raising disputes, splitting invoices, or approving payment schedules.

However, buyer participation is not mandatory to start using GIROPie.

If a buyer is not yet on the platform, the supplier can still operate in an Unlinked environment. In this case, the supplier may send an invoice-level Autopay request to the buyer through email. The buyer can authorize a one-time debit instruction for that specific invoice without joining the platform.

Even when a buyer chooses not to join GIROPie, the supplier can continue using the platform to:
• track invoices
• monitor payment schedules
• send payment reminders
• manage receivable records

This flexible model allows suppliers to gradually onboard buyers while still benefiting from GIROPie’s invoice management and collection capabilities.`
        },
        {
            id: 'about-3',
            question: 'Does GIROPie replace my ERP?',
            answer: 'No. GIROPie complements ERP systems by managing invoice settlement, payment scheduling, and automated collection.'
        },
        {
            id: 'about-4',
            question: 'How are payments executed?',
            answer: 'Payments are executed through regulated banking infrastructure after the supplier initiates collection.'
        }
    ],

    // --- TAB 2: OPERATIONAL ---
    operational: [
        {
            id: 'op-1',
            question: 'How does the Pay-by-Date work in GIROPie?',
            answer: 'GIROPie allows buyers to schedule the Pay-by-Date of an invoice based on their cash flow planning. Once scheduled, the invoice moves through the settlement cycle — Upcoming, Tomorrow, Today, and Past Due — enabling suppliers to track and collect payments when invoices become due.'
        },
        {
            id: 'op-2',
            question: 'When does payment actually happen?',
            answer: 'When an invoice reaches the Today stage, the supplier can initiate payment collection by selecting the Collect action. The payment request is then sent to the banking infrastructure for debit execution through the buyer’s authorized mandate.'
        },
        {
            id: 'op-3',
            question: 'What if a buyer needs to partially pay an invoice?',
            answer: 'Buyers can use the Split feature to divide an invoice into multiple partial payments. Each payment can have its own Pay-by-Date, allowing flexible settlement while maintaining visibility for both parties.'
        },
        {
            id: 'op-4',
            question: 'Can buyers change the payment date?',
            answer: 'Yes. Buyers can request a Reschedule to modify the Pay-by-Date of an invoice. The supplier can review the request and either approve or reject it. If rejected, the invoice reverts to its original Pay-by-Date.'
        },
        {
            id: 'op-5',
            question: 'What happens if there is a dispute on an invoice?',
            answer: 'Buyers can raise a Dispute directly on the invoice. Once disputed, the invoice moves out of the settlement cycle until the supplier reviews and resolves the issue. This ensures payments are only processed for confirmed invoices.'
        },
        {
            id: 'op-6',
            question: 'How are payment failures handled?',
            answer: 'If a bank debit fails, the invoice appears under the Returned status in the reconciliation section. Users can then resubmit the payment, split the invoice, reschedule the payment date, or raise an inquiry.'
        },
        {
            id: 'op-7',
            question: 'Can suppliers send payment reminders through GIROPie?',
            answer: 'Yes. Suppliers can use the Notify feature to send reminders to buyers regarding outstanding invoices. Notifications can be sent to both linked buyers within the platform and unlinked buyers through email.'
        },
        {
            id: 'op-8',
            question: 'Do buyers need to join GIROPie for the platform to work?',
            answer: 'Yes. Supplier and Buyer collaboration is crucial for real-time cash flow management. However, GIROPie operates in both Linked and Unlinked modes where a Buyer may not connect with a supplier. Also, suppliers can manage invoices and send invoice-level auto payment requests (Bank mandate) even if buyers are not actively using the platform.'
        }
    ],

    // --- TAB 3: PRICING ---
    pricing: [
        {
            id: 'price-1',
            question: 'Why is GIROPie priced per invoice?',
            answer: `GIROPie pricing is aligned with the operational work required to manage trade credit invoices.

Each invoice on GIROPie may involve multiple operational processes such as payment scheduling, dispute management, reconciliation tracking, and settlement execution. Pricing per invoice ensures that organizations pay only for the operational workflows they actually use.

This model also allows GIROPie to scale naturally with the growth of a business.`
        },
        {
            id: 'price-2',
            question: 'What operational cost does GIROPie replace?',
            answer: `Managing credit invoices manually often involves hidden operational costs such as:

• payment follow-ups
• reconciliation checks
• dispute coordination
• communication between sales and finance teams
• manual tracking of payment dates

In many distribution businesses, the operational cost of managing a credit invoice can exceed ₹100–₹250 per invoice. GIROPie helps reduce these costs by automating the invoice lifecycle and payment collection workflow.`
        },
        {
            id: 'price-3',
            question: 'Does GIROPie pricing depend on transaction value?',
            answer: `GIROPie primarily follows a per-invoice pricing model, because the operational effort required to manage invoices is largely independent of invoice value.

However, for certain businesses that prefer a value-based structure, GIROPie may also offer pricing linked to transaction value.`
        },
        {
            id: 'price-4',
            question: 'Can pricing be customized for large distributors?',
            answer: `Yes.

GIROPie offers customized pricing models for organizations with high invoice volumes or complex distribution networks. These may include:

• enterprise platform plans
• volume-based pricing
• industry-specific pricing structures
• integration-based pricing

Our team works with organizations to design a pricing model that aligns with their operational scale and growth plans.`
        },
        {
            id: 'price-5',
            question: 'Is there a minimum platform fee?',
            answer: `Yes.

GIROPie typically operates with a monthly platform usage fee combined with invoice processing charges. The platform fee covers infrastructure, security, integrations, and platform maintenance.

Specific pricing structures are defined based on the organization’s scale and implementation scope.`
        },
        {
            id: 'price-6',
            question: 'Does GIROPie charge buyers?',
            answer: `No. If GIROPie is implemented and used for Payable Management by a user, company, retailer, or dealer — as invited and Linked with a supplier — the Buyer is not charged.

GIROPie charges for Receivables Management only.`
        },
        {
            id: 'price-7',
            question: 'Want to estimate your operational savings?',
            answer: `Use the GIROPie Cost per Invoice Calculator to see how much manual finance effort your organization can save.`,
            hasCalculatorCta: true
        }
    ]
};

// ============================================================================
// SECTION 3: FAQ PAGE COMPONENT
// ============================================================================
const FAQ = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [searchQuery, setSearchQuery] = useState('');
    // First question in the default tab starts expanded
    const [openItems, setOpenItems] = useState({ 'about-1': true });
    // Controls the True Cost Calculator modal when triggered from price-7
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

    const toggleAccordion = (id) => {
        setOpenItems((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // ========================================================================
    // CROSS-TAB SEARCH LOGIC:
    // - If searchQuery is empty: Show questions for the currently selected tab.
    // - If searchQuery has text: Search across ALL 3 categories so users find
    //   answers even if they are on a different tab.
    // ========================================================================
    const isSearching = searchQuery.trim().length > 0;

    const getDisplayedQuestions = () => {
        if (!isSearching) {
            return (faqData[activeTab] || []).map((item) => ({
                ...item,
                categoryKey: activeTab
            }));
        }

        const query = searchQuery.toLowerCase().trim();
        const allCategories = Object.keys(faqData);
        const matches = [];

        allCategories.forEach((catKey) => {
            faqData[catKey].forEach((item) => {
                const inQuestion = item.question.toLowerCase().includes(query);
                const inAnswer = item.answer.toLowerCase().includes(query);
                if (inQuestion || inAnswer) {
                    matches.push({ ...item, categoryKey: catKey });
                }
            });
        });

        return matches;
    };

    const currentQuestions = getDisplayedQuestions();

    return (
        <div className={styles.faqPage}>
            <div className={styles.container}>
                {/* ----------------------------------------------------------
                    1. HEADER ROW: PAGE TITLE & GLOBAL SEARCH INPUT
                   ---------------------------------------------------------- */}
                <div className={styles.headerRow}>
                    <h1 className={styles.pageTitle}>Frequently asked questions</h1>

                    <div className={styles.searchWrapper}>
                        <input
                            type="text"
                            placeholder="Looking for something?"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={styles.searchInput}
                            aria-label="Search frequently asked questions"
                        />
                        <FaMagnifyingGlass className={styles.searchIcon} />
                    </div>
                </div>

                {/* ----------------------------------------------------------
                    2. CATEGORY NAVIGATION TABS
                   ---------------------------------------------------------- */}
                <div className={styles.tabBar}>
                    <button
                        type="button"
                        className={`${styles.tabBtn} ${!isSearching && activeTab === 'about' ? styles.activeTab : ''}`}
                        onClick={() => {
                            setActiveTab('about');
                            setSearchQuery('');
                            setOpenItems((prev) => ({ ...prev, 'about-1': true }));
                        }}
                    >
                        About GIROPie
                    </button>

                    <button
                        type="button"
                        className={`${styles.tabBtn} ${!isSearching && activeTab === 'operational' ? styles.activeTab : ''}`}
                        onClick={() => {
                            setActiveTab('operational');
                            setSearchQuery('');
                        }}
                    >
                        Operational
                    </button>

                    <button
                        type="button"
                        className={`${styles.tabBtn} ${!isSearching && activeTab === 'pricing' ? styles.activeTab : ''}`}
                        onClick={() => {
                            setActiveTab('pricing');
                            setSearchQuery('');
                        }}
                    >
                        Pricing
                    </button>
                </div>

                {/* ----------------------------------------------------------
                    3. ACCORDION QUESTIONS LIST
                   ---------------------------------------------------------- */}
                <div className={styles.faqList}>
                    {currentQuestions.length > 0 ? (
                        currentQuestions.map((item) => {
                            // Auto-expand matched items during an active search
                            const isOpen = isSearching ? true : !!openItems[item.id];
                            return (
                                <div key={item.id} className={styles.accordionCard}>
                                    <div
                                        className={styles.questionRow}
                                        onClick={() => toggleAccordion(item.id)}
                                    >
                                        <div className={styles.questionTitleGroup}>
                                            <h3 className={styles.questionText}>{item.question}</h3>
                                            {isSearching && (
                                                <span className={styles.categoryBadge}>
                                                    {CATEGORY_LABELS[item.categoryKey]}
                                                </span>
                                            )}
                                        </div>
                                        <FaChevronDown
                                            className={`${styles.chevronIcon} ${isOpen ? styles.chevronRotated : ''}`}
                                        />
                                    </div>

                                    {isOpen && (
                                        <div className={styles.answerRow}>
                                            {item.answer ? (
                                                <div className={styles.answerText}>
                                                    {item.answer.split('\n\n').map((para, pIdx) => (
                                                        <p key={pIdx}>{para}</p>
                                                    ))}

                                                    {/* Interactive True Cost Calculator Button for Question price-7 */}
                                                    {item.hasCalculatorCta && (
                                                        <button
                                                            type="button"
                                                            className={styles.calculatorCtaBtn}
                                                            onClick={() => setIsCalculatorOpen(true)}
                                                        >
                                                            <FaCalculator /> Discover Your True Cost Per Invoice
                                                        </button>
                                                    )}
                                                </div>
                                            ) : (
                                                <p className={styles.placeholderAnswer}>
                                                    <em>Answer coming soon...</em>
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    ) : (
                        <div className={styles.noResults}>
                            No matching questions found for &ldquo;{searchQuery}&rdquo;. Try a different search term.
                        </div>
                    )}
                </div>
            </div>

            {/* --------------------------------------------------------------
                4. TRUE COST CALCULATOR MODAL (Triggered from Pricing FAQ #7)
               -------------------------------------------------------------- */}
            <TrueCostModal
                isOpen={isCalculatorOpen}
                onClose={() => setIsCalculatorOpen(false)}
            />
        </div>
    );
};

export default FAQ;
