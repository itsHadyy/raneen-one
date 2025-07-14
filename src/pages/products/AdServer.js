import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import { FaArrowRight } from "react-icons/fa";
import ContactModal from "../../components/ContactModal";

function AdServer() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
            <HeroSection
                backgroundGradient="var(--hero-gradient-2)"
                leftContent={
                    <>
                        <h1>Flexible API Ad Serving powered by Advanced ML and AI</h1>
                        <p>The Raneen One Ad Server is the cornerstone of the Retail Media Cloud, giving you total control over your ad forecasting, management, decisioning, and reporting, for an ad performance experience like never before.</p>
                        <div className="hero-buttons">
                            <button className="footer-cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                Talk to an expert <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                            </button>
                            <button className="secondary-btn">Read the docs</button>
                        </div>
                    </>
                }
                imageSrc="media/assets/adServer.webp"
                imageAlt="Dashboard Mockup"
                bubbles={{
                }}
            />

            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default AdServer;
