import React, { useState } from "react";
import ContactModal from "./ContactModal";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function FooterCTA() {
    const [modalOpen, setModalOpen] = useState(false);
    const { t } = useTranslation();
    return (
        <div>
            <div className="footer-cta-section">
                <h2 className="footer-cta-title">{t('footerCTA.title')}</h2>
                <p className="footer-cta-desc">
                    {t('footerCTA.desc')}
                </p>
                <button className="footer-cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    {t('footerCTA.talkToExpert')} <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                </button>
            </div>
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    )
}

export default FooterCTA;