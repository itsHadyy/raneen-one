import React from 'react';
import Navbar from '../components/Navbar';
import { FiServer, FiUsers, FiGrid } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AIDrivenRetailMediaSection from '../components/AIDrivenRetailMediaSection';
import BusinessSolutionsStaticSection from '../components/BusinessSolutionsStaticSection';

const Home = () => {
  return (
    <div>
      <Navbar />
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

      <section className="retail-media-cloud-section">
        <div className="retail-media-cloud-header">
          <div className="retail-media-cloud-logo-title">
            <img src="https://uploads-ssl.webflow.com/5e6b6b2f6e7a6e2b7c7e7e7e/5e6b6b2f6e7a6e2b7c7e7e7e_Raneen One-logo.svg" alt="Retail Media Cloud Logo" className="retail-media-cloud-logo" />
            <span className="retail-media-cloud-title">retail media cloud<sup>®</sup></span>
          </div>
        </div>
        <div className="retail-media-cloud-cards">
          <Link className="retail-media-cloud-card" to="/ad-server">
            <div className='retail-card-header'>
              <div className="retail-media-cloud-card-icon"><FiServer size={36} /></div>
              <div className='retail-card-subheader'>
                <div className="retail-media-cloud-card-title">Raneen One Ad Server</div>
                <div className="retail-media-cloud-card-subtitle">Flexible ad serving platform</div>
              </div>
            </div>
            <div className="retail-media-cloud-card-desc">
              Our suite of ad serving APIs powers ad decisioning, campaign management, reporting, and catalog ingestion with advanced ML and AI. Manage all of your owned inventory on-site, in-app, or in-store in one place.
            </div>
          </Link>
          <Link className="retail-media-cloud-card" to="/audience">
            <div className='retail-card-header'>
              <div className="retail-media-cloud-card-icon"><FiUsers size={36} /></div>
              <div className='retail-card-subheader'>
                <div className="retail-media-cloud-card-title">Raneen One Audience</div>
                <div className="retail-media-cloud-card-subtitle">AI audience segmentation tool</div>
              </div>
            </div>
            <div className="retail-media-cloud-card-desc">
              Our audience segmentation tool harnesses your first-party data into a single customer view for AI-powered segmentation, audience activation, and ad personalization. Push segments anywhere in your network, onsite or offsite.
            </div>
          </Link>
          <Link className="retail-media-cloud-card" to="/console">
            <div className='retail-card-header'>
              <div className="retail-media-cloud-card-icon"><FiGrid size={36} /></div>
              <div className='retail-card-subheader'>
                <div className="retail-media-cloud-card-title">Raneen One Console</div>
                <div className="retail-media-cloud-card-subtitle">Campaign management UI</div>
              </div>
            </div>
            <div className="retail-media-cloud-card-desc">
              Our out-of-the-box omnichannel campaign management user interface with AI automation features and self-service capabilities to help you scale your retail media network from day one.
            </div>
          </Link>
        </div>
      </section>

      <AIDrivenRetailMediaSection />
      <BusinessSolutionsStaticSection />

    </div>
  );
};

export default Home;
