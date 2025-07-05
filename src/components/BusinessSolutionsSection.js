import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import "./BusinessSolutionsSection.css";

const businessTypes = [
  {
    key: 'retail',
    title: 'Retail',
    desc: 'Make the most of your unique first-party data and omnichannel experience to give your advertisers and results they can’t get anywhere else.',
    button: 'Learn more',
    logos: [
      'https://dummyimage.com/80x32/ff6600/fff&text=Orange+Apron',
      'https://dummyimage.com/80x32/0077ff/fff&text=Chewy',
      'https://dummyimage.com/100x32/ffe135/222&text=Dollar+General',
    ],
    testimonial: 'By utilizing Raneen One’s flexible, API-based solution, we have enacted the basis for scalability and advancement of our Retail Media network while enhancing our ability to create custom ad experiences that resonate with our customers.',
    author: 'Natalie Ong, Director of DG Media Network Operations (Dollar General)',
    image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b1e6c?auto=format&fit=crop&w=800&q=80',
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
    testimonial: 'Raneen One enabled us to scale our ad platform and deliver more relevant ads to our marketplace users.',
    author: 'Jane Doe, Head of Monetization (Etsy)',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
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
    testimonial: 'With Raneen One, we can deliver compliant, relevant offers to our users and drive engagement.',
    author: 'John Smith, Digital Marketing Lead (PayPal)',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
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
    testimonial: 'Raneen One’s platform lets us deliver the right message to the right traveler at the right time.',
    author: 'Emily Chen, VP of Marketing (Expedia)',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
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
    testimonial: 'We’ve seen a significant lift in campaign performance and user retention since using Raneen One.',
    author: 'Carlos Rivera, Growth Manager (iFood)',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  },
];

export default function BusinessSolutionsSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const imageRefs = useRef([]);
  const prevIndex = useRef(0);

  // Animate section entrance/exit
  const inView = useInView(sectionRef, { margin: "-20% 0px" });
  const sectionControls = useAnimation();
  useEffect(() => {
    if (inView) sectionControls.start({ opacity: 1, y: 0 });
    else sectionControls.start({ opacity: 0, y: 80 });
  }, [inView, sectionControls]);

  // Animate left panel content on image change
  useEffect(() => {
    const handleIntersect = (entries) => {
      let maxRatio = 0;
      let visibleIdx = 0;
      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          visibleIdx = Number(entry.target.dataset.idx);
        }
      });
      if (visibleIdx !== prevIndex.current) {
        setAnimating(true);
        setTimeout(() => setAnimating(false), 400);
        prevIndex.current = visibleIdx;
      }
      setActiveIndex(visibleIdx);
    };
    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    });
    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  // Scroll progress for progress bar
  const { scrollYProgress } = useScroll({ container: sectionRef });
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.section
      className="business-solutions-section"
      ref={sectionRef}
      initial={{ opacity: 0, y: 80 }}
      animate={sectionControls}
      exit={{ opacity: 0, y: 80 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="business-solutions-inner">
        {/* AnimatePresence for panel pinning/reveal */}
        <AnimatePresence>
          {inView && (
            <motion.div
              className="business-solutions-fixed-animated-panel"
              initial={{ opacity: 0, y: 80, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -80, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 80, damping: 18 }}
              style={{
                position: "fixed",
                top: "50%",
                left: "7vw",
                transform: "translateY(-50%)",
                width: 480,
                zIndex: 10,
                background: "#fff",
                borderRadius: 18,
                boxShadow: "0 4px 32px 0 rgba(24,31,42,0.04)",
                padding: "32px 40px",
                minWidth: 320,
                maxWidth: 600,
              }}
            >
              <div className="business-solutions-header-sticky">
                <h2>Solutions for every type of business</h2>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className={`business-solutions-animated-panel${animating ? " animating" : ""}`}
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="business-solutions-type-title">{businessTypes[activeIndex].title}</div>
                  <div className="business-solutions-type-desc">{businessTypes[activeIndex].desc}</div>
                  <motion.button
                    className="business-solutions-btn"
                    whileHover={{ scale: 1.07, boxShadow: "0 6px 24px 0 rgba(255,77,45,0.18)" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {businessTypes[activeIndex].button}
                  </motion.button>
                  <div className="business-solutions-logos">
                    {businessTypes[activeIndex].logos.map((logo, i) => (
                      <motion.img
                        src={logo}
                        alt="logo"
                        key={i}
                        whileHover={{ scale: 1.12, filter: "brightness(1.1)" }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.4 }}
                      />
                    ))}
                  </div>
                  <div className="business-solutions-testimonial">
                    <div className="business-solutions-quote">
                      “{businessTypes[activeIndex].testimonial}”
                    </div>
                    <div className="business-solutions-author">
                      {businessTypes[activeIndex].author}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Parallax image stack */}
        <div className="business-solutions-image-stack" style={{ marginLeft: 520 }}>
          {businessTypes.map((bt, i) => (
            <motion.div
              className={`business-solutions-image-wrapper${activeIndex === i ? " in-view" : ""}`}
              key={bt.key}
              ref={el => (imageRefs.current[i] = el)}
              data-idx={i}
              initial={false}
              animate={{
                opacity: activeIndex === i ? 1 : 0.7,
                scale: activeIndex === i ? 1.08 : 0.96,
                y: activeIndex === i ? -20 : 40,
                x: activeIndex === i ? 0 : 40,
                filter: activeIndex === i ? "blur(0px)" : "blur(2px)",
              }}
              whileHover={{ scale: 1.12, boxShadow: "0 8px 32px 0 rgba(24,31,42,0.10)" }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              style={{
                marginBottom: 80,
                display: "flex",
                justifyContent: "flex-end",
                cursor: "pointer",
              }}
            >
              <img src={bt.image} alt={bt.title} className="business-solutions-image" />
            </motion.div>
          ))}
        </div>
        {/* Progress bar */}
        <motion.div
          className="business-solutions-progress-bar"
          style={{ width: progressBarWidth }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.section>
  );
} 