import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../../components/HeroSection';
import { FaArrowRight } from "react-icons/fa";
import ContactModal from "../../components/ContactModal";
import TrustedBy from "../../components/TrustedBy"
import FeatureHighlight from '../../components/FeatureHighlight';
import SuccessStoriesSlider from '../../components/SuccessStoriesSlider';
import Features from '../../components/MoreFeatures';

function Audience() {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const stories = [
        {
            quote: t('audience.stories.0.quote'),
            author: t('audience.stories.0.author'),
            logo: <img src="/media/logos/leroy.svg" alt="Leroy" />,
            stats: [
                { value: t('audience.stories.0.stat1'), label: t('audience.stories.0.stat1Label') },
                { value: t('audience.stories.0.stat2'), label: t('audience.stories.0.stat2Label') }
            ],
            buttons: [
                { label: t('audience.stories.0.button1'), href: '/case-study/ifood', variant: 'primary' },
                { label: t('audience.stories.0.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: t('audience.stories.1.quote'),
            author: t('audience.stories.1.author'),
            logo: <img src="/media/logos/mc.avif" alt="Mercado Libre" />,
            stats: [
                { value: t('audience.stories.1.stat1'), label: t('audience.stories.1.stat1Label') },
                { value: t('audience.stories.1.stat2'), label: t('audience.stories.1.stat2Label') }
            ],
            buttons: [
                { label: t('audience.stories.1.button1'), href: '/case-study/mercadolibre', variant: 'primary' },
                { label: t('audience.stories.1.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: t('audience.stories.2.quote'),
            author: t('audience.stories.2.author'),
            logo: <img src="/media/logos/edmunds.svg" alt="Noon" />,
            stats: [
                { value: t('audience.stories.2.stat1'), label: t('audience.stories.2.stat1Label') },
                { value: t('audience.stories.2.stat2'), label: t('audience.stories.2.stat2Label') }
            ],
            buttons: [
                { label: t('audience.stories.2.button1'), href: '/case-study/noon', variant: 'primary' },
                { label: t('audience.stories.2.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        }
    ];

    return (
        <div>
            <HeroSection
                backgroundGradient="var(--hero-gradient-4)"
                leftContent={
                    <>
                        <h1>{t('audience.heroTitle')}</h1>
                        <p>{t('audience.heroDesc')}</p>
                        <div className="hero-buttons">
                            <button className="footer-cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                {t('audience.talkToExpert')} <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                            </button>
                            <button className="secondary-btn">{t('audience.readDocs')}</button>
                        </div>
                    </>
                }
                imageSrc="media/assets/audience.avif"
                imageAlt="Dashboard Mockup"
                bubbles={{}}
            />
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

            <TrustedBy />

            <FeatureHighlight
                label={t('audience.feature1.label')}
                title={t('audience.feature1.title')}
                description={t('audience.feature1.desc')}
                buttonText={t('audience.talkToExpert')}
                onButtonClick={() => window.open('https://Raneen One.com/contact', '_blank')}
                mainImage="/media/assets/audience01.svg"
                imagePosition="left"
                background='yes'
                backgroundGradientVar="--hero-gradient-4"
            />
            <FeatureHighlight
                label={t('audience.feature2.label')}
                title={t('audience.feature2.title')}
                description={t('audience.feature2.desc')}
                buttonText={t('audience.talkToExpert')}
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
