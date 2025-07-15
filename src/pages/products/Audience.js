import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import { FaArrowRight } from "react-icons/fa";
import ContactModal from "../../components/ContactModal";
import TrustedBy from "../../components/TrustedBy"
import FeatureHighlight from '../../components/FeatureHighlight';
import SuccessStoriesSlider from '../../components/SuccessStoriesSlider';
import Features from '../../components/MoreFeatures';

function Audience() {
    const [modalOpen, setModalOpen] = useState(false);
    const stories = [
        {
            quote: 'LEROY MERLIN Portugal quickly launched personalization campaigns targeted with Kevel Audience segments to increase conversion rate by 16%.',
            author: '— Marketing Director, LEROY MERLIN Portugal',
            logo: <img src="/media/logos/leroy.svg" alt="Leroy" />,
            stats: [
                { value: '10x', label: 'Increase in conversion rate' },
                { value: '$1MM+', label: 'Revenue per Session (RPS)' }
            ],
            buttons: [
                { label: 'Full case study', href: '/case-study/ifood', variant: 'primary' },
                { label: 'See all', href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: 'Our partnership with Raneen One allowed us to launch new ad products in record time.',
            author: 'Sarah Lee, Product Manager, Mercado Libre',
            logo: <img src="/media/logos/mc.avif" alt="Mercado Libre" />,
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
            logo: <img src="/media/logos/edmunds.svg" alt="Noon" />,
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
                        <h1>Precision that scales, AI that outperforms</h1>
                        <p>Activate and optimize your first-party data across channels with the flexibility, control, efficiency and value of precise decisioning.</p>
                        <div className="hero-buttons">
                            <button className="footer-cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                Talk to an expert <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                            </button>
                            <button className="secondary-btn">Read the docs</button>
                        </div>
                    </>
                }
                imageSrc="media/assets/audience.avif"
                imageAlt="Dashboard Mockup"
                bubbles={{
                }}
            />
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

            <TrustedBy />

            <FeatureHighlight
                label="TAILORED TO YOUR BUSINESS LOGIC"
                title="Unlock the Power Of First-Party Data"
                description="Activate your loyalty, purchase and behavioral data through stronger targeting, better monetization and full control in a post-cookie world. Build segments based on your rules - no someone else’s templates to enable more relevant targeting, better control and personalization that fits your strategy."
                buttonText="Talk to an expert"
                onButtonClick={() => window.open('https://Raneen One.com/contact', '_blank')}
                mainImage="/media/assets/audience01.svg"
                imagePosition="left"
                background='yes'
                backgroundGradientVar="--hero-gradient-4"
            />
            <FeatureHighlight
                label="SMARTER PERSONALIZATION"
                title="Smarter, Faster Audience Activation and Optimization"
                description="First party data is a strategic advantage but it’s only powerful if its actionable. Kevel gives retailers tools to define and activate high-performing audience segments across channels instantly, without needing a CDP or Data science team. Quickly test and refine segments in real time targeting the right users at the right time to ensure higher ROAS and fewer wasted impressions on disengaged or already-converted shoppers."
                buttonText="Talk to an expert"
                onButtonClick={() => window.open('https://Raneen One.com/contact', '_blank')}
                mainImage="/media/assets/audience02.svg"
                imagePosition="right"
                background='yes'
                backgroundGradientVar="--hero-gradient-4"
            />

            <SuccessStoriesSlider stories={stories} />

            <Features />
        </div>
    );
};

export default Audience;
