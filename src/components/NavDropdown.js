import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import '../Style.css';

const NavDropdown = ({ items = [], openFlyout, setOpenFlyout }) => {
  return (
    <div className="nav-dropdown nav-dropdown-kevel">
      {items.map((item, idx) => (
        <React.Fragment key={item.title}>
          <div
            className={`nav-dropdown-item-kevel${item.flyout ? ' has-flyout' : ''}`}
            onMouseEnter={() => item.flyout && setOpenFlyout(idx)}
            onMouseLeave={() => item.flyout && setOpenFlyout(null)}
          >
            <div className="nav-dropdown-icon-kevel">{item.icon}</div>
            <div className="nav-dropdown-text-kevel">
              <div className="nav-dropdown-title-kevel">{item.title}</div>
              <div className="nav-dropdown-desc-kevel">{item.desc}</div>
            </div>
            {item.flyout && (
              <div className="nav-dropdown-arrow-kevel">
                <FiChevronRight size={22} />
              </div>
            )}
          </div>
          {idx < items.length - 1 && <div className="nav-dropdown-divider-kevel" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavDropdown; 