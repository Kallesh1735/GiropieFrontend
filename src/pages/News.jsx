import { useState, useRef } from 'react';
import styles from './News.module.css';
import {
    FaChevronLeft,
    FaChevronRight,
    FaArrowUpRightFromSquare,
    FaCalendarDays,
    FaAward,
    FaRocket,
    FaBuildingColumns,
    FaShieldHalved,
    FaArrowDown
} from 'react-icons/fa6';

// Images imported from assets
// NOTE: Institution logos requiring written permission (IIT Madras, Startup Karnataka)
// use built-in vector icons until written logo permission is on file.
import grassrootImg from '../assets/grassroot-innovation.png';
import nasscomImg from '../assets/NASSCOM startups.png';
import velTechImg from '../assets/Vel Tech TBI.png';
import microsoftImg from '../assets/microsoft startup.png';
import ramaiahImg from '../assets/Ramaiah Evolute.png';

// All news items provided by user
const newsData = [
    {
        id: "news-grassroot-2024",
        category: "Award & Recognition",
        date: "03 August, 2024",
        year: "2024",
        title: 'PepperTree.AI Pvt. Ltd. wins the prestigious "Grassroot Innovation 2024" award from the Government of Karnataka (Dept of IT & BT) for GIROPie!',
        body: "GIROPie empowers B2B entities with a unique Invoice-to-Cash management solution integrated with payment settlement and auto reconciliation. While the solution accelerates AR cash flows, it integrates cash management, AR and AP seamlessly with all stakeholders bringing real-time visibility of company's finance (AR & AP) on a single dashboard.",
        viewMoreUrl: "https://www.linkedin.com/posts/peppertreeai_giropie-accountreceivable-accountpayable-activity-7236320921102213120-kFns?utm_source=share&utm_medium=member_desktop",
        sliderTitle: "Grassroot Innovation 2024",
        sliderOrg: "Govt of Karnataka (Dept of IT & BT)",
        sliderCategory: "State Award",
        image: grassrootImg,
        icon: <FaAward className={styles.slideVisualIcon} />
    },
    {
        id: "news-iit-madras-2024",
        category: "FinTech Competition",
        date: "10th March, 2024",
        year: "2024",
        title: "GIROPie secured the runner-up prize for our #fintech solution at E-Cell IIT Madras",
        body: "The success story at the Indian Institute of Technology, Madras...",
        points: [
            "900+ registrations and 129 applications shortlisted including GIROPie",
            "Mock pitches delivered to 15+ jury members by these 129 applicants",
            "GIROPie gets into the 50 selected startups for Bootcamp 2024!",
            "What more? GIROPie secured the runner-up prize under the #fintech group during the 'Entrepreneurship Summit' event organized by E-Cell IIT Madras"
        ],
        viewMoreUrl: "https://www.linkedin.com/posts/peppertreeai_innovation-entrepreneurship-team-activity-7173250717510561792-DdOX?utm_source=share&utm_medium=member_desktop",
        sliderTitle: "E-Cell IIT Madras",
        sliderOrg: "Runner-Up in FinTech",
        sliderCategory: "Bootcamp 2024",
        image: null,
        icon: <FaBuildingColumns className={styles.slideVisualIcon} />
    },
    {
        id: "news-nasscom-2023",
        category: "Incubation & Acceleration",
        date: "15th November, 2023",
        year: "2023",
        title: "GIROPie makes it to NASSCOM startups Virtual Incubation Program",
        body: "The team PepperTree.AI Pvt. Ltd. is all excited and proud to announce that GIROPie our innovative 'Invoice-to-Cash management' solution has been selected for the prestigious NASSCOM 10,000 Start-ups Virtual Incubation Program at the Bengaluru Hub!",
        viewMoreUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7130488702048354305",
        sliderTitle: "NASSCOM 10,000 Startups",
        sliderOrg: "Virtual Incubation Program",
        sliderCategory: "Bengaluru Hub",
        image: nasscomImg,
        icon: <FaRocket className={styles.slideVisualIcon} />
    },
    {
        id: "news-pci-dss-2022",
        category: "Compliance & Security",
        date: "27th September, 2022",
        year: "2022",
        title: "PepperTree.AI engages PCI DSS Consultant for compliance",
        body: "PCI compliance refers to a set of guidelines and standards for businesses to ensure the security of financial transactions. To be more specific, businesses will follow these standards to manage and protect customer data when making online transactions.\n\nPepperTree.AI engages with leading PCI DSS compliance solution provider for GIROPie.",
        viewMoreUrl: null,
        sliderTitle: "PCI DSS Compliance",
        sliderOrg: "Security Standards Consulting",
        sliderCategory: "Fintech Compliance",
        image: null,
        icon: <FaShieldHalved className={styles.slideVisualIcon} />
    },
    {
        id: "news-elevate-2022",
        category: "State Startup Award",
        date: "16th April, 2022",
        year: "2022",
        title: "Karnataka Startupcell declares GIROPie as RUNNER UP of Elevate 2021",
        body: "Kudos to you and your team for making it to the Final round!! Team- Startup Karnataka.\n\nAfter following a rigorous selection process in the Idea2PoC Evaluation GIROPie makes it to the final round of Karnataka Startupcell.",
        viewMoreUrl: null,
        sliderTitle: "Karnataka Startupcell",
        sliderOrg: "Elevate 2021 Runner Up",
        sliderCategory: "Idea2PoC Finalist",
        image: null,
        icon: <FaAward className={styles.slideVisualIcon} />
    },
    {
        id: "news-veltech-sisfs-2022",
        category: "Seed Funding",
        date: "01 Feb 2022",
        year: "2022",
        title: "Vel Tech TBI selects GIROPie solution for SISFS",
        body: "GIROPie gets the seed funding from Vel Tech TBI.",
        points: [
            "1) Very good presentation, an innovative and futuristic product with amazing global market scalability.",
            "2) Having a strong team, clear vision, industry expertise, good business model, and good partnership accomplishment.",
            "3) Financials are promising in the long run."
        ],
        highlight: "Congratulations, your startup got selected!",
        viewMoreUrl: "https://www.linkedin.com/feed/update/urn:li:activity:6935154797377384448/",
        sliderTitle: "Vel Tech TBI & SISFS",
        sliderOrg: "Startup India Seed Fund",
        sliderCategory: "Seed Funding",
        image: velTechImg,
        icon: <FaRocket className={styles.slideVisualIcon} />
    },
    {
        id: "news-microsoft-2021",
        category: "Global Incubator",
        date: "25th August, 2021",
        year: "2021",
        title: '"Microsoft for Startups" program choses PepperTree.AI!',
        body: 'In our path to success "Microsoft for Startups" chose PepperTree.AI to join the global incubator program that helps scale promising technology startups. Microsoft\'s support is going to be a game changer in every aspect of our enterprise product development life cycle for both Logistics & FinTech solutions.',
        viewMoreUrl: "https://www.linkedin.com/feed/update/urn:li:activity:6836327511975190528",
        sliderTitle: "Microsoft for Startups",
        sliderOrg: "Global Incubator Program",
        sliderCategory: "Scale & Cloud",
        image: microsoftImg,
        icon: <FaRocket className={styles.slideVisualIcon} />
    },
    {
        id: "news-ramaiah-2021",
        category: "Milestone Award",
        date: "23rd August, 2021",
        year: "2021",
        title: "PepperTree.AI receives Star Start-ups award from Ramaiah Evolute!",
        body: 'PepperTree.AI bags the prestigious “Ramaiah Evolute Star Start-ups Award 2021”!! A milestone is achieved within a year of our journey.',
        viewMoreUrl: "https://www.linkedin.com/posts/ramaiah-evolute_winners-ramaiahevolute-activity-6835842303488339968-atq8",
        sliderTitle: "Ramaiah Evolute",
        sliderOrg: "Star Start-ups Award 2021",
        sliderCategory: "Milestone Award",
        image: ramaiahImg,
        icon: <FaAward className={styles.slideVisualIcon} />
    }
];

