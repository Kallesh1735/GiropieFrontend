import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import { FaShieldHalved, FaCalendarDays, FaArrowRight, FaCircleCheck } from 'react-icons/fa6';

// ============================================================================
// SECTION 1: HERO SLIDER ASSETS
// Easy to edit: Add or swap platform dashboard preview slides in the array below.
// ============================================================================
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';

const slides = [slide1, slide2, slide3, slide4];

// ============================================================================
// SECTION 2: PROOF STRIP ITEMS (P0 #4)
// NOTE: None link to unpublished pages. Keep all 6 proof items visible.
// ============================================================================
const PROOF_ITEMS = [
    'Patented in India',
    'TallyPrime integrated',
    'Easebuzz payment partner',
    'Built on NPCI eMandate and NACH',
    'Runner-up NSA 5.0',
    'ElevateNXT Deeptech'
];

// ============================================================================
// SECTION 3: HERO COMPONENT (HOME PAGE TOP SECTION)
// ============================================================================
const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-advance dashboard slides every 3 seconds (pauses when user hovers)
    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [isPaused]);

    return (
        <section className={styles.heroContainer}>
            {/* Ambient background glow orbs */}
            <div className={styles.glowOrb1}></div>
            <div className={styles.glowOrb2}></div>

            {/* --------------------------------------------------------------
                3.1 UPPER HERO: PATENT BADGE, H1, SUBHEAD & PRIMARY CTAS
                NOTE (P0 #3): Patent number must NOT appear on the home page;
                badge links to /trust where patent & architecture details live.
               -------------------------------------------------------------- */}
            <div className={styles.content}>
                <Link to="/trust" className={styles.patentBadge}>
                    <FaShieldHalved className={styles.patentIcon} />
                    <span>Patented in India</span>
                </Link>

                <h1>
                    Get paid on the due date, <span>without chasing.</span>
                </h1>

                <p>
                    Connect invoices with buyer-approved Pay-by-Dates and automated bank mandate collections—built alongside your existing TallyPrime and ERP workflows.
                </p>

                {/* Primary & Secondary Hero Actions (P0 #1 & Tech #8) */}
                <div className={styles.buttonGroup}>
                    <a
                        href="https://calendly.com/giropie/giropie-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.primaryBtn}
                    >
                        <FaCalendarDays /> Book a 30-minute demo
                    </a>

                    <a
                        href="https://live.giropie.com/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondaryBtn}
                    >
                        Start your trial <FaArrowRight />
                    </a>
                </div>
            </div>

            {/* --------------------------------------------------------------
                3.2 CREDIBILITY & PROOF STRIP (P0 #3 & #4)
                Positioned directly below the hero copy so both the Patent Badge
                and all 6 proof items are visible without scrolling at 1440px.
               -------------------------------------------------------------- */}
            <div id="proof-strip" className={styles.proofStrip} aria-label="Platform credentials and recognitions">
                <ul className={styles.proofList}>
                    {PROOF_ITEMS.map((item) => (
                        <li key={item} className={styles.proofItem}>
                            <FaCircleCheck className={styles.proofCheckIcon} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* --------------------------------------------------------------
                3.3 LOWER HERO: PRODUCT SLIDES (LEFT) & COLLECTION ACCOUNT (RIGHT)
               -------------------------------------------------------------- */}
            <div className={styles.heroBottom}>
                {/* Left Column: Dashboard Carousel & DSO Caption */}
                <div className={styles.sliderWrapper}>
                    <div
                        className={styles.sliderContainer}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <img
                            key={currentSlide}
                            src={slides[currentSlide]}
                            alt={`GIROPie Platform Dashboard view ${currentSlide + 1}`}
                            className={styles.sliderImage}
                        />

                        {/* Interactive Slide Dot Indicators */}
                        <div className={styles.sliderDots}>
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    aria-label={`View slide ${idx + 1}`}
                                    className={`${styles.dot} ${currentSlide === idx ? styles.activeDot : ''}`}
                                    onClick={() => setCurrentSlide(idx)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* DSO Reduction Caption & Footnote (Preserved per P0 #1) */}
                    <div className={styles.sliderCaption}>
                        Reduce DSO By 5-10 Days* in a Credit Cycle
                        <span className={styles.dsoFootnote}>
                            *Based on scheduled Pay-by-Date &amp; automated mandate collection workflows
                        </span>
                    </div>
                </div>

                {/* Right Column: Collection Account Overview & Read More Link */}
                <div className={styles.bottomInfo}>
                    <h3>Get your <span>Collection Account</span> through GIROPie.</h3>

                    <p>
                        Enable your customers to authorize an Autopay schedule for individual invoice or recurring payments.
                    </p>

                    <p>
                        GIROPie gives your customers the flexibility to choose and manage when to pay, while you gain <span>real-time visibility</span> and control over your collection and cash flow.
                    </p>

                    {/* Scrolls directly to the "What We Do" section on the About Us page */}
                    <Link to="/about#what-we-do" className={styles.readMoreLink}>
                        Read More &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
