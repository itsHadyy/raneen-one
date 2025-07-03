import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1>The End to End Retail Media Suite That Gets Results</h1>
            <p>Join the leading companies that use Raneen One to power their retail media network and earn more revenue than their competition with custom ad formats, unique data targeting, and AI campaign management.</p>
            <div className="hero-buttons">
              <button className="cta-btn">Start with Raneen One</button>
              <button className="secondary-btn">Read the docs</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="dashboard-mockup">
              <div className="bubble top-left">Greater Operational Efficiency</div>
              <div className="bubble top-right">Smarter Personalization</div>
              <img src="https://dummyimage.com/600x300/cccccc/ffffff&text=Dashboard+Mockup" alt="Dashboard Mockup" />
              <div className="bubble bottom-right">Higher Advertiser Retention</div>
            </div>
          </div>
        </div>
      </div>
      <section className="trusted-by">
        <div className="container trusted-logos">
          <img src="https://dummyimage.com/120x40/ff6600/fff&text=Orange+Apron" alt="Orange Apron Media" />
          <img src="https://dummyimage.com/120x40/222/fff&text=PayPal" alt="PayPal" />
          <img src="https://dummyimage.com/120x40/ffe135/222&text=Dollar+General" alt="Dollar General" />
          <img src="https://dummyimage.com/120x40/ff69b4/fff&text=Lyft" alt="Lyft" />
          <img src="https://dummyimage.com/120x40/0077ff/fff&text=Chewy" alt="Chewy" />
          <img src="https://dummyimage.com/120x40/ff0033/fff&text=MC+Sonae" alt="MC Sonae" />
          <img src="https://dummyimage.com/120x40/008000/fff&text=El+Corte+Ingles" alt="El Corte Ingles" />
          <img src="https://dummyimage.com/120x40/ff0000/fff&text=iFood" alt="iFood" />
        </div>
      </section>
    </div>
  );
};

export default Home;
