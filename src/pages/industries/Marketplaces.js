import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../../components/HeroSection';
import { FaArrowRight } from "react-icons/fa";
import ContactModal from "../../components/ContactModal";
import FeatureHighlight from '../../components/FeatureHighlight';
import FeatureHighlight02 from '../../components/FeatureHighlight02';
import SuccessStoriesSlider from '../../components/SuccessStoriesSlider';

function Marketplaces() {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);

    const stories = [
        {
            quote: t('marketplaces.stories.0.quote'),
            author: t('marketplaces.stories.0.author'),
            logo: <img src="/media/logos/ifood.svg" alt="iFood" />,  
            stats: [
                { value: t('marketplaces.stories.0.stat1'), label: t('marketplaces.stories.0.stat1Label') },
                { value: t('marketplaces.stories.0.stat2'), label: t('marketplaces.stories.0.stat2Label') }
            ],
            buttons: [
                { label: t('marketplaces.stories.0.button1'), href: '/case-study/ifood', variant: 'primary' },
                { label: t('marketplaces.stories.0.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: t('marketplaces.stories.1.quote'),
            author: t('marketplaces.stories.1.author'),
            logo: <img src="/media/logos/mc.avif" alt="Mercado Libre" />,  
            stats: [
                { value: t('marketplaces.stories.1.stat1'), label: t('marketplaces.stories.1.stat1Label') },
                { value: t('marketplaces.stories.1.stat2'), label: t('marketplaces.stories.1.stat2Label') }
            ],
            buttons: [
                { label: t('marketplaces.stories.1.button1'), href: '/case-study/mercadolibre', variant: 'primary' },
                { label: t('marketplaces.stories.1.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        },
        {
            quote: t('marketplaces.stories.2.quote'),
            author: t('marketplaces.stories.2.author'),
            logo: <img src="/media/logos/edmunds.svg" alt="Noon" />,  
            stats: [
                { value: t('marketplaces.stories.2.stat1'), label: t('marketplaces.stories.2.stat1Label') },
                { value: t('marketplaces.stories.2.stat2'), label: t('marketplaces.stories.2.stat2Label') }
            ],
            buttons: [
                { label: t('marketplaces.stories.2.button1'), href: '/case-study/noon', variant: 'primary' },
                { label: t('marketplaces.stories.2.button2'), href: '/success-stories', variant: 'secondary' }
            ]
        }
    ];

    return (
        <div>
            <HeroSection
                backgroundGradient="var(--hero-gradient-4)"
                leftContent={
                    <>
                        <h1>{t('marketplaces.heroTitle')}</h1>
                        <p dangerouslySetInnerHTML={{ __html: t('marketplaces.heroDesc') }} />
                        <div className="hero-buttons">
                            <button className="footer-cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                {t('marketplaces.talkToExpert')} <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                            </button>
                        </div>
                    </>
                }
                imageSrc="media/assets/industries/marketplaces.avif"
                imageAlt="Dashboard Mockup"
                bubbles={{}}
            />
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

            <div className='center'>
                <h1>{t('marketplaces.centerTitle')}</h1>
                <p>{t('marketplaces.centerDesc')}</p>
            </div>

            <FeatureHighlight
                label={t('marketplaces.feature1.label')}
                title={t('marketplaces.feature1.title')}
                description={t('marketplaces.feature1.desc')}
                mainImage="/media/assets/industries/marketplaces03.avif"
                imagePosition="left"
                backgroundGradientVar="--hero-gradient-4"
                background='yes'
            />
            <FeatureHighlight
                label={t('marketplaces.feature2.label')}
                title={t('marketplaces.feature2.title')}
                description={t('marketplaces.feature2.desc')}
                mainImage="/media/assets/industries/marketplaces02.avif"
                imagePosition="right"
                backgroundGradientVar="--hero-gradient-4"
                background='yes'
            />
            <FeatureHighlight
                label={t('marketplaces.feature3.label')}
                title={t('marketplaces.feature3.title')}
                description={t('marketplaces.feature3.desc')}
                mainImage="/media/assets/industries/marketplaces03.avif"
                imagePosition="left"
                backgroundGradientVar="--hero-gradient-4"
                background='yes'
            />

            <FeatureHighlight02 />

            <SuccessStoriesSlider stories={stories} />
        </div>
    );
};

export default Marketplaces;
