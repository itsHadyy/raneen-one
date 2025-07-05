import React, { useRef, useEffect, useState } from 'react';
import './BusinessSolutionsSection.css';

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
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
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

const BusinessSolutionsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [panelState, setPanelState] = useState('top'); // 'top', 'fixed', 'bottom'
  const imageRefs = useRef([]);
  const sectionRef = useRef(null);
  const panelRef = useRef(null);
  const prevIndex = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !panelRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const panelHeight = panelRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const sectionTopAbs = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const sectionBottomAbs = sectionTopAbs + sectionHeight;
      const buffer = 1; // 1px buffer to prevent flicker

      // Calculate the scroll position where the panel should be fixed and centered
      const fixedStart = sectionTopAbs - (viewportHeight / 2) + (panelHeight / 2);
      const fixedEnd = sectionBottomAbs - (viewportHeight / 2) - (panelHeight / 2);

      // Debug log
      console.log({
        scrollY,
        fixedStart,
        fixedEnd,
        panelState,
        sectionTopAbs,
        sectionBottomAbs,
        panelHeight,
        viewportHeight
      });

      if (scrollY <= fixedStart) {
        setPanelState('top');
      } else if (scrollY >= fixedEnd) {
        setPanelState('bottom');
      } else {
        setPanelState('fixed');
      }

      // Only update active index if in section
      if (scrollY + viewportHeight > sectionTopAbs && scrollY < sectionBottomAbs) {
        let foundIdx = 0;
        imageRefs.current.forEach((ref, i) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const refTop = rect.top + scrollY;
            const refCenter = refTop + rect.height / 2;
            if (scrollY + viewportHeight / 2 >= refCenter) {
              foundIdx = i;
            }
          }
        });
        if (foundIdx !== prevIndex.current) {
          setAnimating(true);
          setTimeout(() => setAnimating(false), 400);
          prevIndex.current = foundIdx;
        }
        setActiveIndex(foundIdx);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Panel style logic
  let panelStyle = {};
  if (panelState === 'top') {
    panelStyle = { position: 'absolute', top: 0, left: 0 };
  } else if (panelState === 'fixed') {
    panelStyle = { position: 'fixed', left: 0 };
  } else if (panelState === 'bottom') {
    panelStyle = { position: 'absolute', bottom: 0, left: 0 };
  }

  return (
    <div className="business-solutions-section-magnetic-parent" ref={sectionRef}>
      <section className="business-solutions-section magnetic">
        <div
          className={`business-solutions-fixed-panel active panel-${panelState}`}
          ref={panelRef}
          style={panelStyle}
        >
          <div className="business-solutions-header-sticky">
            <h2>Solutions for every type of business</h2>
          </div>
          <div
            key={activeIndex}
            className={`business-solutions-animated-panel${animating ? ' animating' : ''}`}
          >
            <div className="business-solutions-type-title">{businessTypes[activeIndex].title}</div>
            <div className="business-solutions-type-desc">{businessTypes[activeIndex].desc}</div>
            <button className="business-solutions-btn">{businessTypes[activeIndex].button}</button>
            <div className="business-solutions-logos">
              {businessTypes[activeIndex].logos.map((logo, i) => (
                <img src={logo} alt="logo" key={i} />
              ))}
            </div>
            <div className="business-solutions-testimonial">
              <div className="business-solutions-quote">"{businessTypes[activeIndex].testimonial}"</div>
              <div className="business-solutions-author">{businessTypes[activeIndex].author}</div>
            </div>
          </div>
        </div>
        <div className="business-solutions-image-stack-scroll">
          {businessTypes.map((bt, i) => (
            <div
              className={`business-solutions-image-snap${activeIndex === i ? ' active' : ''}`}
              key={bt.key}
              ref={el => (imageRefs.current[i] = el)}
              data-idx={i}
            >
              <img src={bt.image} alt={bt.title} className="business-solutions-image" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BusinessSolutionsSection; 