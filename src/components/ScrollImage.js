import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollImage = ({ image, index, onVisible }) => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            onVisible(index);
        }
    }, [inView, index, onVisible]);

    return (
        <div ref={ref} className="image-section">
            <img src={image} alt={`Business ${index}`} />
        </div>
    );
};

export default ScrollImage;