import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ mode = 'spa' }) {
  const base = import.meta.env.BASE_URL;
  const location = mode === 'spa' ? useLocation() : null;
  const isActive = (path) => mode === 'spa' ? (location.pathname === path) : false;

  const NavLink = ({ to, children }) => {
    if (mode === 'spa') {
      return <Link className={isActive(to) ? 'active' : ''} to={to}>{children}</Link>;
    }
    return <a href={to}>{children}</a>;
  };

  return (
    <header>
      <div className="header-inner">
        <div className="brand">
          <div className="logo" aria-label="Southern Cross logo">SC</div>
          <div>
            <div style={{ fontWeight: 800 }}>Southern Cross</div>
            <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>Medical Clinic</div>
          </div>
        </div>
        <nav aria-label="Primary">
          <NavLink to={mode === 'spa' ? '/' : base}>Home</NavLink>
          <NavLink to={mode === 'spa' ? '/services' : base + 'services.html'}>Services</NavLink>
          <a href={mode === 'spa' ? '#doctors' : base + '#doctors'}>Doctors</a>
          <a href={mode === 'spa' ? '#fees' : base + '#fees'}>Fees</a>
          <a href={mode === 'spa' ? '#contact' : base + '#contact'}>Contact</a>
        </nav>
      </div>
    </header>
  );
}