import React from 'react';
import Carousel from '../components/Carousel.jsx';
import ImgWithFallback from '../components/ImgWithFallback.jsx';
import { services } from '../data/services.js';

function ServicesSection(){
  return (
    <section id="services" className="card" style={{ marginTop: 22 }}>
      <h2 style={{ margin: '0 0 10px' }}>Our Services</h2>
      <div className="grid-3">
        {services.slice(0,6).map(s => (
          <div key={s.title} className="card service-card">
            <ImgWithFallback loading="lazy" src={s.img} alt={s.alt} />
            <strong>{s.title}</strong>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16 }}>
        <a href="/services" className="btn ghost">See all services</a>
      </div>
    </section>
  );
}

function AboutSection(){
  return (
    <section className="grid-2" style={{ marginTop: 22 }}>
      <div className="card">
        <h2 style={{ marginTop: 0 }}>About Our Clinic</h2>
        <p style={{ color: 'var(--muted)' }}>We are a community‑focused general practice delivering high‑quality primary care from experienced GPs, nurses and friendly reception staff.</p>
      </div>
      <div>
        <div className="card map" style={{ padding: 0 }}>
          <iframe title="Clinic location map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ width: '100%', height: '100%', border: 0, borderRadius: 8 }} src="https://www.openstreetmap.org/export/embed.html?bbox=144.894%2C-37.804%2C144.904%2C-37.796&layer=mapnik&marker=-37.800%2C144.899"></iframe>
        </div>
        <div className="card" style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 800, marginBottom: 8 }}>Opening Hours</div>
          <div style={{ color: 'var(--muted)', fontSize: 14 }}>Mon–Fri: 8:30am–5:30pm • Sat: 9am–1pm • Sun: Closed</div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage(){
  return (
    <>
      <Carousel />
      <ServicesSection />
      <AboutSection />
    </>
  );
}