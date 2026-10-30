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
import HowItWorks from './pages/HowItWorks';
import WhyMandates from './pages/WhyMandates';
import Distributors from './pages/Distributors';
import Logistics from './pages/Logistics';
import Trust from './pages/Trust';
import Contact from './pages/Contact';
// NOTE (P0 #10): GOFundZ standalone page is parked until product & compliance wording is approved; /gofundz redirects to /features#trade-finance
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
// SECTION 4: ROUTER-AGNOSTIC APP SHELL (Shared by BrowserRouter & SSR StaticRouter)
// ============================================================================
export function AppShell() {
  return (
    <>
      <ScrollToTop />
      <BackToTop />
      <div className="app-container">
        <ConditionalNavbar />

        <main>
          <Routes>
            {/* Core Marketing & P1 Solution Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/why-mandates" element={<WhyMandates />} />
            <Route path="/distributors" element={<Distributors />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/trust" element={<Trust />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gofundz" element={<Navigate to="/features#trade-finance" replace />} />
            <Route path="/trade-finance-solutions" element={<Navigate to="/features#trade-finance" replace />} />
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

            {/* Legal & Compliance Routes */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            {/* 404 Catch-All Route for unmatched URLs */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

// ============================================================================
// SECTION 5: BROWSER CLIENT ENTRY
// ============================================================================
function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
