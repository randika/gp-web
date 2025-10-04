import React from 'react';
import { services } from '../data/services.js';
import ImgWithFallback from '../components/ImgWithFallback.jsx';

export default function ServicesPage({ standalone = false }) {
  const base = import.meta.env.BASE_URL;
  const Content = (
    <>
      <section className="card" style={{ marginTop: 24 }}>
        <h1 style={{ margin: '0 0 12px' }}>Our Services</h1>
        <p style={{ color: 'var(--muted)', marginTop: 0 }}>Comprehensive primary care delivered by experienced general practitioners and support staff.</p>
      </section>
      <section style={{ marginTop: 22 }} className="grid-3">
        {services.map(s => (
          <div key={s.title} className="card service-card" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {s.img && <ImgWithFallback loading="lazy" src={s.img} alt={s.alt} />}
            <strong style={{ fontSize: 15 }}>{s.title}</strong>
            <p style={{ margin: 0, color: 'var(--muted)', fontSize: 14 }}>{s.desc}</p>
          </div>
        ))}
      </section>
      <section className="card" style={{ marginTop: 28 }}>
        <h2 style={{ margin: '0 0 10px' }}>Need something not listed?</h2>
        <p style={{ color: 'var(--muted)', marginTop: 0 }}>Contact reception to check availability or discuss a tailored care plan.</p>
        <a href="tel:+61391234567" className="btn" style={{ marginTop: 8 }}>Call Reception</a>
      </section>
    </>
  );

  if (!standalone) return Content;

  return (
    <>
      <header>
        <div className="header-inner">
          <div className="brand">
            <div className="logo">SC</div>
            <div>
              <div style={{ fontWeight: 800 }}>Southern Cross</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>Medical Clinic</div>
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
      <div className="container">
        {Content}
        <footer>© 2025 Southern Cross Medical Clinic — 22 Hudson St, Footscray VIC 3011 • Phone: (03) 9123 4567</footer>
      </div>
    </>
  );
}