import React from 'react';

const HeroSection = ({
  backgroundGradient,
  leftContent,
  imageSrc,
  imageAlt,
  bubbles = {},
}) => {
  const style = {
    '--hero-gradient': backgroundGradient,
  };

  return (
    <div className="hero-section" style={style}>
      <div className="hero-bg"></div>
      <div className="container hero-content">
        <div className="hero-text">
          {leftContent}
        </div>
        <div className="hero-image">
          <div className="dashboard-mockup">
            {bubbles.topLeft && <div className="bubble top-left">{bubbles.topLeft}</div>}
            {bubbles.topRight && <div className="bubble top-right">{bubbles.topRight}</div>}
            <img src={imageSrc} alt={imageAlt} />
            {bubbles.bottomRight && <div className="bubble bottom-right">{bubbles.bottomRight}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;