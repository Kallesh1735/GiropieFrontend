import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';

const slides = [slide1, slide2, slide3, slide4];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-sliding logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

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
                
            </div>

            {/* Split Section: Slider (Left) & Data (Right) */}
            <div className={styles.heroBottom}>

                {/* Left Side: Slider */}
                <div className={styles.sliderContainer}>
                    <img
                        key={currentSlide}
                        src={slides[currentSlide]}
                        alt={`Dashboard view ${currentSlide + 1}`}
                        className={styles.sliderImage}
                    />
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

                    <a href="#" className={styles.readMoreLink}>Read More</a>
                </div>

            </div>
        </section>
    );
};

export default Hero;
