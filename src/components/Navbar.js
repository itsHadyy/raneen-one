import React, { useEffect, useState, useRef } from 'react';
import NavDropdown from './NavDropdown';
import { FiChevronDown } from 'react-icons/fi';
import {
  LuServerCog, LuUsers2, LuSettings2, LuActivitySquare, LuShoppingBag, LuStore, LuTruck, LuCreditCard,
  LuRocket, LuBookOpen, LuPenTool, LuBuilding2, LuUtensilsCrossed, LuCar, LuBadgeCheck, LuStar,
  LuPenSquare, LuNewspaper, LuUserSquare2, LuBriefcase, LuHand, LuMail
} from 'react-icons/lu';
import ContactModal from "./ContactModal";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  {
    label: 'Products',
    dropdown: [
      {
        icon: <LuServerCog size={24} color="#654EFC" />,
        title: 'Raneen Ad Server',
        desc: 'Build your own ad server',
        link: '/adServer'
      },
      {
        icon: <LuUsers2 size={24} color="#FA824D" />,
        title: 'Raneen Audience',
        desc: 'Unlock your first-party data',
        link: '/audience'
      },
      {
        icon: <LuSettings2 size={24} color="#2680EB" />,
        title: 'Raneen Console',
        desc: 'Manage your campaigns with AI',
        link: '/console'
      }
    ]
  },
  {
    label: 'Industries',
    dropdown: [
      {
        icon: <LuShoppingBag size={24} color="#654EFC" />,
        title: 'Retail Media',
        desc: 'Build your own ad server',
        link: '/retail'
      },
      {
        icon: <LuStore size={24} color="#FA824D" />,
        title: 'Marketplaces',
        desc: 'Unlock your first-party data',
        link: '/knowledge-base'
      },
      {
        icon: <LuTruck size={24} color="#2680EB" />,
        title: 'Delivery Apps',
        desc: 'Manage your campaigns with AI',
        link: '/tools'
      },
      {
        icon: <LuCreditCard size={24} color="#FDBA40" />,
        title: 'Financial Media',
        desc: 'Real-time updates on API uptimes',
        link: '/api-status'
      }
    ]
  },
  {
    label: 'Developers',
    dropdown: [
      {
        icon: <LuRocket size={24} color="#181f2a" />,
        title: 'API Quickstart',
        desc: 'Test the API in just minutes',
        link: '/api-quickstart'
      },
      {
        icon: <LuBookOpen size={24} color="#181f2a" />,
        title: 'Knowledge Base',
        desc: 'Docs about the platform',
        link: '/knowledge-base'
      },
      {
        icon: <LuPenTool size={24} color="#181f2a" />,
        title: 'Tools & Libraries',
        desc: 'Pre-built tools',
        link: '/tools'
      },
      {
        icon: <LuActivitySquare size={24} color="#181f2a" />,
        title: 'API Status',
        desc: 'Real-time updates on API uptimes',
        link: '/api-status'
      }
    ]
  },
  {
    label: 'Customers',
    dropdown: [
      {
        icon: <LuBuilding2 size={24} color="#654EFC" />,
        title: 'MC',
        desc: 'Complete retail media solution',
        link: '/customers/mc'
      },
      {
        icon: <LuUtensilsCrossed size={24} color="#FA824D" />,
        title: 'iFood',
        desc: 'Promoted listings',
        link: '/customers/ifood'
      },
      {
        icon: <LuCar size={24} color="#2680EB" />,
        title: 'Edmunds',
        desc: 'Sponsored car listings',
        link: '/customers/edmunds'
      },
      {
        icon: <LuBadgeCheck size={24} color="#FDBA40" />,
        title: 'El Corte Inglés',
        desc: 'First party data activation',
        link: '/customers/elcorte'
      },
      {
        icon: <LuStar size={24} color="#181f2a" />,
        title: 'Success Stories',
        desc: 'See what they\'ve built',
        link: '/customers/success-stories'
      }
    ]
  },
  {
    label: 'Resources',
    dropdown: [
      {
        icon: <LuPenSquare size={24} color="#181f2a" />,
        title: 'Raneen One Blog',
        desc: 'Articles about Raneen One and the industry',
        link: '/resources/blog'
      },
      {
        icon: <LuNewspaper size={24} color="#181f2a" />,
        title: 'Newsroom',
        desc: 'In the press and podcasts',
        link: '/resources/newsroom'
      },
      {
        icon: <LuBookOpen size={24} color="#181f2a" />,
        title: 'Retail Media Guide',
        desc: 'Definitions, trends, and strategies',
        link: '/resources/retail-media-guide'
      },
      {
        icon: <LuServerCog size={24} color="#181f2a" />,
        title: 'Ad Server Guide',
        desc: 'All there is to know about ad servers',
        link: '/resources/ad-server-guide'
      }
    ]
  },
  {
    label: 'Company',
    dropdown: [
      {
        icon: <LuUserSquare2 size={24} color="#181f2a" />,
        title: 'About',
        desc: 'Our story and team',
        link: '/company/about'
      },
      {
        icon: <LuBriefcase size={24} color="#181f2a" />,
        title: 'Careers',
        desc: 'Work with us',
        link: '/company/careers'
      },
      {
        icon: <LuHand size={24} color="#181f2a" />,
        title: 'Partners',
        desc: 'Partner with us',
        link: '/company/partners'
      },
      {
        icon: <LuMail size={24} color="#181f2a" />,
        title: 'Contact',
        desc: 'Talk with sales',
        link: '/company/contact'
      }
    ]
  }
];

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openFlyout, setOpenFlyout] = useState(null);
  const navRefs = useRef([]);
  const closeTimeout = useRef();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Dropdown open/close handlers with delay
  const handleDropdownOpen = idx => {
    clearTimeout(closeTimeout.current);
    setOpenDropdown(idx);
  };
  const handleDropdownClose = () => {
    closeTimeout.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <div>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-container">
          <Link to={'/'} className='logo-link'>
            <div className="logo">
              <img src='media/logo02.png' alt='Raneen One Icon' className='raneenLogo' />
              raneen
              {/* <span>One</span> */}
            </div>
          </Link>
          <nav className="nav">
            {NAV_ITEMS.map((item, idx) => {
              const hasDropdown = !!item.dropdown;
              const isOpen = openDropdown === idx;
              return (
                <div
                  key={item.label}
                  className={`nav-item-wrapper${isOpen ? ' nav-item-open' : ''}`}
                  onMouseEnter={() => hasDropdown ? handleDropdownOpen(idx) : setOpenDropdown(null)}
                  onMouseLeave={hasDropdown ? handleDropdownClose : undefined}
                  onFocus={() => hasDropdown ? handleDropdownOpen(idx) : setOpenDropdown(null)}
                  onBlur={hasDropdown ? handleDropdownClose : undefined}
                  tabIndex={0}
                  ref={el => navRefs.current[idx] = el}
                  style={{ position: 'relative', display: 'inline-block' }}
                >
                  <Link to={item.link || '#'} className="nav-link">
                    {item.label}
                    {hasDropdown && <FiChevronDown style={{ marginLeft: 6, verticalAlign: 'middle' }} size={18} />}
                  </Link>
                  {hasDropdown && isOpen && (
                    <NavDropdown
                      items={item.dropdown}
                      openFlyout={openFlyout}
                      setOpenFlyout={setOpenFlyout}
                    />
                  )}
                </div>
              );
            })}
          </nav>
          <div className="header-actions">
            <button className="icon-btn" aria-label="Search">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            </button>
            <button className="icon-btn" aria-label="Account">
              AR
            </button>
            <button className="cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Talk to an expert <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
            </button>
          </div>
        </div>
      </header>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Navbar; 