import React, { useState, useRef, useLayoutEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import HeroSectionWithForm from '../../components/HeroSectionWithForm';

export default function Partner() {
  const { t } = useTranslation();
  const [openIdx, setOpenIdx] = useState(null);
  const descRefs = useRef([]);
  const [heights, setHeights] = useState([]);
  const accordion = useMemo(() => [
    {
      title: t('partner.accordion.0.title'),
      desc: t('partner.accordion.0.desc'),
    },
    {
      title: t('partner.accordion.1.title'),
      desc: t('partner.accordion.1.desc'),
    },
    {
      title: t('partner.accordion.2.title'),
      desc: t('partner.accordion.2.desc'),
    },
  ], [t]);

  useLayoutEffect(() => {
    setHeights(descRefs.current.map(ref => ref ? ref.scrollHeight : 0));
  }, [accordion]);

  const handleAccordion = idx => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <>
      <HeroSectionWithForm
        backgroundGradient="var(--hero-gradient-5)"
        leftContent={
          <>
            <div className="partner-badge">{t('partner.badge')}</div>
            <h1 className="partner-title">{t('partner.title')}</h1>
            <p className="partner-desc">{t('partner.desc')}</p>
          </>
        }
        rightContent={
          <form className="partner-form-card">
            <div className="partner-form-row">
              <div>
                <label className="partner-form-label">{t('partner.firstName')}*</label>
                <input className="partner-form-input" type="text" placeholder={t('partner.firstNamePlaceholder')} required />
              </div>
              <div>
                <label className="partner-form-label">{t('partner.lastName')}*</label>
                <input className="partner-form-input" type="text" placeholder={t('partner.lastNamePlaceholder')} required />
              </div>
            </div>
            <div className="partner-form-row">
              <div>
                <label className="partner-form-label">{t('partner.email')}*</label>
                <input className="partner-form-input" type="email" placeholder={t('partner.emailPlaceholder')} required />
              </div>
              <div>
                <label className="partner-form-label">{t('partner.company')}*</label>
                <input className="partner-form-input" type="text" placeholder={t('partner.companyPlaceholder')} required />
              </div>
            </div>
            <div className="partner-form-row">
              <div>
                <label className="partner-form-label">{t('partner.country')}*</label>
                <select className="partner-form-select" required>
                  <option value="">{t('partner.countryPlaceholder')}</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="eg">Egypt</option>
                  <option value="ae">UAE</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="partner-form-label">{t('partner.help')}*</label>
                <select className="partner-form-select" required>
                  <option value="">{t('partner.helpPlaceholder')}</option>
                  <option value="demo">{t('partner.helpOptions.demo')}</option>
                  <option value="pricing">{t('partner.helpOptions.pricing')}</option>
                  <option value="integration">{t('partner.helpOptions.integration')}</option>
                  <option value="other">{t('partner.helpOptions.other')}</option>
                </select>
              </div>
            </div>
            <div className="partner-form-row">
              <div style={{ width: '100%' }}>
                <div className="partner-form-privacy">{t('partner.privacy')}</div>
                <label className="partner-form-checkbox">
                  <input type="checkbox" /> {t('partner.consent')}
                </label>
              </div>
            </div>
            <div className="partner-form-row" style={{ justifyContent: 'flex-end' }}>
              <button className="partner-form-submit" type="submit">{t('partner.submit')}</button>
            </div>
          </form>
        }
        heroClassName="partner-hero-section"
      />
      <section className="partner-why-section">
        <div className="partner-why-left">
          <h2>{t('partner.whyTitle')}</h2>
          <p>{t('partner.whyDesc')}</p>
        </div>
        <div className="partner-why-right">
          <div className="partner-accordion">
            {accordion.map((item, idx) => (
              <div className="partner-accordion-item" key={idx}>
                <div
                  className="partner-accordion-title"
                  onClick={() => handleAccordion(idx)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={openIdx === idx}
                >
                  <span>{item.title}</span>
                  <span className="partner-accordion-toggle">{openIdx === idx ? '\u25B2' : '\u25BC'}</span>
                </div>
                <div
                  className="partner-accordion-desc-wrap"
                  style={{
                    maxHeight: openIdx === idx ? (heights[idx] ? heights[idx] + 24 : 200) : 0,
                    opacity: openIdx === idx ? 1 : 0,
                    pointerEvents: openIdx === idx ? 'auto' : 'none',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s cubic-bezier(.4,0,.2,1), opacity 0.4s cubic-bezier(.4,0,.2,1)',
                  }}
                >
                  <div
                    className="partner-accordion-desc"
                    ref={el => (descRefs.current[idx] = el)}
                    aria-hidden={openIdx !== idx}
                    style={{
                      opacity: openIdx === idx ? 1 : 0,
                      transition: 'opacity 0.4s cubic-bezier(.4,0,.2,1)',
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}