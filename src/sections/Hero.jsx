import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import TrueCostModal from '../components/TrueCostModal';

import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';

const slides = [slide1, slide2, slide3, slide4];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isCostModalOpen, setIsCostModalOpen] = useState(false);

    // Auto-sliding logic with hover pause
    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [isPaused]);

    return (
        <section className={styles.heroContainer}>
            {/* Background glowing orbs */}
            <div className={styles.glowOrb1}></div>
            <div className={styles.glowOrb2}></div>

            <div className={styles.content}>
                <div className={styles.badge}>Next-Gen Invoice Automation</div>

                <h1>
                    The Real-Time Cash Flow <br /> Engine for <span>Businesses</span>
                </h1>

                <p>
                    Uncover hidden operational costs behind every invoice and reduce them by up to 20% with invoice-to-cash automation.
                </p>

                {/* Discover Your True Cost Per Invoice Action Button */}
                <button
                    type="button"
                    className={styles.discoverBtn}
                    onClick={() => setIsCostModalOpen(true)}
                >
                    Discover Your True Cost Per Invoice
                </button>
            </div>

            {/* Split Section: Slider (Left) & Data (Right) */}
            <div className={styles.heroBottom}>
                {/* Left Side: Interactive Slider with Hover Pause & Dot Controls */}
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

                        {/* Interactive Dot Indicators */}
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

                    {/* DSO Reduction Caption matching screenshot 4 */}
                    <div className={styles.sliderCaption}>
                        Reduce DSO By 5-10 Days* in a Credit Cycle
                    </div>
                </div>

                {/* Right Side: Re-added Data */}
                <div className={styles.bottomInfo}>
                    <h3>Get your <span>Collection Account</span> through GIROPie.</h3>

                    <p>
                        Enable your customers to authorize an Autopay schedule for individual invoice or recurring payments.
                    </p>

                    <p>
                        GIROPie gives your customers the flexibility to choose and manage when to pay, while you gain <span>real-time visibility</span> and control over your collection and cash flow.
                    </p>

                    {/* Read More button leads to What We Do / Shared Invoice Layer in About Us */}
                    <Link to="/about#what-we-do" className={styles.readMoreLink}>
                        Read More &rarr;
                    </Link>
                </div>
            </div>

            {/* True Cost Analysis & Savings Calculator Modal */}
            <TrueCostModal
                isOpen={isCostModalOpen}
                onClose={() => setIsCostModalOpen(false)}
            />
        </section>
    );
};

export default Hero;
