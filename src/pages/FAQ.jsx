import { useState } from 'react';
import styles from './FAQ.module.css';
import { FaChevronDown, FaMagnifyingGlass } from 'react-icons/fa6';
import { CATEGORY_LABELS, faqData } from '../data/faqData';

// ============================================================================
// FAQ PAGE — /faq
// Categorized accordion + live cross-tab search + bottom consultation banner.
// ============================================================================
const FAQ = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [searchQuery, setSearchQuery] = useState('');
    const [openItems, setOpenItems] = useState({ 'about-1': true });

    const toggleAccordion = (id) => {
        setOpenItems((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

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
            {/* Ambient Background Glows */}
            <div className={styles.bgGlow1} />
            <div className={styles.bgGlow2} />

            <div className={styles.container}>
                {/* 1. Hero Header */}
                <header className={styles.heroHeader}>
                    <div className={styles.eyebrowBadge}>
                        <span className={styles.eyebrowDot} />
                        Help Center &amp; Answers
                    </div>
                    <h1 className={styles.pageTitle}>
                        Frequently Asked <span className={styles.titleHighlight}>Questions</span>
                    </h1>
                    <p className={styles.pageSubtitle}>
                        Clear answers on how GIROPie connects TallyPrime invoices, buyer Pay-by-Dates, NPCI eMandate/NACH debits, and subscription pricing.
                    </p>
                </header>

                {/* 2. Toolbar: Segmented Category Pills + Live Search */}
                <div className={styles.toolbar}>
                    <div className={styles.tabBar} role="tablist" aria-label="FAQ categories">
                        <button
                            type="button"
                            role="tab"
                            aria-selected={!isSearching && activeTab === 'about'}
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
                            role="tab"
                            aria-selected={!isSearching && activeTab === 'operational'}
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
                            role="tab"
                            aria-selected={!isSearching && activeTab === 'pricing'}
                            className={`${styles.tabBtn} ${!isSearching && activeTab === 'pricing' ? styles.activeTab : ''}`}
                            onClick={() => {
                                setActiveTab('pricing');
                                setSearchQuery('');
                            }}
                        >
                            Pricing
                        </button>
                    </div>

                    <div className={styles.searchWrapper}>
                        <FaMagnifyingGlass className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Search questions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={styles.searchInput}
                            aria-label="Search frequently asked questions"
                        />
                    </div>
                </div>

                {/* 3. Accordion Questions List */}
                <div className={styles.faqList}>
                    {currentQuestions.length > 0 ? (
                        currentQuestions.map((item) => {
                            const isOpen = isSearching ? true : !!openItems[item.id];
                            return (
                                <div
                                    key={item.id}
                                    className={`${styles.accordionCard} ${isOpen ? styles.accordionCardOpen : ''}`}
                                >
                                    <button
                                        type="button"
                                        className={styles.questionRow}
                                        onClick={() => toggleAccordion(item.id)}
                                        aria-expanded={isOpen}
                                    >
                                        <div className={styles.questionTitleGroup}>
                                            <span className={styles.questionText}>{item.question}</span>
                                            {isSearching && (
                                                <span className={styles.categoryBadge}>
                                                    {CATEGORY_LABELS[item.categoryKey]}
                                                </span>
                                            )}
                                        </div>
                                        <span className={`${styles.chevronBadge} ${isOpen ? styles.chevronBadgeOpen : ''}`}>
                                            <FaChevronDown
                                                className={`${styles.chevronIcon} ${isOpen ? styles.chevronRotated : ''}`}
                                            />
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className={styles.answerRow}>
                                            {item.answer ? (
                                                <div className={styles.answerText}>
                                                    {item.answer.split('\n\n').map((para, pIdx) => (
                                                        <p key={pIdx}>{para}</p>
                                                    ))}
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
        </div>
    );
};

export default FAQ;
