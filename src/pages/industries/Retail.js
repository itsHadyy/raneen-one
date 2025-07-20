import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../../components/HeroSection';
import { FaArrowRight } from "react-icons/fa";
import ContactModal from "../../components/ContactModal";
import FeatureHighlight from '../../components/FeatureHighlight';
import AdLifecycleDonut from '../../components/AdLifecycleDonut';
import FeatureHighlight02 from '../../components/FeatureHighlight02';
import SuccessStoriesSlider from '../../components/SuccessStoriesSlider';

function Retail() {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);

    const stories = [
        {
            quote: t('retail.stories.0.quote'),
            author: t('retail.stories.0.author'),
            logo: <img src="/media/logos/ifood.svg" alt="iFood" />, // keep logo
            stats: [
                { value: t('retail.stories.0.stat1'), label: t('retail.stories.0.stat1Label') },
                { value: t('retail.stories.0.stat2'), label: t('retail.stories.0.stat2Label') }
            ],
            buttons: [
                { label: t('retail.stories.0.button1'), href: '/case-study/ifood', variant: 'primary' },
                { label: t('retail.stories.0.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: t('retail.stories.1.quote'),
            author: t('retail.stories.1.author'),
            logo: <img src="/media/logos/mc.avif" alt="Mercado Libre" />, // keep logo
            stats: [
                { value: t('retail.stories.1.stat1'), label: t('retail.stories.1.stat1Label') },
                { value: t('retail.stories.1.stat2'), label: t('retail.stories.1.stat2Label') }
            ],
            buttons: [
                { label: t('retail.stories.1.button1'), href: '/case-study/mercadolibre', variant: 'primary' },
                { label: t('retail.stories.1.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: t('retail.stories.2.quote'),
            author: t('retail.stories.2.author'),
            logo: <img src="/media/logos/edmunds.svg" alt="Noon" />, // keep logo
            stats: [
                { value: t('retail.stories.2.stat1'), label: t('retail.stories.2.stat1Label') },
                { value: t('retail.stories.2.stat2'), label: t('retail.stories.2.stat2Label') }
            ],
            buttons: [
                { label: t('retail.stories.2.button1'), href: '/case-study/noon', variant: 'primary' },
                { label: t('retail.stories.2.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        }
    ];

    return (
        <div>
            <HeroSection
                backgroundGradient="var(--hero-gradient-2)"
                leftContent={
                    <>
                        <h1>{t('retail.heroTitle')}</h1>
                        <p>{t('retail.heroDesc')}</p>
                        <div className="hero-buttons">
                            <button className="footer-cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                {t('retail.talkToExpert')} <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                            </button>
                        </div>
                    </>
                }
                imageSrc="media/assets/industries/retail.avif"
                imageAlt="Dashboard Mockup"
                bubbles={{}}
            />
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

            <div className='center'>
                <h1>{t('retail.centerTitle')}</h1>
                <p>{t('retail.centerDesc')}</p>
            </div>

            <FeatureHighlight
                label={t('retail.feature1.label')}
                title={t('retail.feature1.title')}
                description={t('retail.feature1.desc')}
                mainImage="/media/assets/industries/retail01.webp"
                imagePosition="left"
                backgroundGradientVar="--hero-gradient-2"
                background='yes'
            />
            <FeatureHighlight
                label={t('retail.feature2.label')}
                title={t('retail.feature2.title')}
                description={t('retail.feature2.desc')}
                mainImage="/media/assets/industries/retail02.webp"
                imagePosition="right"
                backgroundGradientVar="--hero-gradient-2"
                background='yes'
            />
            <FeatureHighlight
                label={t('retail.feature3.label')}
                title={t('retail.feature3.title')}
                description={t('retail.feature3.desc')}
                mainImage="/media/assets/industries/retail03.webp"
                imagePosition="left"
                backgroundGradientVar="--hero-gradient-2"
                background='yes'
            />

            <AdLifecycleDonut />

            <FeatureHighlight02 />

            <SuccessStoriesSlider stories={stories} />
        </div>
    );
};

export default Retail;
