import React from 'react';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Onboarding from '../sections/Onboarding';

const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Onboarding />
            {/* We will leave Footer out of here so it shows on ALL pages automatically */}
        </div>
    );
};

export default Home;
