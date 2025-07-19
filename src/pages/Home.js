import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiServer, FiUsers, FiGrid } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import AIDrivenRetailMediaSection from '../components/AIDrivenRetailMediaSection';
import ProjectShowcase from '../components/ProjectShowcase';
import KevelHeroSlider from '../components/KevelHeroSlider';
import TrustedBy from '../components/TrustedBy';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="hero-section">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1>{t('home.heroTitle')}</h1>
            <p>{t('home.heroDesc')}</p>
            <div className="hero-buttons">
              <button className="cta-btn">{t('home.startBtn')}</button>
              <button className="secondary-btn">{t('home.readDocsBtn')}</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="dashboard-mockup02">
              <div className="bubble top-left">{t('home.bubble1')}</div>
              <div className="bubble top-right">{t('home.bubble2')}</div>
              <img src="media/dashboard.webp" alt="Dashboard Mockup" />
              <div className="bubble bottom-right">{t('home.bubble3')}</div>
            </div>
          </div>
        </div>
      </div>

      <TrustedBy />

      <section className="retail-media-cloud-section">
        <div className="retail-media-cloud-header">
          <div className="retail-media-cloud-logo-title">
            <img src="https://uploads-ssl.webflow.com/5e6b6b2f6e7a6e2b7c7e7e7e/5e6b6b2f6e7a6e2b7c7e7e7e_Raneen One-logo.svg" alt="Retail Media Cloud Logo" className="retail-media-cloud-logo" />
            <span className="retail-media-cloud-title">retail media cloud<sup>®</sup></span>
          </div>
        </div>
        <div className="retail-media-cloud-cards">
          <Link className="retail-media-cloud-card" to="/adServer">
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
                <div className="retail-media-cloud-card-title">{t('home.audienceTitle')}</div>
                <div className="retail-media-cloud-card-subtitle">{t('home.audienceSubtitle')}</div>
              </div>
            </div>
            <div className="retail-media-cloud-card-desc">
              {t('home.audienceDesc')}
            </div>
          </Link>
          <Link className="retail-media-cloud-card" to="/console">
            <div className='retail-card-header'>
              <div className="retail-media-cloud-card-icon"><FiGrid size={36} /></div>
              <div className='retail-card-subheader'>
                <div className="retail-media-cloud-card-title">{t('home.consoleTitle')}</div>
                <div className="retail-media-cloud-card-subtitle">{t('home.consoleSubtitle')}</div>
              </div>
            </div>
            <div className="retail-media-cloud-card-desc">
              {t('home.consoleDesc')}
            </div>
          </Link>
        </div>
      </section>

      <AIDrivenRetailMediaSection />
      <ProjectShowcase />
      <KevelHeroSlider />

    </div>
  );
};

export default Home;
