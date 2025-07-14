import React from 'react';

/**
 * Props:
 * - label: string (e.g. 'SMARTER PERSONALIZATION')
 * - title: string (headline)
 * - description: string
 * - buttonText: string
 * - onButtonClick: function
 * - mainImage: string (path to main image)
 * - overlayImages: array of { src, alt, style } for floating overlays
 */
function FeatureHighlight({
  label,
  title,
  description,
  buttonText,
  onButtonClick,
  mainImage,
  imagePosition = "left",
}) {
  return (
    <div className={`feature-highlight-container ${imagePosition === "right" ? "reverse" : ""}`}>
      <div className="feature-highlight-card">
        <img src={mainImage} alt="Main visual" className="feature-highlight-main-img" />
      </div>
      <div className="feature-highlight-content">
        <div className="feature-highlight-label">{label}</div>
        <h2 className="feature-highlight-title">{title}</h2>
        <div className="feature-highlight-desc">{description}</div>
        {buttonText && (
          <button className="cta-btn" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default FeatureHighlight; 