import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaGithub } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import "../Style.css";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer-gradient-bg">
      <div className="footer-main-row">
        <div className="footer-left-block">
          <div className="footer-inbox-title">{t('footer.inboxTitle')}</div>
          <div className="footer-inbox-desc">{t('footer.inboxDesc')}</div>
          <Link to="/blog" className="footer-blog-btn">{t('footer.goToBlog')} <FaArrowRight style={{ marginLeft: 6, verticalAlign: 'middle' }} /></Link>
        </div>
        <div className="footer-main-cols">
          <div className="footer-col">
            <h4>{t('footer.products')}</h4>
            <ul>
              <li>{t('footer.adServer')}</li>
              <li>{t('footer.audience')}</li>
              <li>{t('footer.console')}</li>
              <li>{t('footer.ai')}</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t('footer.solutions')}</h4>
            <ul>
              <li>{t('footer.marketplaces')}</li>
              <li>{t('footer.retailMedia')}</li>
              <li>{t('footer.deliveryApps')}</li>
              <li>{t('footer.financialMedia')}</li>
              <li>{t('footer.allAdUnits')}</li>
              <li>{t('footer.sponsoredListings')}</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t('footer.customerStories')}</h4>
            <ul>
              <li>{t('footer.mcSonae')}</li>
              <li>{t('footer.ifood')}</li>
              <li>{t('footer.slickdeals')}</li>
              <li>{t('footer.edmunds')}</li>
              <li>{t('footer.wetransfer')}</li>
              <li>{t('footer.allCaseStudies')}</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t('footer.developers')}</h4>
            <ul>
              <li>{t('footer.apiQuickstart')}</li>
              <li>{t('footer.knowledgeBase')}</li>
              <li>{t('footer.tools')}</li>
              <li>{t('footer.apiStatus')}</li>
              <li>{t('footer.fullApiDocs')}</li>
              <li>{t('footer.security')}</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t('footer.resources')}</h4>
            <ul>
              <li>{t('footer.about')}</li>
              <li>{t('footer.careers')}</li>
              <li>{t('footer.newsroom')}</li>
              <li>{t('footer.retailMediaGuide')}</li>
              <li>{t('footer.adServerGuide')}</li>
              <li>{t('footer.help')}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom-row">
        <div className="footer-socials">
          <Link to="/linkedin" className="footer-social-icon" aria-label="LinkedIn"><FaLinkedinIn /></Link>
          <Link to="/x" className="footer-social-icon" aria-label="X"><FaXTwitter /></Link>
          <Link to="/facebook" className="footer-social-icon" aria-label="Facebook"><FaFacebookF /></Link>
          <Link to="/github" className="footer-social-icon" aria-label="GitHub"><FaGithub /></Link>
        </div>
        <div className="footer-copyright">
          {t('footer.copyright', { year: '2025' })}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 