import React from "react";
import "../Style.css";
import "./ContactModal.css";
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <div className="contact-form-card">
      <h2 className="contact-modal-title">{t('contactModal.title')}</h2>
      <p className="contact-modal-desc">{t('contactModal.desc')}</p>
      <form>
        <div className="contact-modal-row">
          <input placeholder={t('contactModal.firstName')} className="contact-modal-input" />
          <input placeholder={t('contactModal.lastName')} className="contact-modal-input" />
        </div>
        <div className="contact-modal-row">
          <input placeholder={t('contactModal.email')} className="contact-modal-input" />
          <input placeholder={t('contactModal.phone')} className="contact-modal-input" />
        </div>
        <div className="contact-modal-row">
          <input placeholder={t('contactModal.company')} className="contact-modal-input contact-modal-row-full" />
        </div>
        <div className="contact-modal-row">
          <select className="contact-modal-input" defaultValue="">
            <option value="" disabled>{t('contactModal.selectIndustry')}</option>
            <option>{t('contactModal.industryRetail')}</option>
            <option>{t('contactModal.industryMarketplace')}</option>
            <option>{t('contactModal.industryDelivery')}</option>
            <option>{t('contactModal.industryFinance')}</option>
            <option>{t('contactModal.industryOther')}</option>
          </select>
          <select className="contact-modal-input" defaultValue={t('contactModal.countryUnitedStates')}>
            <option>{t('contactModal.countryUnitedStates')}</option>
            <option>{t('contactModal.countryUnitedKingdom')}</option>
            <option>{t('contactModal.countryCanada')}</option>
            <option>{t('contactModal.countryOther')}</option>
          </select>
        </div>
        <div className="contact-modal-row">
          <select className="contact-modal-input" defaultValue="">
            <option value="" disabled>{t('contactModal.hasAdPlatform')}</option>
            <option>{t('contactModal.yes')}</option>
            <option>{t('contactModal.no')}</option>
          </select>
          <select className="contact-modal-input" defaultValue="">
            <option value="" disabled>{t('contactModal.describeYou')}</option>
            <option>{t('contactModal.brand')}</option>
            <option>{t('contactModal.agency')}</option>
            <option>{t('contactModal.retailer')}</option>
            <option>{t('contactModal.other')}</option>
          </select>
        </div>
        <div className="contact-modal-row-full">
          <textarea placeholder={t('contactModal.anythingElse')} className="contact-modal-input" rows={3} />
        </div>
        <div className="contact-modal-row-full" style={{marginBottom:12}}>
          <label className="contact-modal-checkbox">
            <input type="checkbox" />
            {t('contactModal.consent')}
          </label>
        </div>
        <button type="submit" className="contact-modal-submit">{t('contactModal.getStarted')}</button>
      </form>
    </div>
  );
};

export default ContactForm; 