import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import { FaArrowRight } from "react-icons/fa";
import ContactModal from "../../components/ContactModal";
import TrustedBy from "../../components/TrustedBy"
import FeatureHighlight from '../../components/FeatureHighlight';

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

            <TrustedBy />

            <div className='center'>
                <h1>Ad serving that creates a stand-out retail media network that both advertisers and shoppers will love</h1>
                <p>Launch unique, high-performing ads that integrate seamlessly with your organic content, driving positive advertiser growth and end-user experience.</p>
            </div>

            <FeatureHighlight
                label="SMARTER PERSONALIZATION"
                title="Activate and optimize first-party data across channels"
                description="Raneen One gives retailers tools to define and activate high-performing audience segments across channels instantly—without needing a CDP or data science team."
                buttonText="Talk to an expert"
                onButtonClick={() => window.open('https://kevel.com/contact', '_blank')}
                mainImage="/media/assets/smarterPersonalization.webp"
                imagePosition="left"
                background='yes'
            />
            <FeatureHighlight
                label="HIGHER ADVERTISER RETENTION"
                title="Keep brand partners coming back with measurable results"
                description="With customizable self-serve tools and powerful targeting, retailers can offer a better experience for brands and reduce churn."
                buttonText="Talk to an expert"
                onButtonClick={() => window.open('https://kevel.com/contact', '_blank')}
                mainImage="/media/assets/advertiserRetention.avif"
                imagePosition="right"
                background='yes'
            />
            <FeatureHighlight
                label="GREATER OPERATIONAL EFFICIENCY"
                title="Reduce manual processes and team bandwidth"
                description="Raneen One consolidates campaign management, reporting, audience activation, and more—saving time and freeing up teams to focus on growth, not maintenance."
                buttonText="Talk to an expert"
                onButtonClick={() => window.open('https://kevel.com/contact', '_blank')}
                mainImage="/media/assets/operationalEfficiency.webp"
                imagePosition="left"
                background='yes'
            />
        </div>
    );
};

export default AdServer;
