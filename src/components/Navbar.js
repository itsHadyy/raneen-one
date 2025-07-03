import React from 'react';

const Navbar = () => (
  <header className="header">
    <div className="container nav-container">
      <div className="logo">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: 10}}>
          <rect width="40" height="40" rx="8" fill="#FF4D2D"/>
          <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold" dy=".3em">R</text>
        </svg>
        Raneen <span>One</span>
      </div>
      <nav className="nav">
        <a href="#">Products</a>
        <a href="#">Solutions</a>
        <a href="#">Developers</a>
        <a href="#">Customers</a>
        <a href="#">Resources</a>
        <a href="#">Company</a>
      </nav>
      <div className="header-actions">
        <button className="icon-btn" aria-label="Search">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        </button>
        <button className="icon-btn" aria-label="Account">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M16 20v-2a4 4 0 0 0-8 0v2"/></svg>
        </button>
        <button className="cta-btn">Talk to an expert</button>
      </div>
    </div>
  </header>
);

export default Navbar; 