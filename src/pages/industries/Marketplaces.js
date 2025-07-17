import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import { FaArrowRight } from "react-icons/fa";
import ContactModal from "../../components/ContactModal";
import FeatureHighlight from '../../components/FeatureHighlight';
import AdLifecycleDonut from '../../components/AdLifecycleDonut';
import FeatureHighlight02 from '../../components/FeatureHighlight02';
import SuccessStoriesSlider from '../../components/SuccessStoriesSlider';



function Marketplaces() {
    const [modalOpen, setModalOpen] = useState(false);

    const stories = [
        {
            quote: 'Raneen One has enabled us to rapidly scale, growing monthly iFood Delivery ad revenue by 20x in a single year.',
            author: 'Lucas Sampaio, Senior Business Intelligence Analyst, iFood',
            logo: <img src="/media/logos/ifood.svg" alt="iFood" />, // adjust filename as needed
            stats: [
                { value: '20x', label: 'Ad Revenue' },
                { value: '1900%', label: 'Growth' }
            ],
            buttons: [
                { label: 'Full case study', href: '/case-study/ifood', variant: 'primary' },
                { label: 'See all', href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: 'Our partnership with Raneen One allowed us to launch new ad products in record time.',
            author: 'Sarah Lee, Product Manager, Mercado Libre',
            logo: <img src="/media/logos/mc.avif" alt="Mercado Libre" />, // adjust filename as needed
            stats: [
                { value: '15x', label: 'Faster Launch' },
                { value: '120%', label: 'Revenue Uplift' }
            ],
            buttons: [
                { label: 'Full case study', href: '/case-study/mercadolibre', variant: 'primary' },
                { label: 'See all', href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: 'With Raneen One, we increased our ad fill rate and improved user experience across the board.',
            author: 'Ahmed Hassan, CTO, Noon',
            logo: <img src="/media/logos/edmunds.svg" alt="Noon" />, // adjust filename as needed
            stats: [
                { value: '98%', label: 'Fill Rate' },
                { value: '4.8/5', label: 'User Satisfaction' }
            ],
            buttons: [
                { label: 'Full case study', href: '/case-study/noon', variant: 'primary' },
                { label: 'See all', href: '/success-stories', variant: 'secondary' }
            ]
        }
    ];

    return (
        <div>
            <HeroSection
                backgroundGradient="var(--hero-gradient-4)"
                leftContent={
                    <>
                        <h1>Build Your Marketplace Ad Business</h1>
                        <p><b>Retail media is booming — especially for marketplaces.</b><br/>Raneen One gives you a way to run ads that match your brand and maintain full control without impacting your site’s performance – underpinned by highly scalable infrastructure.</p>
                        <div className="hero-buttons">
                            <button className="footer-cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                Talk to an expert <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                            </button>
                        </div>
                    </>
                }
                imageSrc="media/assets/industries/marketplaces.avif"
                imageAlt="Dashboard Mockup"
                bubbles={{
                }}
            />
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

            <div className='center'>
                <h1>What Marketplaces Need To Win</h1>
                <p>Marketplaces like yours require an ad platform that offers flexibility, transparency, and speed. Our API-first Retail Media Cloud® provides this and more.</p>
            </div>

            <FeatureHighlight
                label="SMARTER PERSONALIZATION"
                title="Sponsored Listings That Match Your User Experience"
                description="Unlike templated placements, Kevel lets you build ad units that blend seamlessly with your native search and browse experiences. These listings can be keyword-targeted, ML-ranked, and ROAS-optimized, giving you a performance engine sellers will invest in."
                mainImage="/media/assets/industries/marketplaces03.avif"
                imagePosition="left"
                backgroundGradientVar="--hero-gradient-4"
                background='yes'
            />
            <FeatureHighlight
                label="SMARTER PERSONALIZATION"
                title="Responsibly Activate Your 1P Data"
                description="Kevel Audience makes it easy to build privacy-safe, high-conversion audience segments using your own data—no cookies or third-party dependencies. These segments can be used onsite & offsite, with connections to platforms like Meta or Google, providing audience extension to maximize reach and campaign performance."
                mainImage="/media/assets/industries/marketplaces02.avif"
                imagePosition="right"
                backgroundGradientVar="--hero-gradient-4"
                background='yes'
            />
            <FeatureHighlight
                label="SMARTER PERSONALIZATION"
                title="Self-Serve, via API or white labeled UI"
                description="Empower your sellers with a clean, intuitive, fully branded UI to launch and manage campaigns. Backed by smart automation and Kevel's AI-driven optimization, it reduces operational lift while maximizing seller adoption."
                mainImage="/media/assets/industries/marketplaces03.avif"
                imagePosition="left"
                backgroundGradientVar="--hero-gradient-4"
                background='yes'
            />

            <FeatureHighlight02 />

            <SuccessStoriesSlider stories={stories} />
        </div>
    );
};

export default Marketplaces;
