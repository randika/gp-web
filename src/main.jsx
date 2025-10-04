import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';

function Footer(){
  return <footer>© 2025 Southern Cross Medical Clinic — 22 Hudson St, Footscray VIC 3011 • Phone: (03) 9123 4567</footer>;
}

function Shell(){
  const basename = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  // BrowserRouter basename already handled at top level; kept here for clarity if needed
  return (
    <div className="app-root">
      <Header mode="spa" />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}> 
      <Shell />
    </BrowserRouter>
  </React.StrictMode>
);
