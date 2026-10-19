import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Global Components
import Navbar from './components/Navbar';
import Footer from './sections/Footer';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import FeaturesPage from './pages/FeaturesPage';
import Pricing from './pages/Pricing';
import GOFundZ from './pages/GOFundZ';
import Careers from './pages/Careers';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/gofundz" element={<GOFundZ />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
