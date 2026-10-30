import Hero from '../sections/Hero';
import UpiMdrBanner from '../sections/UpiMdrBanner';
import Features from '../sections/Features';
import Onboarding from '../sections/Onboarding';

const Home = () => {
    return (
        <div>
            <Hero />
            <UpiMdrBanner />
            <Features />
            <Onboarding />
            {/* Global Footer renders automatically via App.jsx */}
        </div>
    );
};

export default Home;
