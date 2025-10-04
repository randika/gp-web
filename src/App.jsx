import React from 'react';
import Carousel from './components/Carousel.jsx';

const services = [
	{
		title: 'General Consultations',
		img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
		alt: 'General consultation at a GP clinic',
		desc: 'Short & long consults, health checks, repeat prescriptions.',
	},
	{
		title: 'Children & Immunisations',
		img: 'https://images.unsplash.com/photo-1588776814635-2f93d3f3be3f?auto=format&fit=crop&w=1200&q=80',
		alt: 'Child receiving care and immunisations',
		desc: 'Routine childhood vaccines, growth checks, school health.',
	},
	{
		title: 'Chronic Disease Care',
		img: 'https://images.unsplash.com/photo-1588776814546-3f76ec9a2c07?auto=format&fit=crop&w=1200&q=80',
		alt: 'Doctor reviewing a chronic care plan',
		desc: 'Care plans & reviews for diabetes, asthma and heart health.',
	},
	{
		title: 'Women’s Health',
		img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
		alt: "Women's health consultation room",
		desc: 'Preventative care, screenings and ongoing support.',
	},
	{
		title: 'Skin Checks',
		img: 'https://images.unsplash.com/photo-1588776814635-2f93d3f3be3f?auto=format&fit=crop&w=1200&q=80',
		alt: 'Skin check with dermatoscope',
		desc: 'Skin cancer checks and minor procedures.',
	},
	{
		title: 'Travel Vaccines',
		img: 'https://images.unsplash.com/photo-1588776814546-3f76ec9a2c07?auto=format&fit=crop&w=1200&q=80',
		alt: 'Travel vaccines and advice',
		desc: 'Travel health advice and recommended vaccinations.',
	},
];

export default function App() {
	return (
		<>
			<Header />
			<div className="container">
				<Carousel />
				<Services />
				<About />
				<Footer />
			</div>
		</>
	);
}

function Header() {
	return (
		<header>
			<div className="header-inner">
				<div className="brand">
					<div className="logo" aria-label="Southern Cross logo">
						SC
					</div>
					<div>
						<div style={{ fontWeight: 800 }}>Southern Cross</div>
						<div
							style={{
								fontSize: 13,
								color: 'var(--muted)',
								marginTop: 2,
							}}
						>
							Medical Clinic
						</div>
					</div>
				</div>
				<nav aria-label="Primary">
					<a className="active" href="#home">
						Home
					</a>
					<a href="#services">Services</a>
					<a href="#doctors">Doctors</a>
					<a href="#fees">Fees</a>
					<a href="#contact">Contact</a>
				</nav>
			</div>
		</header>
	);
}

function Services() {
	return (
		<section id="services" className="card" style={{ marginTop: 22 }}>
			<h2 style={{ margin: '0 0 10px' }}>Our Services</h2>
			<div className="grid-3">
				{services.map((s) => (
					<div key={s.title} className="card service-card">
						<img
							loading="lazy"
							src={s.img}
							alt={s.alt}
							onError={(e) => {
								if (e.currentTarget.dataset.fallback) return;
								e.currentTarget.dataset.fallback = '1';
								e.currentTarget.src = '/placeholder.svg';
							}}
						/>
						<strong>{s.title}</strong>
						<p>{s.desc}</p>
					</div>
				))}
			</div>
			<div style={{ marginTop: 16 }}>
				<a href="#services-full" className="btn ghost">
					See all services
				</a>
			</div>
		</section>
	);
}

function About() {
	return (
		<section className="grid-2" style={{ marginTop: 22 }}>
			<div className="card">
				<h2 style={{ marginTop: 0 }}>About Our Clinic</h2>
				<p style={{ color: 'var(--muted)' }}>
					We are a community‑focused general practice delivering high‑quality
					primary care from experienced GPs, nurses and friendly reception staff.
				</p>
			</div>
			<div>
				<div className="card map" style={{ padding: 0 }}>
					<iframe
						title="Clinic location map"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						style={{ width: '100%', height: '100%', border: 0, borderRadius: 8 }}
						src="https://www.openstreetmap.org/export/embed.html?bbox=144.894%2C-37.804%2C144.904%2C-37.796&layer=mapnik&marker=-37.800%2C144.899"
					></iframe>
				</div>
				<div className="card" style={{ marginTop: 12 }}>
					<div style={{ fontWeight: 800, marginBottom: 8 }}>
						Opening Hours
					</div>
					<div
						style={{
							color: 'var(--muted)',
							fontSize: 14,
						}}
					>
						Mon–Fri: 8:30am–5:30pm • Sat: 9am–1pm • Sun: Closed
					</div>
				</div>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer>
			© 2025 Southern Cross Medical Clinic — 22 Hudson St, Footscray VIC 3011
			• Phone: (03) 9123 4567
		</footer>
	);
}
