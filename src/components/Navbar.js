import React, { useEffect, useState, useRef } from 'react';
import NavDropdown from './NavDropdown';
import { FiZap, FiBookOpen, FiTool, FiHeart, FiChevronDown } from 'react-icons/fi';

const NAV_ITEMS = [
  { label: 'Products', link: '#' },
  { label: 'Solutions', link: '#' },
  {
    label: 'Developers',
    dropdown: [
      {
        icon: <FiZap size={24} color="#181f2a" />,
        title: 'API Quickstart',
        desc: 'Test the API in just minutes',
        link: '/api-quickstart'
      },
      {
        icon: <FiBookOpen size={24} color="#181f2a" />,
        title: 'Knowledge Base',
        desc: 'Docs about the platform',
        link: '/knowledge-base'
      },
      {
        icon: <FiTool size={24} color="#181f2a" />,
        title: 'Tools & Libraries',
        desc: 'Pre-built tools',
        link: '/tools',
        flyout: [
          { title: 'SDKs', link: '/tools/sdks' },
          { title: 'CLI', link: '/tools/cli' }
        ]
      },
      {
        icon: <FiHeart size={24} color="#181f2a" />,
        title: 'API Status',
        desc: 'Real-time updates on API uptimes',
        link: '/api-status'
      }
    ]
  },
  { label: 'Customers', link: '#' },
  { label: 'Resources', link: '#' },
  { label: 'Company', link: '#' }
];

const Navbar = () => {
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
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: 10}}>
            <rect width="40" height="40" rx="8" fill="#FF4D2D"/>
            <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold" dy=".3em">R</text>
          </svg>
          Raneen <span>One</span>
        </div>
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
                <a href={item.link || '#'} className="nav-link">
                  {item.label}
                  {hasDropdown && <FiChevronDown style={{ marginLeft: 6, verticalAlign: 'middle' }} size={18} />}
                </a>
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
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </button>
          <button className="icon-btn" aria-label="Account">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M16 20v-2a4 4 0 0 0-8 0v2"/></svg>
          </button>
          <button className="cta-btn">Talk to an expert</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 