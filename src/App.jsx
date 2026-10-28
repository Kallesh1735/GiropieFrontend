import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './index.css';

// ============================================================================
// SECTION 1: GLOBAL LAYOUT COMPONENTS
// ============================================================================
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';

// ============================================================================
// SECTION 2: PAGE VIEWS
// ============================================================================
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import FeaturesPage from './pages/FeaturesPage';
import Pricing from './pages/Pricing';
import GOFundZ from './pages/GOFundZ';
import Careers from './pages/Careers';
import News from './pages/News';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';

// ============================================================================
// SECTION 3: CONDITIONAL NAVBAR WRAPPER
// NOTE: The Privacy Policy page (/privacy, /privacy-policy) has its own
// dedicated centered GIROPie logo & Home button header bar. Hiding the global
// sticky Navbar on those routes prevents showing a duplicate logo header.
// ============================================================================
const ConditionalNavbar = () => {
  const { pathname } = useLocation();
  const isStandaloneHeaderPage = pathname === '/privacy' || pathname === '/privacy-policy';
  if (isStandaloneHeaderPage) return null;
  return <Navbar />;
};

// ============================================================================
// SECTION 4: MAIN APPLICATION & ROUTING TABLE
// Easy to edit: Add or modify application routes inside <Routes> below.
// ============================================================================
function App() {
  return (
    <Router>
      <ScrollToTop />
      <BackToTop />
      <div className="app-container">
        <ConditionalNavbar />

        <main>
          <Routes>
            {/* Core Marketing Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/gofundz" element={<GOFundZ />} />
            <Route path="/careers" element={<Careers />} />

            {/* Resources & Content Pages */}
            <Route path="/resources" element={<Navigate to="/news" replace />} />
            <Route path="/news" element={<News />} />
            <Route path="/resources/news" element={<News />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/resources/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/blog/:slug" element={<Blog />} />
            <Route path="/post/:slug" element={<Blog />} />

            {/* Contact Redirect -> Scrolls directly to About Us #contact form */}
            <Route path="/contact" element={<Navigate to="/about#contact" replace />} />

            {/* Legal & Compliance Routes */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* 404 Catch-All Route for unmatched URLs */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
