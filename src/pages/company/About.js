import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiFeather, FiStar, FiSmile, FiAward, FiHeart, FiBookOpen, FiHelpCircle } from 'react-icons/fi';

const PRESENCE_LOCATIONS = [
  { key: 'california', label: 'California', img: '/media/assets/company/california.webp' },
  { key: 'copenhagen', label: 'Copenhagen', img: '/media/assets/company/copenhagen.webp' },
  { key: 'durham', label: 'Durham', img: '/media/assets/company/durham.webp' },
  { key: 'london', label: 'London', img: '/media/assets/company/london.webp' },
  { key: 'ny', label: 'New York', img: '/media/assets/company/ny.webp' },
  { key: 'porto', label: 'Porto', img: '/media/assets/company/porto.webp' },
  { key: 'singapore', label: 'Singapore', img: '/media/assets/company/singapore.webp' },
  { key: 'texas', label: 'Texas', img: '/media/assets/company/texas.png' },
];

export default function About() {
  const { t } = useTranslation();
  return (
    <main className="about-main">
      <section className="about-hero">
        <div className="about-badge">{t('about.ourMission')}</div>
        <h1 className="about-title">{t('about.heroTitle')}</h1>
        <p className="about-desc">{t('about.heroDesc')}</p>
      </section>

      <section className="about-legacy">
        <div className="about-legacy-content">
          <div className="about-badge">{t('about.ourStory')}</div>
          <h2 className="about-legacy-title">{t('about.legacyTitle')}</h2>
          <p className="about-legacy-desc">{t('about.legacyDesc')}</p>
        </div>
        <div className="about-legacy-img-wrap">
          <img
            className="about-legacy-img"
            src="/media/assets/company/about.avif"
            alt={t('about.teamPhotoAlt')}
          />
        </div>
      </section>

      <section className="about-values-section">
        <div className="about-values-badge">{t('about.valuesBadge')}</div>
        <h2 className="about-values-title">{t('about.valuesTitle')}</h2>
        <div className="about-values-rows">
          <div className="about-values-row">
            <div className="about-value-card">
              <FiFeather className="about-value-icon" />
              <div className="about-value-title">{t('about.values.0.title')}</div>
              <div className="about-value-desc">{t('about.values.0.desc')}</div>
            </div>
            <div className="about-value-card">
              <FiStar className="about-value-icon" />
              <div className="about-value-title">{t('about.values.1.title')}</div>
              <div className="about-value-desc">{t('about.values.1.desc')}</div>
            </div>
            <div className="about-value-card">
              <FiSmile className="about-value-icon" />
              <div className="about-value-title">{t('about.values.2.title')}</div>
              <div className="about-value-desc">{t('about.values.2.desc')}</div>
            </div>
          </div>
          <div className="about-values-row">
            <div className="about-value-card">
              <FiAward className="about-value-icon" />
              <div className="about-value-title">{t('about.values.3.title')}</div>
              <div className="about-value-desc">{t('about.values.3.desc')}</div>
            </div>
            <div className="about-value-card">
              <FiHeart className="about-value-icon" />
              <div className="about-value-title">{t('about.values.4.title')}</div>
              <div className="about-value-desc">{t('about.values.4.desc')}</div>
            </div>
            <div className="about-value-card">
              <FiHelpCircle className="about-value-icon" />
              <div className="about-value-title">{t('about.values.5.title')}</div>
              <div className="about-value-desc">{t('about.values.5.desc')}</div>
            </div>
            <div className="about-value-card">
              <FiBookOpen className="about-value-icon" />
              <div className="about-value-title">{t('about.values.6.title')}</div>
              <div className="about-value-desc">{t('about.values.6.desc')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-presence-section">
        <h2 className="about-presence-title">{t('about.presenceTitle')}</h2>
        <div className="about-presence-desc">{t('about.presenceDesc')}</div>
        <div className="about-presence-grid">
          {PRESENCE_LOCATIONS.map(loc => (
            <div className="about-presence-card" key={loc.key}>
              <img className="about-presence-img" src={loc.img} alt={t(`about.presence.${loc.key}`, { defaultValue: loc.label })} />
              <div className="about-presence-label">{t(`about.presence.${loc.key}`, { defaultValue: loc.label })}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}