import React from 'react';
import HeroSection from '../../components/HeroSection';

function AdServer() {
    return (
        <div>
            <HeroSection
                backgroundGradient="var(--hero-gradient-1)"
                leftContent={
                    <>
                        <h1>The End to End Retail Media Suite That Gets Results</h1>
                        <p>Join the leading companies that use Raneen One to power their retail media network...</p>
                        <div className="hero-buttons">
                            <button className="cta-btn">Start with Raneen One</button>
                            <button className="secondary-btn">Read the docs</button>
                        </div>
                    </>
                }
                imageSrc="media/dashboard.webp"
                imageAlt="Dashboard Mockup"
                bubbles={{
                    topLeft: 'Greater Operational Efficiency',
                    topRight: 'Smarter Personalization',
                    bottomRight: 'Higher Advertiser Retention'
                }}
            />
        </div>
    );
};

export default AdServer;
