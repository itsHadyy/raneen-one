import React from "react";
import ContactForm from "../../components/ContactForm";
import { useTranslation } from 'react-i18next';
import "../../Style.css";

const clientLogos = [
    "orange apron", "PayPal", "Dollar General", "lyft", "chewy", "MC Sonae", "El Corte Inglés", "ifood"
];

export default function Contact() {
    const { t } = useTranslation();
    return (
        <div className="contact-hero-bg">
            <div className="contact-hero-animated-bg" />
            <div className="contact-hero-container contact-hero-content-on-top">
                {/* Left Hero Section */}
                <div className="contact-hero-left">
                    <h1 className="contact-hero-title">{t('contactModal.title')}</h1>
                    <p className="contact-hero-desc">
                        {t('contactModal.desc')}
                    </p>
                    <div className="contact-hero-logos">
                        {clientLogos.map((logo, i) => (
                            <div key={i} className="contact-hero-logo-item">{logo}</div>
                        ))}
                    </div>
                </div>
                {/* Right Form Section */}
                <div className="contact-hero-form-wrap">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}