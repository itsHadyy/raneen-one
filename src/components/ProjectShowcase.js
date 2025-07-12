import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const BusinessCases = [
    {
        key: 'retail',
        title: 'Retail',
        desc: "Make the most of your unique first-party data and omnichannel experience to give your advertisers and results they can't get anywhere else.",
        button: 'Learn more',
        logos: [
            'https://dummyimage.com/80x32/ff6600/fff&text=Orange+Apron',
            'https://dummyimage.com/80x32/0077ff/fff&text=Chewy',
            'https://dummyimage.com/100x32/ffe135/222&text=Dollar+General',
        ],
        testimonial:
            "By utilizing Raneen One's flexible, API-based solution, we have enacted the basis for scalability and advancement of our Retail Media network while enhancing our ability to create custom ad experiences that resonate with our customers.",
        author:
            'Natalie Ong, Director of DG Media Network Operations (Dollar General)',
        image: '/media/solutions/retail.avif',
    },
    {
        key: 'marketplaces',
        title: 'Marketplaces',
        desc: 'Empower your marketplace with advanced targeting and monetization tools to maximize value for both sellers and buyers.',
        button: 'Learn more',
        logos: [
            'https://dummyimage.com/80x32/222/fff&text=Etsy',
            'https://dummyimage.com/80x32/ff0033/fff&text=Shopify',
            'https://dummyimage.com/100x32/00bfae/fff&text=Rakuten',
        ],
        testimonial:
            'Raneen One enabled us to scale our ad platform and deliver more relevant ads to our marketplace users.',
        author: 'Jane Doe, Head of Monetization (Etsy)',
        image:
            '/media/solutions/marketplaces.avif',
    },
    {
        key: 'finance',
        title: 'Finance',
        desc: 'Leverage secure, privacy-first ad solutions to reach your customers with the right financial products at the right time.',
        button: 'Learn more',
        logos: [
            'https://dummyimage.com/80x32/222/fff&text=PayPal',
            'https://dummyimage.com/80x32/008000/fff&text=Chime',
            'https://dummyimage.com/100x32/ffb347/222&text=Robinhood',
        ],
        testimonial:
            'With Raneen One, we can deliver compliant, relevant offers to our users and drive engagement.',
        author: 'John Smith, Digital Marketing Lead (PayPal)',
        image:
            '/media/solutions/finance.avif',
    },
    {
        key: 'travel',
        title: 'Travel',
        desc: 'Connect travelers with personalized offers and experiences across every touchpoint in their journey.',
        button: 'Learn more',
        logos: [
            'https://dummyimage.com/80x32/ff69b4/fff&text=Lyft',
            'https://dummyimage.com/80x32/0077ff/fff&text=Expedia',
            'https://dummyimage.com/100x32/ff0000/fff&text=Airbnb',
        ],
        testimonial:
            "Raneen One's platform lets us deliver the right message to the right traveler at the right time.",
        author: 'Emily Chen, VP of Marketing (Expedia)',
        image:
            '/media/solutions/travel.avif',
    },
    {
        key: 'delivery',
        title: 'Delivery Apps',
        desc: 'Boost engagement and revenue with targeted promotions and seamless ad experiences for your delivery app users.',
        button: 'Learn more',
        logos: [
            'https://dummyimage.com/80x32/ff0000/fff&text=iFood',
            'https://dummyimage.com/80x32/ff6600/fff&text=DoorDash',
            'https://dummyimage.com/100x32/2979ff/fff&text=Uber+Eats',
        ],
        testimonial:
            "We've seen a significant lift in campaign performance and user retention since using Raneen One.",
        author: 'Carlos Rivera, Growth Manager (iFood)',
        image:
            '/media/solutions/delivery.avif',
    },
];

export default function ProjectShowcase() {
    const containerRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const sections = gsap.utils.toArray('.image-section', containerRef.current);
        const leftPanel = containerRef.current.querySelector('.sticky-left');

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top top',
            end: () => `+=${sections.length * window.innerHeight}`,
            pin: leftPanel,
            pinSpacing: true,
            scrub: 0.5,
        });

        sections.forEach((sec, idx) => {
            ScrollTrigger.create({
                trigger: sec,
                start: 'top center',
                onEnter: () => setActiveIndex(idx),
                onEnterBack: () => setActiveIndex(idx),
            });
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    const active = BusinessCases[activeIndex];

    return (
        <div ref={containerRef} className="project-scroll-wrapper">
            <div className="sticky-left">
                <h2 className="section-title">Solutions for every type of business</h2>
                <AnimatePresence mode="wait">
                                         <motion.div
                         key={activeIndex}
                         className="content-wrapper"
                         initial={{ opacity: 0, y: 40, rotateX: 15 }}
                         animate={{ opacity: 1, y: 0, rotateX: 0 }}
                         exit={{ opacity: 0, y: -40, rotateX: -10 }}
                         transition={{ duration: 0.5 }}
                     >
                        <h3>{active.title}</h3>
                        <p className="desc">{active.desc}</p>
                        <button className="cta-btn">{active.button}</button>
                        <div className="logos">
                            {active.logos.map((logo, i) => (
                                <img src={logo} alt={`logo-${i}`} key={i} />
                            ))}
                        </div>
                        <blockquote>
                            “{active.testimonial}” <br />
                            <cite>{active.author}</cite>
                        </blockquote>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="scroll-right">
                {BusinessCases.map((item, i) => (
                    <div key={item.key} className="image-section">
                        <img src={item.image} alt={item.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}