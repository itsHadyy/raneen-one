import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection';
import { FaArrowRight } from "react-icons/fa";
import ContactModal from "../../components/ContactModal";
import FeatureHighlight from '../../components/FeatureHighlight';
import FeatureHighlight02 from '../../components/FeatureHighlight02';
import SuccessStoriesSlider from '../../components/SuccessStoriesSlider';
import { useTranslation } from 'react-i18next';

function Financial() {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);

    const stories = [
        {
            quote: t('financial.stories.0.quote'),
            author: t('financial.stories.0.author'),
            logo: <img src="/media/logos/ifood.svg" alt="iFood" />,
            stats: [
                { value: '20x', label: t('financial.stories.0.stat1') },
                { value: '1900%', label: t('financial.stories.0.stat2') }
            ],
            buttons: [
                { label: t('financial.stories.0.button1'), href: '/case-study/ifood', variant: 'primary' },
                { label: t('financial.stories.0.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: t('financial.stories.1.quote'),
            author: t('financial.stories.1.author'),
            logo: <img src="/media/logos/mc.avif" alt="Mercado Libre" />,
            stats: [
                { value: '15x', label: t('financial.stories.1.stat1') },
                { value: '120%', label: t('financial.stories.1.stat2') }
            ],
            buttons: [
                { label: t('financial.stories.1.button1'), href: '/case-study/mercadolibre', variant: 'primary' },
                { label: t('financial.stories.1.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: t('financial.stories.2.quote'),
            author: t('financial.stories.2.author'),
            logo: <img src="/media/logos/edmunds.svg" alt="Noon" />,
            stats: [
                { value: '98%', label: t('financial.stories.2.stat1') },
                { value: '4.8/5', label: t('financial.stories.2.stat2') }
            ],
            buttons: [
                { label: t('financial.stories.2.button1'), href: '/case-study/noon', variant: 'primary' },
                { label: t('financial.stories.2.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        }
    ];

    return (
        <div>
            <HeroSection
                backgroundGradient="var(--hero-gradient-6)"
                leftContent={
                    <>
                        <h1>{t('financial.heroTitle')}</h1>
                        <p>{t('financial.heroDesc')}</p>
                        <div className="hero-buttons">
                            <button className="footer-cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                {t('financial.talkToExpert')} <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                            </button>
                        </div>
                    </>
                }
                imageSrc="media/assets/industries/financial.webp"
                imageAlt="Dashboard Mockup"
                bubbles={{}}
            />
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

            <div className='center'>
                <h1>{t('financial.centerTitle')}</h1>
                <p>{t('financial.centerDesc')}</p>
            </div>

            <FeatureHighlight
                label={t('financial.feature1.label')}
                title={t('financial.feature1.title')}
                description={t('financial.feature1.desc')}
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
                            {t('financial.gradientTitle')}
                        </h2>
                        <p style={{ fontSize: '1.18rem', color: '#e0e6ef', fontWeight: 400, lineHeight: 1.6 }}>
                            {t('financial.gradientDesc')}
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
                            alt={t('financial.gradientImgAlt')}
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

export default Financial;
