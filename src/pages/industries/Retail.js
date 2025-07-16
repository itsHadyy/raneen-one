import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import { FaArrowRight } from "react-icons/fa";
import ContactModal from "../../components/ContactModal";
import FeatureHighlight from '../../components/FeatureHighlight';
import AdLifecycleDonut from '../../components/AdLifecycleDonut';

function Retail() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <HeroSection
                backgroundGradient="var(--hero-gradient-2)"
                leftContent={
                    <>
                        <h1>Upgrade your retail media network</h1>
                        <p>The Retail Media Cloud powers leading retail media networks, delivering high performance with relevant ad formats targeted using your own AI and machine learning segments.</p>
                        <div className="hero-buttons">
                            <button className="footer-cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                Talk to an expert <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                            </button>
                        </div>
                    </>
                }
                imageSrc="media/assets/industries/retail.avif"
                imageAlt="Dashboard Mockup"
                bubbles={{
                }}
            />
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

            <div className='center'>
                <h1>High-performing ads optimize GMV growth and relevancy</h1>
                <p>Drive incrementality, ROAS, and new-to-brand metrics with sponsored listings, native ads, and other unique ad formats that boost advertiser ROI and increase sales.</p>
            </div>

            <FeatureHighlight
                label="SMARTER PERSONALIZATION"
                title="Take control of your sponsored listing auctions, driving the high CPCs and value to advertisers."
                description="Set up auctions that work for your ad program, including different rate types and first or second-price auctions. Optimize the auctions for your desired performance, whether that’s clicks, impressions, or revenue."
                mainImage="/media/assets/industries/retail01.webp"
                imagePosition="left"
                backgroundGradientVar="--hero-gradient-2"
                background='yes'
            />
            <FeatureHighlight
                label="SMARTER PERSONALIZATION"
                title="Bring your own AI/ML targeting and relevancy models to drive ad and conversion performance."
                description="You know your customers best. Using your own first-party data, the Kevel Ad Server carefully selects which ad to serve that will lead to more product off your shelves."
                mainImage="/media/assets/industries/retail02.webp"
                imagePosition="right"
                backgroundGradientVar="--hero-gradient-2"
                background='yes'
            />
            <FeatureHighlight
                label="SMARTER PERSONALIZATION"
                title="Integrate ad serving seamlessly within your existing tech stack. "
                description="From campaign management with your own self-serve, to decisioning with your own ML modeling, to reporting with your own BI tools, we integrate with you, not the other way around."
                mainImage="/media/assets/industries/retail03.webp"
                imagePosition="left"
                backgroundGradientVar="--hero-gradient-2"
                background='yes'
            />

            <AdLifecycleDonut />
        </div>
    );
};

export default Retail;
