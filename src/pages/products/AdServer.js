import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../../components/HeroSection';
import { FaArrowRight } from "react-icons/fa";
import ContactModal from "../../components/ContactModal";
import TrustedBy from "../../components/TrustedBy"
import FeatureHighlight from '../../components/FeatureHighlight';
import SuccessStoriesSlider from '../../components/SuccessStoriesSlider';
import Features from '../../components/MoreFeatures';

function AdServer() {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const stories = [
        {
            quote: t('adServer.stories.0.quote'),
            author: t('adServer.stories.0.author'),
            logo: <img src="/media/logos/ifood.svg" alt="iFood" />,
            stats: [
                { value: t('adServer.stories.0.stat1'), label: t('adServer.stories.0.stat1Label') },
                { value: t('adServer.stories.0.stat2'), label: t('adServer.stories.0.stat2Label') }
            ],
            buttons: [
                { label: t('adServer.stories.0.button1'), href: '/case-study/ifood', variant: 'primary' },
                { label: t('adServer.stories.0.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: t('adServer.stories.1.quote'),
            author: t('adServer.stories.1.author'),
            logo: <img src="/media/logos/mc.avif" alt="Mercado Libre" />,
            stats: [
                { value: t('adServer.stories.1.stat1'), label: t('adServer.stories.1.stat1Label') },
                { value: t('adServer.stories.1.stat2'), label: t('adServer.stories.1.stat2Label') }
            ],
            buttons: [
                { label: t('adServer.stories.1.button1'), href: '/case-study/mercadolibre', variant: 'primary' },
                { label: t('adServer.stories.1.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: t('adServer.stories.2.quote'),
            author: t('adServer.stories.2.author'),
            logo: <img src="/media/logos/edmunds.svg" alt="Noon" />,
            stats: [
                { value: t('adServer.stories.2.stat1'), label: t('adServer.stories.2.stat1Label') },
                { value: t('adServer.stories.2.stat2'), label: t('adServer.stories.2.stat2Label') }
            ],
            buttons: [
                { label: t('adServer.stories.2.button1'), href: '/case-study/noon', variant: 'primary' },
                { label: t('adServer.stories.2.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        }
    ];

    return (
        <div>
            <HeroSection
                backgroundGradient="var(--hero-gradient-2)"
                leftContent={
                    <>
                        <h1>{t('adServer.heroTitle')}</h1>
                        <p>{t('adServer.heroDesc')}</p>
                        <div className="hero-buttons">
                            <button className="footer-cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                {t('adServer.talkToExpert')} <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                            </button>
                            <button className="secondary-btn">{t('adServer.readDocs')}</button>
                        </div>
                    </>
                }
                imageSrc="media/assets/adServer.webp"
                imageAlt="Dashboard Mockup"
                bubbles={{}}
            />
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

            <TrustedBy />

            <div className='center'>
                <h1>{t('adServer.centerTitle')}</h1>
                <p>{t('adServer.centerDesc')}</p>
            </div>

            <FeatureHighlight
                label={t('adServer.feature1.label')}
                title={t('adServer.feature1.title')}
                description={t('adServer.feature1.desc')}
                buttonText={t('adServer.talkToExpert')}
                onButtonClick={() => window.open('https://Raneen One.com/contact', '_blank')}
                mainImage="/media/assets/smarterPersonalization.webp"
                imagePosition="left"
                backgroundGradientVar="--hero-gradient-2"
                background='yes'
            />
            <FeatureHighlight
                label={t('adServer.feature2.label')}
                title={t('adServer.feature2.title')}
                description={t('adServer.feature2.desc')}
                buttonText={t('adServer.talkToExpert')}
                onButtonClick={() => window.open('https://Raneen One.com/contact', '_blank')}
                mainImage="/media/assets/advertiserRetention.avif"
                imagePosition="right"
                backgroundGradientVar="--hero-gradient-2"
                background='yes'
            />
            <FeatureHighlight
                label={t('adServer.feature3.label')}
                title={t('adServer.feature3.title')}
                description={t('adServer.feature3.desc')}
                buttonText={t('adServer.talkToExpert')}
                onButtonClick={() => window.open('https://Raneen One.com/contact', '_blank')}
                mainImage="/media/assets/operationalEfficiency.webp"
                imagePosition="left"
                backgroundGradientVar="--hero-gradient-2"
                background='yes'
            />

            <SuccessStoriesSlider stories={stories} />

            <Features />
        </div>
    );
};

export default AdServer;
