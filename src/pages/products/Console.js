import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../../components/HeroSection';
import { FaArrowRight } from "react-icons/fa";
import ContactModal from "../../components/ContactModal";
import TrustedBy from "../../components/TrustedBy"
import FeatureHighlight from '../../components/FeatureHighlight';
import SuccessStoriesSlider from '../../components/SuccessStoriesSlider';
import Features from '../../components/MoreFeatures';

function Console() {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const stories = [
        {
            quote: t('console.stories.0.quote'),
            author: t('console.stories.0.author'),
            logo: <img src="/media/logos/dagrofa.svg" alt="Dagrofa" />, // keep logo
            stats: [
                { value: t('console.stories.0.stat1'), label: t('console.stories.0.stat1Label') },
                { value: t('console.stories.0.stat2'), label: t('console.stories.0.stat2Label') }
            ],
            buttons: [
                { label: t('console.stories.0.button1'), href: '/case-study/ifood', variant: 'primary' },
                { label: t('console.stories.0.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: t('console.stories.1.quote'),
            author: t('console.stories.1.author'),
            logo: <img src="/media/logos/ifood.svg" alt="iFood" />,
            stats: [
                { value: t('console.stories.1.stat1'), label: t('console.stories.1.stat1Label') },
                { value: t('console.stories.1.stat2'), label: t('console.stories.1.stat2Label') }
            ],
            buttons: [
                { label: t('console.stories.1.button1'), href: '/case-study/ifood', variant: 'primary' },
                { label: t('console.stories.1.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: t('console.stories.2.quote'),
            author: t('console.stories.2.author'),
            logo: <img src="/media/logos/mc.avif" alt="Mercado Libre" />,
            stats: [
                { value: t('console.stories.2.stat1'), label: t('console.stories.2.stat1Label') },
                { value: t('console.stories.2.stat2'), label: t('console.stories.2.stat2Label') }
            ],
            buttons: [
                { label: t('console.stories.2.button1'), href: '/case-study/mercadolibre', variant: 'primary' },
                { label: t('console.stories.2.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: t('console.stories.3.quote'),
            author: t('console.stories.3.author'),
            logo: <img src="/media/logos/edmunds.svg" alt="Noon" />,
            stats: [
                { value: t('console.stories.3.stat1'), label: t('console.stories.3.stat1Label') },
                { value: t('console.stories.3.stat2'), label: t('console.stories.3.stat2Label') }
            ],
            buttons: [
                { label: t('console.stories.3.button1'), href: '/case-study/noon', variant: 'primary' },
                { label: t('console.stories.3.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        }
    ];

    return (
        <div>
            <HeroSection
                backgroundGradient="var(--hero-gradient-5)"
                leftContent={
                    <>
                        <h1>{t('console.heroTitle')}</h1>
                        <p>{t('console.heroDesc')}</p>
                        <div className="hero-buttons">
                            <button className="footer-cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                {t('console.talkToExpert')} <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                            </button>
                            <button className="secondary-btn">{t('console.readDocs')}</button>
                        </div>
                    </>
                }
                imageSrc="media/assets/console.avif"
                imageAlt="Dashboard Mockup"
                bubbles={{}}
            />
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

            <TrustedBy />

            <FeatureHighlight
                label={t('console.feature1.label')}
                title={t('console.feature1.title')}
                description={t('console.feature1.desc')}
                buttonText={t('console.talkToExpert')}
                onButtonClick={() => window.open('https://Raneen One.com/contact', '_blank')}
                mainImage="/media/assets/console01.avif"
                imagePosition="left"
                backgroundGradientVar="--hero-gradient-5"
                background='yes'
            />
            <FeatureHighlight
                label={t('console.feature2.label')}
                title={t('console.feature2.title')}
                description={t('console.feature2.desc')}
                buttonText={t('console.talkToExpert')}
                onButtonClick={() => window.open('https://Raneen One.com/contact', '_blank')}
                mainImage="/media/assets/console02.avif"
                imagePosition="right"
                backgroundGradientVar="--hero-gradient-5"
                background='yes'
            />
            <FeatureHighlight
                label={t('console.feature3.label')}
                title={t('console.feature3.title')}
                description={t('console.feature3.desc')}
                buttonText={t('console.talkToExpert')}
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
