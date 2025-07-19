import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Style.css";
import "./ContactModal.css";
import { useTranslation } from 'react-i18next';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, scale: 0.96, y: -40, transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] } }
};

const ContactModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="contact-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="contact-modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={e => e.stopPropagation()}
          >
            <button className="contact-modal-close" onClick={onClose}>&times;</button>
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
              <div className="contact-modal-row-full">
                <input placeholder={t('contactModal.company')} className="contact-modal-input" />
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal; 