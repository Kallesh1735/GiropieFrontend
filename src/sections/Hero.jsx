import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import TrueCostModal from '../components/TrueCostModal';

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
// SECTION 2: HERO COMPONENT (HOME PAGE TOP SECTION)
// ============================================================================
const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isCostModalOpen, setIsCostModalOpen] = useState(false);

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
                2.1 UPPER HERO: BADGE, HEADLINE, SUBTITLE & TRUE COST CTA
               -------------------------------------------------------------- */}
            <div className={styles.content}>
                <div className={styles.badge}>Next-Gen Invoice Automation</div>

                <h1>
                    The Real-Time Cash Flow <br /> Engine for <span>Businesses</span>
                </h1>

                <p>
                    Uncover hidden operational costs behind every invoice and reduce them by up to 20% with invoice-to-cash automation.
                </p>

                {/* Triggers the 4-step True Cost Per Invoice Modal */}
                <button
                    type="button"
                    className={styles.discoverBtn}
                    onClick={() => setIsCostModalOpen(true)}
                >
                    Discover Your True Cost Per Invoice
                </button>
            </div>

            {/* --------------------------------------------------------------
                2.2 LOWER HERO: INTERACTIVE SLIDER (LEFT) & VALUE PROP (RIGHT)
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

                    {/* DSO Reduction Caption & Footnote */}
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

            {/* --------------------------------------------------------------
                2.3 TRUE COST ANALYSIS & SAVINGS CALCULATOR MODAL
               -------------------------------------------------------------- */}
            <TrueCostModal
                isOpen={isCostModalOpen}
                onClose={() => setIsCostModalOpen(false)}
            />
        </section>
    );
};

export default Hero;
