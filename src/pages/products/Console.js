import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import { FaArrowRight } from "react-icons/fa";
import ContactModal from "../../components/ContactModal";
import TrustedBy from "../../components/TrustedBy"
import FeatureHighlight from '../../components/FeatureHighlight';
import SuccessStoriesSlider from '../../components/SuccessStoriesSlider';
import Features from '../../components/MoreFeatures';

function Console() {
    const [modalOpen, setModalOpen] = useState(false);
    const stories = [
        {
            quote: 'We are excited to offer this solution in partnership with our brands and agencies and already have our first learnings from running campaigns with major brands.',
            author: 'Kristian Krohn Djurhuus, Head of Retail Media at Dagrofa',
            logo: <img src="/media/logos/dagrofa.svg" alt="Dagrofa" />, // adjust filename as needed
            stats: [
                { value: '+14%', label: 'Sales Uplift' },
                { value: '+58%', label: 'New to Brand Shoppers' }
            ],
            buttons: [
                { label: 'Full case study', href: '/case-study/ifood', variant: 'primary' },
                { label: 'See all', href: '/success-stories', variant: 'secondary' }
            ]
        },
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
                backgroundGradient="var(--hero-gradient-5)"
                leftContent={
                    <>
                        <h1>Build Smarter Campaigns with AI Powered Self-Serve</h1>
                        <p>Unify on-site and off-site campaigns while leveraging advanced tools designed to maximize ad performance and ROI.</p>
                        <div className="hero-buttons">
                            <button className="footer-cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                Talk to an expert <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                            </button>
                            <button className="secondary-btn">Read the docs</button>
                        </div>
                    </>
                }
                imageSrc="media/assets/console.avif"
                imageAlt="Dashboard Mockup"
                bubbles={{
                }}
            />
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

            <TrustedBy />

            <FeatureHighlight
                label="SMARTER PERSONALIZATION"
                title="Expand with Offsite"
                description="Take your retail media network beyond your owned properties, seamlessly managing campaigns across your shopper’s favorite platforms."
                buttonText="Talk to an expert"
                onButtonClick={() => window.open('https://Raneen One.com/contact', '_blank')}
                mainImage="/media/assets/console01.avif"
                imagePosition="left"
                backgroundGradientVar="--hero-gradient-5"
                background='yes'
            />
            <FeatureHighlight
                label="HIGHER ADVERTISER RETENTION"
                title="AI Driven Campaign Management"
                description="Supercharge your ad operations with an intuitive, AI-driven interface that optimizes workflows helping retailers manage inventory, data assets and campaign performance while delivering best-in-class ROAS. "
                buttonText="Talk to an expert"
                onButtonClick={() => window.open('https://Raneen One.com/contact', '_blank')}
                mainImage="/media/assets/console02.avif"
                imagePosition="right"
                backgroundGradientVar="--hero-gradient-5"
                background='yes'
            />
            <FeatureHighlight
                label="GREATER OPERATIONAL EFFICIENCY"
                title="Customized white-label branding"
                description="Make  Raneen One Console your own with comprehensive branding options that elevate your retail media network’s professional appeal. Incorporate your logo, theme and brand identity – ensuring a seamless advertiser experience."
                buttonText="Talk to an expert"
                onButtonClick={() => window.open('https://Raneen One.com/contact', '_blank')}
                mainImage="/media/assets/console03.avif"
                imagePosition="left"
                backgroundGradientVar="--hero-gradient-5"
                background='yes'
            />

            <SuccessStoriesSlider stories={stories} />

            <Features />
        </div>
    );
};

export default Console;
