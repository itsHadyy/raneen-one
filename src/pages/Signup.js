import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';

const countries = [
  'Egypt', 'Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 'Jordan', 'Morocco', 'Tunisia', 'Algeria', 'Other'
];

export default function Signup() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    country: '',
    email: '',
    org: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [btnHover, setBtnHover] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.phone || !form.country || !form.email || !form.org || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
  }

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(120deg, #654EFC 0%, #ff4d2d 100%)',
      paddingTop: '100px',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: 'radial-gradient(circle at 70% 40%, #ff4d2d55 0%, #654EFC33 100%)',
        filter: 'blur(60px)',
        opacity: 0.7,
        pointerEvents: 'none',
      }} />
      <div style={{
        maxWidth: 520,
        width: '100%',
        padding: 36,
        background: 'rgba(255,255,255,0.92)',
        borderRadius: 32,
        boxShadow: '0 8px 40px 0 rgba(31, 38, 135, 0.18), 0 1.5px 24px 0 #ff4d2d22, 0 0 32px 0 #fff4',
        backdropFilter: 'blur(18px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(18px) saturate(1.2)',
        border: '1.5px solid #fff',
        margin: '40px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 2,
        position: 'relative',
      }}>
        <div style={{ marginBottom: 18 }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#ff4d2d" fillOpacity="0.12" />
            <path d="M24 14a7 7 0 1 1 0 14a7 7 0 0 1 0-14zm0 16c-6.075 0-11 2.925-11 6.5V39h22v-2.5c0-3.575-4.925-6.5-11-6.5z" fill="#654EFC" />
          </svg>
        </div>
        <h2 style={{ fontWeight: 800, fontSize: '2.2rem', marginBottom: 24, color: 'var(--primary-color)', textAlign: 'center', letterSpacing: '-1px', textShadow: '0 2px 16px #fff8' }}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 22, width: '100%' }}>
          <div style={{
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
          }}>
            <div style={{ flex: '1 1 180px', minWidth: 0 }}>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                className="cta-btn"
                placeholder="First Name"
                style={{ background: '#f7f7fa', color: '#181f2a', border: '1.5px solid #e0e0e0', borderRadius: 16, padding: 16, fontSize: '1.08rem', marginBottom: 12, boxShadow: '0 1.5px 8px #654EFC11', width: '100%' }}
                required
              />
            </div>
            <div style={{ flex: '1 1 180px', minWidth: 0 }}>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                className="cta-btn"
                placeholder="Last Name"
                style={{ background: '#f7f7fa', color: '#181f2a', border: '1.5px solid #e0e0e0', borderRadius: 16, padding: 16, fontSize: '1.08rem', marginBottom: 12, boxShadow: '0 1.5px 8px #654EFC11', width: '100%' }}
                required
              />
            </div>
          </div>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="cta-btn"
            placeholder="Phone Number"
            style={{ background: '#f7f7fa', color: '#181f2a', border: '1.5px solid #e0e0e0', borderRadius: 16, padding: 16, fontSize: '1.08rem', marginBottom: 12, boxShadow: '0 1.5px 8px #654EFC11' }}
            required
          />
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="cta-btn"
            style={{
              background: '#f7f7fa',
              color: '#181f2a',
              border: '1.5px solid #e0e0e0',
              borderRadius: 16,
              padding: 16,
              fontSize: '1.08rem',
              marginBottom: 12,
              boxShadow: '0 1.5px 8px #654EFC11',
              appearance: 'none',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' fill=\'none\' stroke=\'%23654EFC\' stroke-width=\'2\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M6 9l6 6 6-6\'/%3E%3C/svg%3E")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
              backgroundSize: '18px 18px',
            }}
            required
          >
            <option value="">Select Country</option>
            {countries.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="cta-btn"
            placeholder="Email Address"
            style={{ background: '#f7f7fa', color: '#181f2a', border: '1.5px solid #e0e0e0', borderRadius: 16, padding: 16, fontSize: '1.08rem', marginBottom: 12, boxShadow: '0 1.5px 8px #654EFC11' }}
            required
          />
          <input
            type="text"
            name="org"
            value={form.org}
            onChange={handleChange}
            className="cta-btn"
            placeholder="Organization's Name"
            style={{ background: '#f7f7fa', color: '#181f2a', border: '1.5px solid #e0e0e0', borderRadius: 16, padding: 16, fontSize: '1.08rem', marginBottom: 12, boxShadow: '0 1.5px 8px #654EFC11' }}
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="cta-btn"
            placeholder="Password"
            style={{ background: '#f7f7fa', color: '#181f2a', border: '1.5px solid #e0e0e0', borderRadius: 16, padding: 16, fontSize: '1.08rem', marginBottom: 18, boxShadow: '0 1.5px 8px #654EFC11' }}
            required
          />
          {error && <div style={{ color: '#e94f4f', marginBottom: 12 }}>{error}</div>}
          <button
            type="submit"
            className="cta-btn"
            style={{
              width: '100%',
              marginTop: 8,
              background: btnHover ? 'linear-gradient(90deg, #ff4d2d 0%, #FA824D 100%)' : 'linear-gradient(90deg, #FA824D 0%, #ff4d2d 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.15rem',
              borderRadius: 16,
              boxShadow: '0 2px 12px #ff4d2d33',
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
          >
            Sign Up
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: 22 }}>
          <span style={{ color: '#444' }}>Already have an account? </span>
          <Link to="/login" style={{ color: 'var(--secondary-color)', fontWeight: 700 }}>Login</Link>
        </div>
      </div>
    </div>
  );
} 