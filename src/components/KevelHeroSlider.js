import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        logo: '/media/logoipsum.png',
        logoAlt: 'MC Sonae',
        bg: '/media/solutions/retail.avif',
        quote: 'Predictive segments powered by machine-learning models have become very important for us as client’s display different behaviors depending on the category with varying frequency of purchase and consideration periods.',
        author: 'Judit Takács Miranda, Head of Digital Marketing',
        button: 'Read Case Study',
        stat: '3x',
        statLabel: 'Conversion Rate',
    },
    {
        logo: '/media/logoipsum.png',
        logoAlt: 'El Corte Inglés',
        bg: '/media/solutions/marketplaces.avif',
        quote: 'Raneen One enabled us to scale our ad platform and deliver more relevant ads to our marketplace users.',
        author: 'Jane Doe, Head of Monetization',
        button: 'Read Case Study',
        stat: '2.5x',
        statLabel: 'Marketplace ROI',
    },
    {
        logo: '/media/logoipsum.png',
        logoAlt: 'iFood',
        bg: '/media/solutions/finance.avif',
        quote: 'With Raneen One, we can deliver compliant, relevant offers to our users and drive engagement.',
        author: 'John Smith, Digital Marketing Lead',
        button: 'Read Case Study',
        stat: '4x',
        statLabel: 'Engagement',
    },
    {
        logo: '/media/logoipsum.png',
        logoAlt: 'Edmunds',
        bg: '/media/solutions/travel.avif',
        quote: 'Raneen One’s platform lets us deliver the right message to the right traveler at the right time.',
        author: 'Emily Chen, VP of Marketing',
        button: 'Read Case Study',
        stat: '2x',
        statLabel: 'Travel Conversions',
    },
];

const SLIDE_DURATION = 10000;

export default function KevelHeroSlider() {
    const [active, setActive] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const timerRef = useRef();

    // Helper to clear and restart timer
    const restartTimer = (newIndex) => {
        clearInterval(timerRef.current);
        setProgress(0);
        setActive(newIndex);
        setIsTransitioning(false);
        timerRef.current = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setActive(prev => (prev + 1) % slides.length);
                setIsTransitioning(false);
            }, 400);
        }, SLIDE_DURATION);
    };

    useEffect(() => {
        setProgress(0);
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setActive(prev => (prev + 1) % slides.length);
                setIsTransitioning(false);
            }, 400);
        }, SLIDE_DURATION);
        return () => clearInterval(timerRef.current);
    }, [active]);

    useEffect(() => {
        setProgress(0);
        let start;
        let frame;
        function animateBar(ts) {
            if (!start) start = ts;
            const elapsed = ts - start;
            setProgress(Math.min(elapsed / SLIDE_DURATION, 1));
            if (elapsed < SLIDE_DURATION) {
                frame = requestAnimationFrame(animateBar);
            }
        }
        frame = requestAnimationFrame(animateBar);
        return () => cancelAnimationFrame(frame);
    }, [active]);

    return (
        <section className="kevel-hero-slider">
            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    className="kevel-hero-bg"
                    style={{ backgroundImage: `url('${slides[active].bg}')` }}
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: 1.08, opacity: 1 }}
                    exit={{ scale: 1, opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                />
                {isTransitioning && (
                    <motion.div
                        key="black-bg"
                        className="kevel-hero-bg"
                        style={{ background: '#000', backgroundImage: 'none', zIndex: 2, position: 'absolute', inset: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    />
                )}
            </AnimatePresence>
            <div className="kevel-hero-overlay" />
            <div className="kevel-hero-content">
                <div className="kevel-hero-logos">
                    {slides.map((slide, i) => (
                        <div className="kevel-hero-logo-wrap" key={slide.logoAlt}>
                            <img
                                src={slide.logo}
                                alt={slide.logoAlt}
                                onClick={() => restartTimer(i)}
                                style={{ cursor: 'pointer' }}
                            />
                            <div className="kevel-hero-logo-bar">
                                {i === active && (
                                    <motion.div
                                        className="kevel-hero-logo-bar-progress"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: progress }}
                                        transition={{ ease: 'linear', duration: 0 }}
                                        style={{ transformOrigin: 'left' }}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="kevel-hero-main">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            className="kevel-hero-left"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            <blockquote>{slides[active].quote}</blockquote>
                            <div className="kevel-hero-author">{slides[active].author}</div>
                            <button className="kevel-hero-btn">{slides[active].button}</button>
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                            <div className="kevel-hero-right">
                                <div className="kevel-hero-stat">{slides[active].stat}</div>
                                <div className="kevel-hero-stat-label">{slides[active].statLabel}</div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
} 