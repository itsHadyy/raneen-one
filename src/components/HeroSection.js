import React from 'react';
import '../Style.css';

const HeroSection = ({
  gradient,
  title,
  subtitle,
  buttons = [],
  image,
  bubbles = []
}) => (
  <div className="hero-section" style={{ '--hero-gradient': gradient }}>
    <div className="hero-bg" />
    <div className="container hero-content">
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="hero-buttons">
          {buttons.map((btn, i) => (
            <button
              key={i}
              className={btn.type === 'primary' ? 'cta-btn' : 'secondary-btn'}
              onClick={btn.onClick}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
      <div className="hero-image">
        <div className="dashboard-mockup">
          {bubbles.map((bubble, i) => (
            <div key={i} className={`bubble ${bubble.position}`}>{bubble.text}</div>
          ))}
          {image}
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection; 