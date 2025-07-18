import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import { FaArrowRight } from "react-icons/fa";
import ContactModal from "../../components/ContactModal";
import FeatureHighlight from '../../components/FeatureHighlight';
import FeatureHighlight02 from '../../components/FeatureHighlight02';
import SuccessStoriesSlider from '../../components/SuccessStoriesSlider';



function Financial() {
    const [modalOpen, setModalOpen] = useState(false);

    const stories = [
        {
            quote: 'Raneen One has enabled us to rapidly scale, growing monthly iFood Delivery ad revenue by 20x in a single year.',
            author: 'Lucas Sampaio, Senior Business Intelligence Analyst, iFood',
            logo: <img src="/media/logos/ifood.svg" alt="iFood" />,
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
                backgroundGradient="var(--hero-gradient-6)"
                leftContent={
                    <>
                        <h1>Launch your privacy-first financial media network</h1>
                        <p>With world-class security and privacy features built-in by default, you can focus your efforts on scaling your ad business.</p>
                        <div className="hero-buttons">
                            <button className="footer-cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                Talk to an expert <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                            </button>
                        </div>
                    </>
                }
                imageSrc="media/assets/industries/financial.webp"
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
                title="Server-side ad serving for security, user experience, and improved site performance"
                description="Eliminate on-site JavaScript ad tags that slow load times. Ads are inserted directly into your content management system, with ads using the same CSS and layout as your organic content, creating a seamless user experience. Tougher for ad blockers to identify and block your ads, enabling you to monetize 30%-40% more users."
                mainImage="/media/assets/industries/financial02.webp"
                imagePosition="left"
                backgroundGradientVar="--hero-gradient-6"
                background='yes'
            />

            <section
                className="delivery-gradient-section"
                style={{
                    background: 'var(--hero-gradient-6)',
                    padding: '72px 0',
                    margin: '0 0 56px 0',
                }}
            >
                <div
                    className="delivery-gradient-inner"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '64px',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        flexWrap: 'wrap',
                        padding: '0 24px',
                    }}
                >
                    {/* Left: Text */}
                    <div
                        className="delivery-gradient-text"
                        style={{
                            flex: '1 1 420px',
                            color: '#fff',
                            minWidth: '320px',
                            maxWidth: '520px',
                        }}
                    >
                        <h2 style={{ fontSize: '2.6rem', fontWeight: 400, marginBottom: 24, lineHeight: 1.1 }}>
                            Don't leave a high-margin, multi-million dollar business on the table.
                        </h2>
                        <p style={{ fontSize: '1.18rem', color: '#e0e6ef', fontWeight: 400, lineHeight: 1.6 }}>
                            Supplement your core business and bear the competition with a high-margin ad platform. Do it with a partner that lets you keep your margin so you can grow even fasters, unshackled from revenue shares.
                        </p>
                    </div>
                    {/* Right: Image Card */}
                    <div
                        className="delivery-gradient-image-card"
                        style={{
                            background: '#fff',
                            borderRadius: '24px',
                            boxShadow: '0 4px 32px 0 rgba(16,30,54,0.10)',
                            padding: '18px',
                            minWidth: '340px',
                            maxWidth: '540px',
                            flex: '1 1 420px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src="/media/assets/industries/delivery02.webp"
                            alt="Monthly cost by impression volume graph"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '18px',
                                display: 'block',
                            }}
                        />
                    </div>
                </div>
            </section>

            <FeatureHighlight02 />

            <SuccessStoriesSlider stories={stories} />
        </div>
    );
};

export default Financial;
