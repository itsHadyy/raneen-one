import React from 'react';

const HeroSectionWithForm = ({
  backgroundGradient,
  leftContent,
  rightContent,
  heroClassName = '',
}) => {
  const style = {
    '--hero-gradient': backgroundGradient,
  };

  return (
    <div className={`hero-section ${heroClassName}`} style={style}>
      <div className="hero-bg"></div>
      <div className="container hero-content">
        <div className="hero-text">
          {leftContent}
        </div>
        <div className="hero-form">
          {rightContent}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionWithForm; 