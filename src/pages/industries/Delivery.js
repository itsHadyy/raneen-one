import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import { FaArrowRight } from "react-icons/fa";
import ContactModal from "../../components/ContactModal";
import FeatureHighlight02 from '../../components/FeatureHighlight02';
import SuccessStoriesSlider from '../../components/SuccessStoriesSlider';



function Delivery() {
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
                backgroundGradient="var(--hero-gradient-5)"
                leftContent={
                    <>
                        <h1>Report your ad campaigns your way</h1>
                        <p>Raneen One makes sure you get the information you (and your advertisers) need.</p>
                        <div className="hero-buttons">
                            <button className="footer-cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                Talk to an expert <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                            </button>
                        </div>
                    </>
                }
                imageSrc="media/assets/industries/delivery.webp"
                imageAlt="Dashboard Mockup"
                bubbles={{
                }}
            />
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            <div className='center'>
                <h1>What Marketplaces Need To Win</h1>
                <p>Marketplaces like yours require an ad platform that offers flexibility, transparency, and speed. Our API-first Retail Media Cloud® provides this and more.</p>
            </div>

            <div className="feature-cards-section" style={{
                display: 'flex',
                gap: '32px',
                justifyContent: 'center',
                margin: '48px 0 56px 0',
                flexWrap: 'wrap',
            }}>
                {/* Card 1 */}
                <div className="feature-card" style={{
                    background: '#f5f9fc',
                    borderRadius: '16px',
                    padding: '32px 28px 28px 28px',
                    minWidth: '320px',
                    maxWidth: '400px',
                    flex: '1 1 320px',
                    boxShadow: '0 2px 8px 0 rgba(16,30,54,0.03)',
                    border: '1px solid #e3eaf3',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}>
                    <span style={{ marginBottom: 16 }}>
                        {/* Shield Icon */}
                        <svg width="32" height="32" fill="none" stroke="#1a2a3a" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z" /><path d="M12 3v18" /></svg>
                    </span>
                    <h3 style={{ fontWeight: 700, fontSize: '1.2rem', margin: 0, marginBottom: 12 }}>Security</h3>
                    <p style={{ color: '#5a6a7a', fontSize: '1rem', margin: 0 }}>Eliminate on-site JavaScript ad tags that slow load times.</p>
                </div>
                {/* Card 2 */}
                <div className="feature-card" style={{
                    background: '#f5f9fc',
                    borderRadius: '16px',
                    padding: '32px 28px 28px 28px',
                    minWidth: '320px',
                    maxWidth: '400px',
                    flex: '1 1 320px',
                    boxShadow: '0 2px 8px 0 rgba(16,30,54,0.03)',
                    border: '1px solid #e3eaf3',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}>
                    <span style={{ marginBottom: 16 }}>
                        {/* Smile Icon */}
                        <svg width="32" height="32" fill="none" stroke="#1a2a3a" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 15s1.5 2 4 2 4-2 4-2" /><path d="M9 9h.01" /><path d="M15 9h.01" /></svg>
                    </span>
                    <h3 style={{ fontWeight: 700, fontSize: '1.2rem', margin: 0, marginBottom: 12 }}>Enhanced user experience</h3>
                    <p style={{ color: '#5a6a7a', fontSize: '1rem', margin: 0 }}>Inserted ads use the same CSS and layout as your organic content, creating a seamless user experience.</p>
                </div>
                {/* Card 3 */}
                <div className="feature-card" style={{
                    background: '#f5f9fc',
                    borderRadius: '16px',
                    padding: '32px 28px 28px 28px',
                    minWidth: '320px',
                    maxWidth: '400px',
                    flex: '1 1 320px',
                    boxShadow: '0 2px 8px 0 rgba(16,30,54,0.03)',
                    border: '1px solid #e3eaf3',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}>
                    <span style={{ marginBottom: 16 }}>
                        {/* Globe Icon */}
                        <svg width="32" height="32" fill="none" stroke="#1a2a3a" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 0 20" /><path d="M12 2a15.3 15.3 0 0 0 0 20" /></svg>
                    </span>
                    <h3 style={{ fontWeight: 700, fontSize: '1.2rem', margin: 0, marginBottom: 12 }}>Improved site performance</h3>
                    <p style={{ color: '#5a6a7a', fontSize: '1rem', margin: 0 }}>Tougher for ad blockers to identify and block your ads, enabling you to monetize 30%-40% more users.</p>
                </div>
            </div>

            {/* Gradient Two-Column Section */}
            <section
                className="delivery-gradient-section"
                style={{
                    background: 'var(--hero-gradient-5)',
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
                            Offset low margins with a<br />high-margin ad platform
                        </h2>
                        <p style={{ fontSize: '1.18rem', color: '#e0e6ef', fontWeight: 400, lineHeight: 1.6 }}>
                            Delivery apps can have low margins, so the delivery giants like DoorDash and Instacart monetize with custom ad platforms. Raneen One can help you build what they built in a fraction of the time and cost without sacrificing security or user experience.
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

export default Delivery;
