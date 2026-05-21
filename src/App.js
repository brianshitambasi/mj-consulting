import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Solutions from './components/solutions/Solutions';
import Technologies from './components/technologies/Technologies';
import Industries from './components/industries/Industries';
import CaseStudies from './components/casestudies/CaseStudies';
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
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
