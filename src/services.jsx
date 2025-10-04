import React from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';

const services = [
  { title: 'General Consultations', desc: 'Standard, long and preventative health consultations.' },
  { title: 'Children & Immunisations', desc: 'Routine childhood vaccines, growth & development checks.' },
  { title: 'Chronic Disease Management', desc: 'Care plans and reviews for diabetes, asthma, COPD & cardiovascular risk.' },
  { title: 'Women’s Health', desc: 'Cervical screening, reproductive health, menopause support.' },
  { title: 'Men’s Health', desc: 'Preventative screening, prostate health, lifestyle support.' },
  { title: 'Skin Checks & Procedures', desc: 'Skin cancer checks, biopsies and minor surgical procedures.' },
  { title: 'Travel Medicine', desc: 'Pre‑travel risk assessment and recommended vaccinations.' },
  { title: 'Mental Health Support', desc: 'GP mental health care plans and ongoing review.' },
  { title: 'Vaccinations & Flu Shots', desc: 'Seasonal influenza, COVID‑19 and adult booster vaccines.' },
  { title: 'Health Assessments', desc: '45–49, over 75, Aboriginal & Torres Strait Islander assessments.' },
  { title: 'Pathology Collection (Partner)', desc: 'Convenient on‑site collection (times may vary).' },
  { title: 'Work & Driver Medicals', desc: 'Employment, commercial driver and pre‑participation checks.' }
];

function Header(){
  const base = import.meta.env.BASE_URL;
  return (
    <header>
      <div className="header-inner">
        <div className="brand">
          <div className="logo">SC</div>
          <div>
            <div style={{fontWeight:800}}>Southern Cross</div>
            <div style={{fontSize:13,color:'var(--muted)',marginTop:2}}>Medical Clinic</div>
          </div>
        </div>
        <nav aria-label="Primary">
          <a href={base}>Home</a>
          <a className="active" href={base + 'services.html'}>Services</a>
          <a href={base + '#doctors'}>Doctors</a>
          <a href={base + '#fees'}>Fees</a>
          <a href={base + '#contact'}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

function ServicesPage(){
  return (
    <>
      <Header />
      <div className="container">
        <section className="card" style={{marginTop:24}}>
          <h1 style={{margin:'0 0 12px'}}>Our Services</h1>
          <p style={{color:'var(--muted)',marginTop:0}}>Comprehensive primary care delivered by experienced general practitioners and support staff.</p>
        </section>
        <section style={{marginTop:22}} className="grid-3">
          {services.map(s => (
            <div key={s.title} className="card" style={{display:'flex',flexDirection:'column',gap:6}}>
              <strong style={{fontSize:15}}>{s.title}</strong>
              <p style={{margin:0,color:'var(--muted)',fontSize:14}}>{s.desc}</p>
            </div>
          ))}
        </section>
        <section className="card" style={{marginTop:28}}>
          <h2 style={{margin:'0 0 10px'}}>Need something not listed?</h2>
          <p style={{color:'var(--muted)',marginTop:0}}>Contact reception to check availability or discuss a tailored care plan.</p>
          <a href="tel:+61391234567" className="btn" style={{marginTop:8}}>Call Reception</a>
        </section>
        <footer>© 2025 Southern Cross Medical Clinic — 22 Hudson St, Footscray VIC 3011 • Phone: (03) 9123 4567</footer>
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><ServicesPage /></React.StrictMode>);
