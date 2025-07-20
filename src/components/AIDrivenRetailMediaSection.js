import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaChartLine, FaMagic, FaUsersCog, FaCogs } from 'react-icons/fa';
import './AIDrivenRetailMediaSection.css';

const AIDrivenRetailMediaSection = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: <FaChartLine size={32} color="#e94f4f" />,
      title: t('aiRetailMedia.features.0.title'),
      desc: t('aiRetailMedia.features.0.desc')
    },
    {
      icon: <FaMagic size={32} color="#e94f4f" />,
      title: t('aiRetailMedia.features.1.title'),
      desc: t('aiRetailMedia.features.1.desc')
    },
    {
      icon: <FaUsersCog size={32} color="#00bfae" />,
      title: t('aiRetailMedia.features.2.title'),
      desc: t('aiRetailMedia.features.2.desc')
    },
    {
      icon: <FaCogs size={32} color="#2979ff" />,
      title: t('aiRetailMedia.features.3.title'),
      desc: t('aiRetailMedia.features.3.desc')
    },
  ];

  return (
    <section className="ai-retail-media-section">
      <div className="ai-retail-media-header">
        <h2>{t('aiRetailMedia.sectionTitle')}</h2>
        <p className="ai-retail-media-desc">
          {t('aiRetailMedia.sectionDesc')}
        </p>
      </div>
      <div className="ai-retail-media-cards">
        {features.map((f) => (
          <div
            key={f.title}
            className="ai-retail-media-card"
          >
            <div className="ai-retail-media-card-icon">{f.icon}</div>
            <div className="ai-retail-media-card-title">{f.title}</div>
            <div className="ai-retail-media-card-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIDrivenRetailMediaSection; 