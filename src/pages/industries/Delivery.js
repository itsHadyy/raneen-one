import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import { FaArrowRight } from "react-icons/fa";
import ContactModal from "../../components/ContactModal";
import FeatureHighlight02 from '../../components/FeatureHighlight02';
import SuccessStoriesSlider from '../../components/SuccessStoriesSlider';
import { useTranslation } from 'react-i18next';

function Delivery() {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);

    const stories = [
        {
            quote: t('delivery.stories.0.quote'),
            author: t('delivery.stories.0.author'),
            logo: <img src="/media/logos/ifood.svg" alt="iFood" />,  
            stats: [
                { value: '20x', label: t('delivery.stories.0.stat1') },
                { value: '1900%', label: t('delivery.stories.0.stat2') }
            ],
            buttons: [
                { label: t('delivery.stories.0.button1'), href: '/case-study/ifood', variant: 'primary' },
                { label: t('delivery.stories.0.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: t('delivery.stories.1.quote'),
            author: t('delivery.stories.1.author'),
            logo: <img src="/media/logos/mc.avif" alt="Mercado Libre" />,  
            stats: [
                { value: '15x', label: t('delivery.stories.1.stat1') },
                { value: '120%', label: t('delivery.stories.1.stat2') }
            ],
            buttons: [
                { label: t('delivery.stories.1.button1'), href: '/case-study/mercadolibre', variant: 'primary' },
                { label: t('delivery.stories.1.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: t('delivery.stories.2.quote'),
            author: t('delivery.stories.2.author'),
            logo: <img src="/media/logos/edmunds.svg" alt="Noon" />,  
            stats: [
                { value: '98%', label: t('delivery.stories.2.stat1') },
                { value: '4.8/5', label: t('delivery.stories.2.stat2') }
            ],
            buttons: [
                { label: t('delivery.stories.2.button1'), href: '/case-study/noon', variant: 'primary' },
                { label: t('delivery.stories.2.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        }
    ];

    return (
        <div>
            <HeroSection
                backgroundGradient="var(--hero-gradient-5)"
                leftContent={
                    <>
                        <h1>{t('delivery.heroTitle')}</h1>
                        <p>{t('delivery.heroDesc')}</p>
                        <div className="hero-buttons">
                            <button className="footer-cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                {t('delivery.talkToExpert')} <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                            </button>
                        </div>
                    </>
                }
                imageSrc="media/assets/industries/delivery.webp"
                imageAlt="Dashboard Mockup"
                bubbles={{}}
            />
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            <div className='center'>
                <h1>{t('delivery.centerTitle')}</h1>
                <p>{t('delivery.centerDesc')}</p>
            </div>

            {/* Feature Cards Section */}
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
                    <h3 style={{ fontWeight: 700, fontSize: '1.2rem', margin: 0, marginBottom: 12 }}>{t('delivery.card1.title')}</h3>
                    <p style={{ color: '#5a6a7a', fontSize: '1rem', margin: 0 }}>{t('delivery.card1.desc')}</p>
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
                    <h3 style={{ fontWeight: 700, fontSize: '1.2rem', margin: 0, marginBottom: 12 }}>{t('delivery.card2.title')}</h3>
                    <p style={{ color: '#5a6a7a', fontSize: '1rem', margin: 0 }}>{t('delivery.card2.desc')}</p>
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
                    <h3 style={{ fontWeight: 700, fontSize: '1.2rem', margin: 0, marginBottom: 12 }}>{t('delivery.card3.title')}</h3>
                    <p style={{ color: '#5a6a7a', fontSize: '1rem', margin: 0 }}>{t('delivery.card3.desc')}</p>
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
                            {t('delivery.gradientTitle')}
                        </h2>
                        <p style={{ fontSize: '1.18rem', color: '#e0e6ef', fontWeight: 400, lineHeight: 1.6 }}>
                            {t('delivery.gradientDesc')}
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
                            alt={t('delivery.gradientImgAlt')}
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
}

export default Delivery;
