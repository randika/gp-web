import React from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import ServicesPage from './pages/ServicesPage.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ServicesPage standalone />
  </React.StrictMode>
);
