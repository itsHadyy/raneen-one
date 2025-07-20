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
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openFlyout, setOpenFlyout] = useState(null);
  const navRefs = useRef([]);
  const closeTimeout = useRef();
  const { t, i18n } = useTranslation();

  // Move NAV_ITEMS here so it can use t
const NAV_ITEMS = [
  {
      label: t('navbar.products'),
      dropdown: [
        {
          icon: <LuServerCog size={24} color="#654EFC" />,
          title: t('navbar.adServerTitle'),
          desc: t('navbar.adServerDesc'),
          link: '/adServer'
        },
        {
          icon: <LuUsers2 size={24} color="#FA824D" />,
          title: t('navbar.audienceTitle'),
          desc: t('navbar.audienceDesc'),
          link: '/audience'
        },
        {
          icon: <LuSettings2 size={24} color="#2680EB" />,
          title: t('navbar.consoleTitle'),
          desc: t('navbar.consoleDesc'),
          link: '/console'
        }
      ]
    },
    {
      label: t('navbar.industries'),
      dropdown: [
        {
          icon: <LuShoppingBag size={24} color="#654EFC" />,
          title: t('navbar.retailTitle'),
          desc: t('navbar.retailDesc'),
          link: '/retail'
        },
        {
          icon: <LuStore size={24} color="#FA824D" />,
          title: t('navbar.marketplacesTitle'),
          desc: t('navbar.marketplacesDesc'),
          link: '/marketplaces'
        },
        {
          icon: <LuTruck size={24} color="#2680EB" />,
          title: t('navbar.deliveryTitle'),
          desc: t('navbar.deliveryDesc'),
          link: '/delivery'
        },
        {
          icon: <LuCreditCard size={24} color="#FDBA40" />,
          title: t('navbar.financialTitle'),
          desc: t('navbar.financialDesc'),
          link: '/financial'
        }
      ]
    },
    {
      label: t('navbar.developers'),
    dropdown: [
      {
          icon: <LuRocket size={24} color="#181f2a" />,
          title: t('navbar.apiQuickstartTitle'),
          desc: t('navbar.apiQuickstartDesc'),
        link: '/api-quickstart'
      },
      {
          icon: <LuBookOpen size={24} color="#181f2a" />,
          title: t('navbar.knowledgeBaseTitle'),
          desc: t('navbar.knowledgeBaseDesc'),
        link: '/knowledge-base'
      },
      {
          icon: <LuPenTool size={24} color="#181f2a" />,
          title: t('navbar.toolsTitle'),
          desc: t('navbar.toolsDesc'),
          link: '/tools'
      },
      {
          icon: <LuActivitySquare size={24} color="#181f2a" />,
          title: t('navbar.apiStatusTitle'),
          desc: t('navbar.apiStatusDesc'),
        link: '/api-status'
      }
    ]
  },
  {
      label: t('navbar.customers'),
    dropdown: [
      {
          icon: <LuBuilding2 size={24} color="#654EFC" />,
          title: t('navbar.mcTitle'),
          desc: t('navbar.mcDesc'),
          link: '/customers/mc'
        },
        {
          icon: <LuUtensilsCrossed size={24} color="#FA824D" />,
          title: t('navbar.ifoodTitle'),
          desc: t('navbar.ifoodDesc'),
          link: '/customers/ifood'
      },
      {
          icon: <LuCar size={24} color="#2680EB" />,
          title: t('navbar.edmundsTitle'),
          desc: t('navbar.edmundsDesc'),
          link: '/customers/edmunds'
        },
        {
          icon: <LuBadgeCheck size={24} color="#FDBA40" />,
          title: t('navbar.elcorteTitle'),
          desc: t('navbar.elcorteDesc'),
          link: '/customers/elcorte'
      },
      {
          icon: <LuStar size={24} color="#181f2a" />,
          title: t('navbar.successStoriesTitle'),
          desc: t('navbar.successStoriesDesc'),
          link: '/customers/success-stories'
        }
      ]
    },
    {
      label: t('navbar.resources'),
      dropdown: [
        {
          icon: <LuPenSquare size={24} color="#181f2a" />,
          title: t('navbar.blogTitle'),
          desc: t('navbar.blogDesc'),
          link: '/resources/blog'
        },
        {
          icon: <LuNewspaper size={24} color="#181f2a" />,
          title: t('navbar.newsroomTitle'),
          desc: t('navbar.newsroomDesc'),
          link: '/resources/newsroom'
      },
      {
          icon: <LuBookOpen size={24} color="#181f2a" />,
          title: t('navbar.retailMediaGuideTitle'),
          desc: t('navbar.retailMediaGuideDesc'),
          link: '/resources/retail-media-guide'
  },
        {
          icon: <LuServerCog size={24} color="#181f2a" />,
          title: t('navbar.adServerGuideTitle'),
          desc: t('navbar.adServerGuideDesc'),
          link: '/resources/ad-server-guide'
        }
      ]
    },
    {
      label: t('navbar.company'),
      dropdown: [
        {
          icon: <LuUserSquare2 size={24} color="#181f2a" />,
          title: t('navbar.aboutTitle'),
          desc: t('navbar.aboutDesc'),
          link: '/company/about'
        },
        {
          icon: <LuBriefcase size={24} color="#181f2a" />,
          title: t('navbar.careersTitle'),
          desc: t('navbar.careersDesc'),
          link: '/company/careers'
        },
        {
          icon: <LuHand size={24} color="#181f2a" />,
          title: t('navbar.partnersTitle'),
          desc: t('navbar.partnersDesc'),
          link: '/company/partners'
        },
        {
          icon: <LuMail size={24} color="#181f2a" />,
          title: t('navbar.contactTitle'),
          desc: t('navbar.contactDesc'),
          link: '/company/contact'
        }
      ]
    }
  ];

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

  const handleLangToggle = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang).then(() => {
      window.location.reload();
    });
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
            {/* <button className="icon-btn" aria-label="Search">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            </button> */}
            <button className="icon-btn" aria-label="Language" onClick={handleLangToggle}>
              {i18n.language === 'ar' ? 'EN' : 'AR'}
          </button>
            <button className="cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              {t('navbar.talkToExpert')} <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
          </button>
          </div>
        </div>
      </header>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
  );
};

export default Navbar; 