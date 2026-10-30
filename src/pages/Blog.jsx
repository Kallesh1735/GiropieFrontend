import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Blog.module.css';
import {
    FaArrowLeft,
    FaArrowRight,
    FaMagnifyingGlass,
    FaClock,
    FaRegHeart,
    FaHeart,
    FaRegEye,
    FaRegComment,
    FaShareNodes,
    FaCheck,
    FaLightbulb,
    FaPenNib,
    FaLinkedin,
    FaXTwitter,
    FaFacebook,
    FaYoutube
} from 'react-icons/fa6';

// Official GIROPie Logo Icon for editorial avatar
import giropieAvatar from '../assets/GiropieG-LOGO.jpg';

// All 4 Blog Posts with category metadata
const blogPostsData = [
    {
        id: 'streamlining-your-finances-with-invoice-to-cash-i2c-automation',
        slug: 'streamlining-your-finances-with-invoice-to-cash-i2c-automation',
        category: 'Invoice Automation',
        date: 'Nov 9, 2023',
        readTime: '3 min read',
        views: 31,
        comments: 0,
        initialLikes: 1,
        title: 'Streamlining your Finances with Invoice-to-Cash (I2C) Automation',
        excerpt: 'In the finance and business world, cash flow efficiency is often the key to success. Companies are constantly seeking ways to optimize their financial processes and maximize cash flow with I2C automation.',
        takeaway: 'I2C automation eliminates manual invoice follow-ups, streamlines reconciliation, and expedites working capital liquidity through automated debtor debits and bill discounting.',
        // Complete 7-section content
        content: [
            {
                type: 'paragraph',
                text: 'In the finance and business world, cash flow efficiency is often the key to success. Companies are constantly seeking ways to optimize their financial processes and maximize their cash flow. One of the most promising solutions in this endeavor is Invoice-to-Cash (I2C) automation. This advanced automation approach focuses on several key components of the financial cycle, helping companies manage their cash flows more effectively.'
            },
            {
                type: 'paragraph',
                text: 'Let us explore the various aspects of I2C automation and how they can benefit your business.'
            },
            {
                type: 'section',
                heading: '1. Customer Invoicing Automation',
                text: 'One of the fundamental pillars of I2C automation is the streamlining of customer invoicing. Traditional invoice-to-cash management processes can be time-consuming, manpower intensive, and error-prone. With I2C automation, companies can generate and send invoices to customers automatically, reducing the risk of delays, inaccuracies, and missing invoices. This not only saves time but also improves customer satisfaction by providing a consistent and efficient invoicing experience.'
            },
            {
                type: 'section',
                heading: '2. AR Collection Automation',
                text: "Accounts Receivable (AR) is a critical aspect of a company's financial health. With I2C automation, businesses can automate their AR collection while reducing intensive manpower use. The system can send reminders, follow-up emails, and even escalate to collections when necessary. Perhaps, a collaborative system between a Buyer and Seller can reduce a lot of unintended payment delays."
            },
            {
                type: 'section',
                heading: '3. Customer Integration and Payments',
                text: "I2C automation extends to the customer's side as well. By offering a communication platform integrated with an online payment mechanism, businesses can make it easier for customers to settle their invoices promptly. This not only accelerates the cash flow but also enhances the overall customer experience."
            },
            {
                type: 'section',
                heading: '4. Account Payable Automation',
                text: 'While I2C primarily focuses on the receivables side, it also has a significant impact on the expenditure side of the equation. Account Payable (AP) automation streamlines the entire process of managing and paying supplier invoices. It reduces manual data entry, minimizes errors, and optimizes payment schedules. The result is improved efficiency in managing costs and preserving cash.'
            },
            {
                type: 'section',
                heading: '5. Cash Application Automation',
                text: 'Cash Application is another crucial aspect of I2C automation. It simplifies the process of reconciling incoming payments with open invoices. Invoice-wise matching and posting of payments reduce the risk of misallocation and ensure that cash is accurately applied to the correct accounts, making the ledger/Bank account reconciliation process more efficient.'
            },
            {
                type: 'section',
                heading: '6. Bill Discounting',
                text: "Bill discounting is a financial strategy that allows companies to get paid for their invoices before the actual due date. With I2C automation, businesses can identify invoices that are eligible for early payment and with pre-negotiated terms with financial institutions discounting process is expedited. This can provide a valuable source of liquidity and strengthen the company's cash position."
            },
            {
                type: 'section',
                heading: '7. Trade Credit Insurance',
                text: 'Trade credit insurance is an essential component of risk management. I2C automation can help companies in the management of trade credit insurance policies. By automating the monitoring and compliance with insurance requirements, businesses can reduce their risk exposure and protect their cash flow from defaulted customer payments.'
            },
            {
                type: 'paragraph',
                text: 'In conclusion, Invoice-to-Cash (I2C) automation offers a comprehensive approach to streamlining financial processes and optimizing cash flows. From automating customer invoicing to enhancing accounts receivable collection, and from accounts payable automation to cash application, I2C automation empowers businesses to take control of their finances. Additionally, the inclusion of bill discounting and trade credit insurance further strengthens financial stability.'
            },
            {
                type: 'paragraph',
                text: "Engage with GIROPie to learn how companies can not only save time and resources but also position themselves for sustainable growth and success in today's competitive business landscape."
            }
        ]
    },
    {
        id: 'by-what-date-my-buyer-is-going-to-pay',
        slug: 'by-what-date-my-buyer-is-going-to-pay',
        category: 'Working Capital',
        date: 'Jul 10, 2023',
        readTime: '2 min read',
        views: 13,
        comments: 0,
        initialLikes: 1,
        title: 'By what date my Buyer is going to pay?',
        excerpt: 'Obtaining a definitive commitment date from a Buyer for an AR collection is a daunting task. When trying to obtain a collection, suppliers often face endless follow-ups, unclear communication, and shifting timelines.',
        takeaway: 'Direct collaboration on a shared invoice layer gives buyers the flexibility to schedule a Pay-by-Date while giving suppliers accurate, real-time collection forecasting.',
        content: [
            {
                type: 'paragraph',
                text: 'Obtaining a definitive commitment date from a Buyer for an AR collection is a daunting task.'
            },
            {
                type: 'paragraph',
                text: "When trying to obtain a collection commitment date from a buyer for accounts receivable (AR), there can be several difficulties that arise. These challenges may vary depending on the specific circumstances and the nature of the buyer's business. Here are some common difficulties you might encounter:"
            },
            {
                type: 'section',
                heading: '1. Lack of Responsiveness',
                text: 'Buyers may not respond promptly. This can happen due to various reasons such as a high volume of inquiries, internal communication issues, or simply a lack of priority given to the request.'
            },
            {
                type: 'section',
                heading: '2. Unclear Communication Channels',
                text: 'If there is no established communication channel or process, suppliers encounter major challenges in reaching the right person or department to confirm payment scheduling.'
            },
            {
                type: 'section',
                heading: "3. Disorganized Buyer's Accounting System",
                text: 'Some buyers may have disorganized or outdated accounting systems with no clear view of cash flows, resulting in delays or inaccuracies in the commitment date provided.'
            },
            {
                type: 'section',
                heading: '4. Internal Approval Processes',
                text: 'In larger organizations, obtaining a collection commitment date may require going through multiple layers of approval. If the flow of information is not linear and dynamic, decision-making is always challenging.'
            },
            {
                type: 'section',
                heading: '5. Lack of Transparency',
                text: 'Buyers may be experiencing financial difficulties, have cash flow constraints, or be dealing with other issues that impact their ability to commit to a specific date.'
            },
            {
                type: 'section',
                heading: '6. Changing Priorities',
                text: "The buyer's priorities may change over time, leading to shifting timelines for payables."
            },
            {
                type: 'paragraph',
                text: "To address these difficulties, it is important to establish clear lines of communication with the buyer and maintain regular follow-ups. Building a strong working relationship and understanding the buyer's specific challenges can help in navigating these obstacles."
            },
            {
                type: 'paragraph',
                text: 'Discover how GIROPie can help you improve your Working Capital Management by engaging with your buyers and securing a commitment for a specific pay date for your AR.'
            }
        ]
    },
    {
        id: 'the-importance-of-spontaneous-working-capital',
        slug: 'the-importance-of-spontaneous-working-capital',
        category: 'Working Capital',
        date: 'Jul 6, 2023',
        readTime: '2 min read',
        views: 9,
        comments: 0,
        initialLikes: 1,
        title: 'The Importance of Spontaneous Working Capital',
        excerpt: "How do your cashflows impact your company's liquidity, profitability, and overall financial health? What is the importance of spontaneous working capital in sustaining daily operations and unlocking business growth?",
        takeaway: 'Spontaneous financing arises directly from day-to-day trade operations without formal borrowing, making trade credit optimization a prime lever for operational resilience.',
        content: [
            {
                type: 'paragraph',
                text: "How do your cashflows impact your company's liquidity, profitability, and overall financial health? What is the importance of spontaneous working capital and what role does it play?"
            },
            {
                type: 'paragraph',
                text: 'Well, let us understand what "Spontaneous Working Capital" is. Spontaneous working capital refers to the portion of your company\'s working capital that arises from day-to-day operational activities, such as accounts receivable, accounts payable, and inventory. It represents the net short-term funds required to support the company\'s ongoing operations.'
            },
            {
                type: 'paragraph',
                text: 'What is the importance of spontaneous working capital and what role does it play? Here is why spontaneous working capital is crucial:'
            },
            {
                type: 'section',
                heading: '1. Liquidity Management',
                text: 'Ensures that a company has sufficient funds to meet its short-term obligations, maintaining a smooth cash flow and avoiding cash shortages without the risk of costly short-term loans for day-to-day operations that come at higher interest rates.'
            },
            {
                type: 'section',
                heading: '2. Operational Efficiency',
                text: 'Optimizes your cash conversion cycle by reducing the time taken to convert raw materials to finished products and collect receivables, minimizing the capital tied up in the form of AR.'
            },
            {
                type: 'section',
                heading: '3. Supplier Relationships',
                text: 'Maintaining a healthy payment cycle and meeting payment obligations on time helps build strong supplier relationships. Benefits may come in the form of preferential pricing, extended credit terms, and reliable supply.'
            },
            {
                type: 'section',
                heading: '4. Profitability',
                text: 'Reduces the amount of cash tied up in the market, freeing up funds for investment in growth opportunities or other value-creating activities. A well-managed spontaneous working capital cycle minimizes financing costs and reduces the need for expensive short-term borrowing.'
            },
            {
                type: 'paragraph',
                text: 'Overall, spontaneous working capital management is vital for the smooth functioning and financial well-being of a company. Before making that call for a short-term loan or an OD from a Bank, you must digitize, automate, and optimize your working capital for improved cash flows.'
            },
            {
                type: 'paragraph',
                text: 'Talk to us about how we are redefining spontaneous Working Capital Management with GIROPie.'
            }
        ]
    },
    {
        id: 'integrated-ar-ap-payment-solution',
        slug: 'integrated-ar-ap-payment-solution',
        category: 'Payment Solutions',
        date: 'Jun 9, 2023',
        readTime: '3 min read',
        views: 41,
        comments: 0,
        initialLikes: 1,
        title: 'Integrated AR & AP Payment Solution',
        excerpt: 'In recent years, the Indian economy has been witnessing a surge in digital payments, and the country could become a cashless economy. Discover how unifying AR & AP transforms enterprise balance sheets.',
        takeaway: 'Unified receivables and payables settlement eliminates reconciliation gaps, lowers banking fees, and builds an audit-ready financial trail for both suppliers and corporate buyers.',
        content: [
            {
                type: 'paragraph',
                text: 'In recent years, the Indian economy has been witnessing a surge in digital payments, and the country could become a cashless economy sooner or later. However, the greater use of this advancement in digital payments is happening in the D2C and e-commerce space.'
            },
            {
                type: 'paragraph',
                text: 'With the increasing demand for digital payments, businesses are looking for automated payment systems that can help them streamline their accounts receivable (AR) and accounts payable (AP) processes. Though the Banks provide efficient NEFT, IMPS, and RTGS systems, B2B companies still struggle to manage their finances effectively. An automated and integrated payment system can bring a host of benefits to businesses, including increased efficiency, accuracy, and cost savings.'
            },
            {
                type: 'paragraph',
                text: 'What is an automated payment system? An automated payment system is a software solution that allows businesses to automate their AR collection and payment processes. It can be used to manage both accounts receivable and accounts payable processes on a single platform. The system can automate payment processes such as invoice management, payment processing, and payment reconciliation, integrating with existing accounting & ERP systems.'
            },
            {
                type: 'section',
                heading: '1. Improved Efficiency',
                text: 'An automated payment system can significantly improve the efficiency of payment processes. The system can automate invoice management, communication, and payment processing, which can save businesses a significant amount of time.'
            },
            {
                type: 'section',
                heading: '2. Enhanced Accuracy',
                text: 'Automated payment systems are designed to be highly accurate, with minimal errors in payment processing and can manage high volumes. With an automated payment system, businesses can eliminate the risk of human error to a greater extent, which otherwise can lead to payment processing mistakes.'
            },
            {
                type: 'section',
                heading: '3. Cost Savings',
                text: 'Automated payment systems can help businesses save money by reducing the need for manual labor. By automating payment processes, businesses can engage their workforce on their core businesses which fuel growth, reducing conflicting versions of data across separate teams.'
            },
            {
                type: 'section',
                heading: '4. Improved Cash Flow',
                text: 'An automated payment system can help businesses improve their cash flow by speeding up payment processing. The system can automatically send payment reminders to customers and follow up on unpaid invoices. With faster payment processing, businesses can improve their cash flow and reduce the need for borrowing.'
            },
            {
                type: 'section',
                heading: '5. Integrated AR and AP',
                text: 'An integrated AR and AP system can help to improve relationships with customers and vendors. By providing real-time payment information, companies can be more responsive to inquiries and ensure that payments are made on time. Additionally, with real-time visibility into payment status, companies can identify late payments and take action to collect them more quickly, protecting businesses from cash flow crises.'
            },
            {
                type: 'section',
                heading: '6. Better Customer Experience',
                text: 'Automated AR collection and payment systems can also help businesses provide a better customer experience while being able to collect using the same system. With an automated payment system, customers can easily pay bulk invoices online, which is much more convenient than sending checks or setting up multi-NEFT/RTGS payments manually. Furthermore, automated on-time notifications and payment confirmation emails build mutual trust and customer satisfaction.'
            },
            {
                type: 'paragraph',
                text: 'Conclusion: An automated payment system can bring significant benefits to businesses by streamlining their accounts receivable and accounts payable processes. The system can improve efficiency, accuracy, and cost savings while also improving cash flow and customer experience. As digital payments continue to grow in popularity in India, businesses should consider implementing an automated payment system to stay ahead of the curve.'
            }
        ]
    }
];

