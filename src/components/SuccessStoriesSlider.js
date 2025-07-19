import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const SuccessStoriesSlider = ({ stories }) => {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);
    const timeoutRef = useRef(null);

    const handleChange = (dir) => {
        setFade(false);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => {
                if (dir === 'next') return (prev + 1) % stories.length;
                if (dir === 'prev') return (prev - 1 + stories.length) % stories.length;
                return prev;
            });
            setFade(true);
        }, 300); // match CSS duration
    };

    const story = stories[current];

    return (
        <section className="success-stories-slider">
            <h2 className="success-stories-title">{t('successStories.title')}</h2>
            <p className="success-stories-subtitle">{t('successStories.subtitle')}</p>
            <div className="success-stories-cards">
                <div className={`success-story-quote-card fade-${fade ? 'in' : 'out'}`}>
                    <div>
                        <p className="success-story-quote">"{story.quote}"</p>
                        <p className="success-story-author">{story.author}</p>
                    </div>
                    <div className="success-story-buttons">
                        {story.buttons && story.buttons.map((btn, idx) =>
                            btn.href ? (
                                <a key={idx} href={btn.href} className={`success-story-btn ${btn.variant || ''}`}>{btn.label}</a>
                            ) : (
                                <button key={idx} onClick={btn.onClick} className={`success-story-btn ${btn.variant || ''}`}>{btn.label}</button>
                            )
                        )}
                    </div>
                </div>
                <div className={`success-story-logo-and-stats fade-${fade ? 'in' : 'out'}`}>
                    <div className="success-story-logo-card">
                        {story.logo}
                    </div>
                    <div className="success-story-stats">
                        {story.stats && story.stats.map((stat, idx) => (
                            <div className="success-story-stat-card" key={idx}>
                                <div className="success-story-stat-value">{stat.value}</div>
                                <div className="success-story-stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="success-stories-arrows">
                <button className="success-stories-arrow" onClick={() => handleChange('prev')} aria-label={t('successStories.prev')}>&#8592;</button>
                <button className="success-stories-arrow" onClick={() => handleChange('next')} aria-label={t('successStories.next')}>&#8594;</button>
            </div>
        </section>
    );
};

SuccessStoriesSlider.propTypes = {
    stories: PropTypes.arrayOf(PropTypes.shape({
        quote: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        logo: PropTypes.node.isRequired,
        stats: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })).isRequired,
        buttons: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func,
            href: PropTypes.string,
            variant: PropTypes.string,
        })),
    })).isRequired,
};

export default SuccessStoriesSlider; 