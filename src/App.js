import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppWidget from './components/common/WhatsAppWidget';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Solutions from './components/solutions/Solutions';
import SolutionDetail from './components/solution-detail/SolutionDetail';
import Technologies from './components/technologies/Technologies';
import Industries from './components/industries/Industries';
import CaseStudies from './components/casestudies/CaseStudies';
import CaseStudyDetail from './components/case-study-detail/CaseStudyDetail';
import Insights from './components/insights/Insights';
import Company from './components/company/Company';
import Contact from './components/contact/Contact';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:id" element={<SolutionDetail />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/casestudies/:id" element={<CaseStudyDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppWidget />
    </Router>
  );
}

export default App;