const Blog = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Active Category Filter
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Track Likes
    const [likedPosts, setLikedPosts] = useState({});
    const [poppedPostId, setPoppedPostId] = useState(null);

    // Reading Progress Bar tracker for single article view
    const [readingProgress, setReadingProgress] = useState(0);

    // Comments map per post (initialized empty — zero unverified customer quotes)
    const [commentsByPost, setCommentsByPost] = useState({});
    const [commentText, setCommentText] = useState('');
    const [commentAuthor, setCommentAuthor] = useState('');

    // Toast notification state
    const [showToast, setShowToast] = useState(false);

    const activePost = slug
        ? blogPostsData.find((p) => p.slug === slug || p.id === slug)
        : null;
    const shareUrl = activePost
        ? `https://www.giropie.com/blog/${activePost.slug}`
        : 'https://www.giropie.com/blog';

    // Calculate reading scroll progress dynamically when viewing an article
    useEffect(() => {
        if (!activePost) return undefined;

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (scrollHeight > 0) {
                const percent = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
                setReadingProgress(percent);
            } else {
                setReadingProgress(0);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        const rafId = window.requestAnimationFrame(handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.cancelAnimationFrame(rafId);
        };
    }, [activePost]);

    // Category options derived from data
    const categories = ['All', 'Invoice Automation', 'Working Capital', 'Payment Solutions'];

    // Filter posts for listing view
    const filteredPosts = blogPostsData.filter((post) => {
        const matchesCategory =
            selectedCategory === 'All' || post.category === selectedCategory;
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
            !query ||
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query) ||
            post.category.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    // Flagship featured post (first post when on "All" and no search query)
    const featuredPost =
        selectedCategory === 'All' && !searchQuery ? blogPostsData[0] : null;
    const gridPosts = featuredPost
        ? filteredPosts.filter((p) => p.id !== featuredPost.id)
        : filteredPosts;

    // Like toggle with spring pop micro-animation
    const handleToggleLike = (e, postId) => {
        e.stopPropagation();
        setLikedPosts((prev) => ({
            ...prev,
            [postId]: !prev[postId]
        }));
        // Trigger pop animation
        setPoppedPostId(postId);
        setTimeout(() => setPoppedPostId(null), 400);
    };

    // Open single post detail
    const handleOpenPost = (postSlug) => {
        navigate(`/blog/${postSlug}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Back to listing
    const handleBackToList = () => {
        navigate('/blog');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Share link handler with toast
    const handleSharePost = () => {
        const url = window.location.href;
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    };

    // Handle new in-page comment submission
    const handleAddComment = (e) => {
        e.preventDefault();
        if (!commentText.trim() || !activePost) return;

        const authorName = commentAuthor.trim() || 'Guest Reader';
        const initials = authorName
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2) || 'GR';

        const newComment = {
            id: `c-${Date.now()}`,
            author: authorName,
            initials,
            date: 'Just now',
            text: commentText.trim()
        };

        setCommentsByPost((prev) => ({
            ...prev,
            [activePost.id]: [newComment, ...(prev[activePost.id] || [])]
        }));

        setCommentText('');
        setCommentAuthor('');
    };

    return (
        <div className={styles.blogPage}>
            {/* Real-time Reading Progress Bar (Active in Reader View) */}
            {activePost && (
                <div
                    className={styles.readingProgressBar}
                    style={{ width: `${readingProgress}%` }}
                    aria-hidden="true"
                />
            )}
            {/* Ambient Background Glows */}
            <div className={styles.bgGlow1} />
            <div className={styles.bgGlow2} />

            <div className={styles.container}>
                {activePost ? (
                    /* ==========================================================
                       DETAIL VIEW (Single Post Reader)
                       ========================================================== */
                    <div className={styles.detailContainer}>
                        {/* Navigation Row */}
                        <div className={styles.detailNavRow}>
                            <button
                                type="button"
                                onClick={handleBackToList}
                                className={styles.backBtn}
                            >
                                <FaArrowLeft /> Back to all articles
                            </button>

                            <div className={styles.breadcrumbs}>
                                Resources / Blog / <span>{activePost.category}</span>
                            </div>
                        </div>

                        {/* Main Article Container */}
                        <article className={styles.articleCard}>
                            <div className={styles.articleAccentStrip} />

                            <div className={styles.articleMetaHeader}>
                                <div className={styles.articlePills}>
                                    <span className={styles.categoryTag}>{activePost.category}</span>
                                    <span className={styles.metaMuted}>
                                        <FaClock /> {activePost.readTime}
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleSharePost}
                                    className={styles.shareBtn}
                                >
                                    <FaShareNodes /> Share
                                </button>
                            </div>

                            <h1 className={styles.articleTitle}>{activePost.title}</h1>

                            {/* Author & Publication Bar */}
                            <div className={styles.authorMetaBar}>
                                <div className={styles.authorInfoLeft}>
                                    <img
                                        src={giropieAvatar}
                                        alt="GIROPie Editorial Team"
                                        className={styles.authorAvatarLg}
                                    />
                                    <div className={styles.authorDetails}>
                                        <span className={styles.authorByline}>GIROPie Insights Team</span>
                                        <span className={styles.authorPublishDate}>
                                            Published on {activePost.date} &nbsp;·&nbsp; Enterprise Working Capital
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.detailStatsGroup}>
                                    <span>{activePost.views} views</span>
                                    <span>{activePost.comments} comments</span>
                                </div>
                            </div>

                            {/* Key Takeaway Callout */}
                            {activePost.takeaway && (
                                <div className={styles.takeawayBox}>
                                    <h4 className={styles.takeawayTitle}>
                                        <FaLightbulb /> Key Strategic Takeaway
                                    </h4>
                                    <p className={styles.takeawayText}>{activePost.takeaway}</p>
                                </div>
                            )}

                            {/* Full Article Content */}
                            <div className={styles.articleBody}>
                                {activePost.content.map((block, idx) => {
                                    if (block.type === 'section') {
                                        return (
                                            <div key={idx} className={styles.sectionCard}>
                                                <h3 className={styles.sectionHeading}>{block.heading}</h3>
                                                <p className={styles.bodyParagraph}>{block.text}</p>
                                            </div>
                                        );
                                    }
                                    if (block.type === 'placeholder') {
                                        return (
                                            <div key={idx} className={styles.placeholderBanner}>
                                                <FaPenNib className={styles.placeholderIcon} />
                                                <h4>Article Content Ready to Paste</h4>
                                                <p>{block.text}</p>
                                            </div>
                                        );
                                    }
                                    return (
                                        <p key={idx} className={styles.bodyParagraph}>
                                            {block.text}
                                        </p>
                                    );
                                })}
                            </div>

                            {/* In-Article Conversion Banner */}
                            <div className={styles.articleCtaBanner}>
                                <div className={styles.ctaTextGroup}>
                                    <h4>Accelerate your Working Capital with GIROPie</h4>
                                    <p>
                                        Eliminate manual credit collection delays and automate invoice settlement with authorized bank mandates.
                                    </p>
                                </div>
                                <a
                                    href="https://calendly.com/giropie/giropie-demo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.ctaBtnPrimary}
                                >
                                    Book a Live Demo &rarr;
                                </a>
                            </div>

                            {/* Article Footer with Interactive Like Button */}
                            <div className={styles.articleFooterBar}>
                                <div className={styles.detailStatsGroup}>
                                    <span>{activePost.views} total reads</span>
                                    <span>{(commentsByPost[activePost.id]?.length || 0)} comments</span>
                                </div>

                                <button
                                    type="button"
                                    onClick={(e) => handleToggleLike(e, activePost.id)}
                                    className={`${styles.likeBtnLg} ${
                                        likedPosts[activePost.id] ? styles.likeBtnLgActive : ''
                                    } ${poppedPostId === activePost.id ? styles.heartPopped : ''}`}
                                >
                                    {likedPosts[activePost.id] ? (
                                        <FaHeart className={styles.heartLiked} />
                                    ) : (
                                        <FaRegHeart />
                                    )}
                                    <span>
                                        {(activePost.initialLikes || 0) + (likedPosts[activePost.id] ? 1 : 0)} Likes
                                    </span>
                                </button>
                            </div>

                            {/* Social Share & Follow Bar */}
                            <div className={styles.socialShareBar}>
                                <div className={styles.shareHeadingGroup}>
                                    <span className={styles.shareBarLabel}>Share this article:</span>
                                    <div className={styles.shareButtonsGroup}>
                                        <a
                                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl || `https://www.giropie.com/blog/${activePost.slug}`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${styles.socialShareBtn} ${styles.shareLinkedin}`}
                                            aria-label="Share on LinkedIn"
                                        >
                                            <FaLinkedin /> LinkedIn
                                        </a>
                                        <a
                                            href={`https://x.com/intent/tweet?text=${encodeURIComponent(activePost.title)}&url=${encodeURIComponent(shareUrl || `https://www.giropie.com/blog/${activePost.slug}`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${styles.socialShareBtn} ${styles.shareTwitter}`}
                                            aria-label="Share on X"
                                        >
                                            <FaXTwitter /> X
                                        </a>
                                        <a
                                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl || `https://www.giropie.com/blog/${activePost.slug}`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${styles.socialShareBtn} ${styles.shareFacebook}`}
                                            aria-label="Share on Facebook"
                                        >
                                            <FaFacebook /> Facebook
                                        </a>
                                    </div>
                                </div>

                                <div className={styles.followChannelGroup}>
                                    <span className={styles.shareBarLabel}>Follow GIROPie:</span>
                                    <a
                                        href="https://www.youtube.com/@giropie"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.socialShareBtn} ${styles.shareYoutube}`}
                                        aria-label="Watch on YouTube"
                                    >
                                        <FaYoutube /> YouTube
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/company/peppertreeai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.socialShareBtn} ${styles.shareLinkedin}`}
                                        aria-label="Follow on LinkedIn"
                                    >
                                        <FaLinkedin /> Follow
                                    </a>
                                </div>
                            </div>
                        </article>

                        {/* Recent Posts Section (3 cards) */}
                        <section className={styles.recentSection}>
                            <div className={styles.recentHeaderRow}>
                                <h3 className={styles.recentSectionTitle}>Related Insights & Articles</h3>
                                <button
                                    type="button"
                                    onClick={handleBackToList}
                                    className={styles.seeAllLink}
                                >
                                    View All Articles &rarr;
                                </button>
                            </div>

                            <div className={styles.recentGrid}>
                                {blogPostsData
                                    .filter((p) => p.id !== activePost.id)
                                    .slice(0, 3)
                                    .map((post) => (
                                        <div
                                            key={post.id}
                                            className={styles.recentCard}
                                            onClick={() => handleOpenPost(post.slug)}
                                        >
                                            <div>
                                                <span className={styles.cardTag}>{post.category}</span>
                                                <h4 className={styles.recentCardTitle} style={{ marginTop: '0.65rem' }}>
                                                    {post.title}
                                                </h4>
                                                <p className={styles.recentCardExcerpt}>{post.excerpt}</p>
                                            </div>

                                            <div className={styles.recentCardFooter}>
                                                <div className={styles.cardStats}>
                                                    <span className={styles.statItem}>
                                                        <FaRegEye /> {post.views}
                                                    </span>
                                                    <span className={styles.statItem}>
                                                        <FaRegComment /> {post.comments}
                                                    </span>
                                                </div>

                                                <span className={styles.statItem}>
                                                    {(post.initialLikes || 0) + (likedPosts[post.id] ? 1 : 0)}{' '}
                                                    <FaRegHeart />
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </section>

                        {/* Comments Section with Live In-Page Stream */}
                        <section className={styles.commentsCard}>
                            <h3 className={styles.commentsHeading}>
                                Discussion & Comments
                                <span className={styles.commentCountBadge}>
                                    {(commentsByPost[activePost.id]?.length || 0)}
                                </span>
                            </h3>

                            {/* Live Comment Form */}
                            <form onSubmit={handleAddComment} className={styles.commentForm}>
                                <input
                                    type="text"
                                    placeholder="Your name or company (optional)"
                                    value={commentAuthor}
                                    onChange={(e) => setCommentAuthor(e.target.value)}
                                    className={styles.commentAuthorInput}
                                />
                                <div className={styles.commentInputWrapper}>
                                    <textarea
                                        className={styles.commentTextarea}
                                        placeholder="Share your perspective or ask a question about this article..."
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.commentActions}>
                                    <button
                                        type="submit"
                                        className={styles.commentSubmitBtn}
                                    >
                                        Post Comment
                                    </button>
                                </div>
                            </form>

                            {/* Stream of Live Comments */}
                            <div className={styles.commentsList}>
                                {(commentsByPost[activePost.id] || []).length > 0 ? (
                                    commentsByPost[activePost.id].map((comm) => (
                                        <div key={comm.id} className={styles.commentItem}>
                                            <div className={styles.commentAvatar}>
                                                {comm.initials}
                                            </div>
                                            <div className={styles.commentContent}>
                                                <div className={styles.commentHeader}>
                                                    <span className={styles.commentAuthorName}>{comm.author}</span>
                                                    <span className={styles.commentDate}>{comm.date}</span>
                                                </div>
                                                <p className={styles.commentBodyText}>{comm.text}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className={styles.noCommentsText}>
                                        No comments yet. Be the first to share your thoughts on this article!
                                    </p>
                                )}
                            </div>
                        </section>
                    </div>
                ) : (
                    /* ==========================================================
                       LISTING VIEW (Featured Spotlight + Cards Grid)
                       ========================================================== */
                    <div>
                        {/* Header Banner */}
                        <div className={styles.heroHeader}>
                            <div className={styles.badge}>
                                <span className={styles.badgeDot} />
                                GIROPie Insights & Articles
                            </div>
                            <h1 className={styles.heroTitle}>
                                Smart Finance & <span className={styles.heroHighlight}>Working Capital</span>
                            </h1>
                            <p className={styles.heroSubtitle}>
                                Actionable perspectives on Invoice-to-Cash automation, trade credit management, and cash flow acceleration for enterprise teams.
                            </p>
                        </div>

                        {/* Filter Toolbar & Live Search */}
                        <div className={styles.toolbar}>
                            <div className={styles.categoryGroup}>
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        type="button"
                                        className={`${styles.categoryBtn} ${
                                            selectedCategory === cat ? styles.categoryBtnActive : ''
                                        }`}
                                        onClick={() => setSelectedCategory(cat)}
                                    >
                                        {cat} {cat === 'All' ? `(${blogPostsData.length})` : ''}
                                    </button>
                                ))}
                            </div>

                            <div className={styles.searchBox}>
                                <FaMagnifyingGlass className={styles.searchIcon} />
                                <input
                                    type="text"
                                    placeholder="Search insights..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className={styles.searchInput}
                                />
                            </div>
                        </div>

                        {/* 1. Featured Spotlight Article (If on 'All' and no search) */}
                        {featuredPost && (
                            <div
                                className={styles.featuredCard}
                                onClick={() => handleOpenPost(featuredPost.slug)}
                            >
                                <div className={styles.featuredTopGradient} />

                                <div className={styles.featuredBadges}>
                                    <span className={styles.spotlightPill}>★ Featured Article</span>
                                    <span className={styles.categoryTag}>{featuredPost.category}</span>
                                    <span className={styles.metaMuted}>
                                        <FaClock /> {featuredPost.readTime}
                                    </span>
                                </div>

                                <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                                <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>

                                <div className={styles.featuredFooter}>
                                    <div className={styles.authorBlock}>
                                        <img
                                            src={giropieAvatar}
                                            alt="GIROPie Editorial Team"
                                            className={styles.authorAvatar}
                                        />
                                        <div className={styles.authorMeta}>
                                            <span className={styles.authorName}>GIROPie Editorial Team</span>
                                            <span className={styles.authorRole}>
                                                {featuredPost.date} &nbsp;·&nbsp; {featuredPost.views} views
                                            </span>
                                        </div>
                                    </div>

                                    <div className={styles.featuredCtaRow}>
                                        <button
                                            type="button"
                                            onClick={(e) => handleToggleLike(e, featuredPost.id)}
                                            className={`${styles.likeBtn} ${
                                                poppedPostId === featuredPost.id ? styles.heartPopped : ''
                                            }`}
                                            aria-label="Like featured article"
                                        >
                                            {likedPosts[featuredPost.id] ? (
                                                <FaHeart className={styles.heartLiked} />
                                            ) : (
                                                <FaRegHeart />
                                            )}
                                            <span>
                                                {(featuredPost.initialLikes || 0) +
                                                    (likedPosts[featuredPost.id] ? 1 : 0)}
                                            </span>
                                        </button>

                                        <button type="button" className={styles.readMoreBtn}>
                                            Read Full Article <FaArrowRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 2. Grid of Articles */}
                        {gridPosts.length > 0 ? (
                            <div>
                                {featuredPost && (
                                    <h3 className={styles.sectionSubhead}>Latest Articles & Guides</h3>
                                )}

                                <div className={styles.postsGrid}>
                                    {gridPosts.map((post) => {
                                        const isLiked = !!likedPosts[post.id];
                                        const currentLikes =
                                            (post.initialLikes || 0) + (isLiked ? 1 : 0);

                                        return (
                                            <article
                                                key={post.id}
                                                className={styles.postCard}
                                                onClick={() => handleOpenPost(post.slug)}
                                            >
                                                <div>
                                                    <div className={styles.cardTopRow}>
                                                        <span className={styles.cardTag}>{post.category}</span>
                                                        <span className={styles.cardTime}>
                                                            <FaClock /> {post.readTime}
                                                        </span>
                                                    </div>

                                                    <h3 className={styles.cardTitle}>{post.title}</h3>
                                                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                                                </div>

                                                <div>
                                                    <hr className={styles.cardDivider} />

                                                    <div className={styles.cardFooter}>
                                                        <div className={styles.cardStats}>
                                                            <span className={styles.statItem}>
                                                                <FaRegEye /> {post.views}
                                                            </span>
                                                            <span className={styles.statItem}>
                                                                <FaRegComment /> {post.comments}
                                                            </span>
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={(e) => handleToggleLike(e, post.id)}
                                                            className={`${styles.likeBtn} ${
                                                                poppedPostId === post.id ? styles.heartPopped : ''
                                                            }`}
                                                        >
                                                            <span>{currentLikes}</span>
                                                            {isLiked ? (
                                                                <FaHeart className={styles.heartLiked} />
                                                            ) : (
                                                                <FaRegHeart />
                                                            )}
                                                        </button>
                                                    </div>
                                                </div>
                                            </article>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : (
                            <div className={styles.noResults}>
                                No articles found matching "{searchQuery}". Try selecting another category or clear the search.
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Floating Toast Notification when article link is copied */}
            {showToast && (
                <div className={styles.toastNotice}>
                    <FaCheck /> Article link copied to clipboard!
                </div>
            )}
        </div>
    );
};

export default Blog;