const News = () => {
    const sliderTrackRef = useRef(null);
    const [highlightedId, setHighlightedId] = useState(null);

    // Scroll slider horizontally
    const handleScroll = (direction) => {
        if (sliderTrackRef.current) {
            const scrollDistance = direction === 'left' ? -320 : 320;
            sliderTrackRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        }
    };

    // Clicking a slide scrolls smoothly to that news section
    const handleSlideClick = (id) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setHighlightedId(id);
            setTimeout(() => {
                setHighlightedId(null);
            }, 2500);
        }
    };

    return (
        <div className={styles.newsPage}>
            {/* Ambient Background Glows */}
            <div className={styles.bgGlow1} />
            <div className={styles.bgGlow2} />

            {/* ==============================================================
                1. HERO HEADER
                ============================================================== */}
            <header className={styles.heroHeader}>
                <div className={styles.badge}>
                    <span className={styles.badgeDot} />
                    Press & Announcements
                </div>
                <h1 className={styles.heroTitle}>
                    GIROPie in the <span className={styles.heroTitleHighlight}>News</span>
                </h1>
                <p className={styles.heroSubtitle}>
                    Follow our journey transforming B2B cash flows — from prestigious government awards
                    and premier incubator selections to institutional milestones.
                </p>
            </header>

            {/* ==============================================================
                2. INTERACTIVE SLIDER BANNER (SLIDEABLE & CLICKABLE)
                ============================================================== */}
            <section className={styles.sliderSection}>
                <div className={styles.sliderHeader}>
                    <div className={styles.sliderTitleWrap}>
                        <h2 className={styles.sliderTitle}>Featured Highlights & Accreditations</h2>
                        <span className={styles.sliderHint}>(Click any card to jump to its story)</span>
                    </div>

                    <div className={styles.sliderControls}>
                        <button
                            type="button"
                            className={styles.navArrowBtn}
                            onClick={() => handleScroll('left')}
                            aria-label="Previous Slide"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            type="button"
                            className={styles.navArrowBtn}
                            onClick={() => handleScroll('right')}
                            aria-label="Next Slide"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                <div className={styles.sliderTrack} ref={sliderTrackRef}>
                    {newsData
                        .filter((item) => item.id !== 'news-pci-dss-2022')
                        .map((item) => (
                            <div
                                key={`slide-${item.id}`}
                                className={styles.slideCard}
                                onClick={() => handleSlideClick(item.id)}
                                role="button"
                                tabIndex={0}

                            >
                                <div className={styles.slideTopRow}>
                                    <span className={styles.slideCategoryBadge}>{item.sliderCategory}</span>
                                    <span className={styles.slideYear}>{item.year}</span>
                                </div>

                                <div className={styles.slideVisualBox}>
                                    {item.image ? (
                                        <img src={item.image} alt={item.sliderTitle} className={styles.slideImg} />
                                    ) : (
                                        item.icon
                                    )}
                                </div>

                                <div>
                                    <h3 className={styles.slideTitle}>{item.sliderTitle}</h3>
                                    <p className={styles.slideOrg}>{item.sliderOrg}</p>
                                </div>

                                <div className={styles.slideFooter}>
                                    <span>Read Full Story</span>
                                    <FaArrowDown className={styles.slideFooterIcon} />
                                </div>
                            </div>
                        ))}
                </div>
            </section>

            {/* ==============================================================
                3. NEWS ARTICLES FEED / TIMELINE
                ============================================================== */}
            <main className={styles.feedSection}>
                <div className={styles.feedHeader}>
                    <h2 className={styles.feedSectionTitle}>All Announcements & Milestones</h2>
                    <span className={styles.feedCount}>{newsData.length} Articles</span>
                </div>

                <div className={styles.articlesList}>
                    {newsData.map((article) => {
                        const isHighlighted = highlightedId === article.id;

                        return (
                            <article
                                key={article.id}
                                id={article.id}
                                className={`${styles.articleCard} ${isHighlighted ? styles.articleCardHighlighted : ''}`}
                            >
                                {/* Meta Row: Tag & Date */}
                                <div className={styles.articleMetaRow}>
                                    <span className={styles.articleCategory}>
                                        {article.category}
                                    </span>
                                    <span className={styles.articleDate}>
                                        <FaCalendarDays className={styles.dateIcon} />
                                        {article.date}
                                    </span>
                                </div>

                                {/* Headline */}
                                <h3 className={styles.articleTitle}>
                                    {article.viewMoreUrl ? (
                                        <a
                                            href={article.viewMoreUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.articleTitleLink}
                                        >
                                            {article.title}
                                        </a>
                                    ) : (
                                        article.title
                                    )}
                                </h3>

                                {/* Main Description Paragraphs */}
                                {article.body.split('\n\n').map((paragraph, pIdx) => (
                                    <p key={pIdx} className={styles.articleBody}>
                                        {paragraph}
                                    </p>
                                ))}

                                {/* Optional Points / Bullet List */}
                                {article.points && article.points.length > 0 && (
                                    <ul className={styles.articlePointsList}>
                                        {article.points.map((point, ptIdx) => (
                                            <li key={ptIdx} className={styles.articlePointItem}>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Optional Highlight Note */}
                                {article.highlight && (
                                    <div className={styles.articleHighlightBox}>
                                        {article.highlight}
                                    </div>
                                )}

                                {/* Footer & View More Link */}
                                <div className={styles.articleFooter}>
                                    {article.viewMoreUrl ? (
                                        <a
                                            href={article.viewMoreUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.viewMoreBtn}
                                        >
                                            <span>View More</span>
                                            <FaArrowUpRightFromSquare />
                                        </a>
                                    ) : (
                                        <span className={styles.anchorBadge}>
                                            Company Announcement
                                        </span>
                                    )}

                                    <span className={styles.anchorBadge}>
                                        #{article.id.replace('news-', '')}
                                    </span>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};

export default News;
