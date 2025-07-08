import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaGithub } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import "../Style.css";
import ContactModal from "./ContactModal";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <footer className="footer-gradient-bg">
      <div className="footer-cta-section">
        <h2 className="footer-cta-title">Ready to get started?</h2>
        <p className="footer-cta-desc">
          Talk to one of our experts today. Learn how The Retail Media Cloud® can supercharge your retail media network or review our documentation.
        </p>
        <button className="footer-cta-btn" onClick={() => setModalOpen(true)} style={{display:'inline-flex',alignItems:'center',gap:8}}>
          Talk to an expert <FaArrowRight style={{marginLeft:8, verticalAlign:'middle'}} />
        </button>
      </div>
      <div className="footer-main-row">
        <div className="footer-left-block">
          <div className="footer-inbox-title">All ad tech in your inbox</div>
          <div className="footer-inbox-desc">Stay up to date with the latest news.</div>
          <Link to="/blog" className="footer-blog-btn">Go to our blog <FaArrowRight style={{marginLeft:6, verticalAlign:'middle'}} /></Link>
        </div>
        <div className="footer-main-cols">
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li>Raneen One Ad Server</li>
              <li>Raneen One Audience</li>
              <li>Raneen One Console</li>
              <li>Raneen One AI</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li>Marketplaces</li>
              <li>Retail Media</li>
              <li>Delivery Apps</li>
              <li>Financial Media</li>
              <li>All Ad Units</li>
              <li>Sponsored Listings</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Customer Stories</h4>
            <ul>
              <li>MC Sonae</li>
              <li>iFood</li>
              <li>Slickdeals</li>
              <li>Edmunds</li>
              <li>Wetransfer</li>
              <li>All case studies</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Developers</h4>
            <ul>
              <li>API Quickstart</li>
              <li>Knowledge Base</li>
              <li>Tools & Libraries</li>
              <li>API Status</li>
              <li>Full API Docs</li>
              <li>Security/Compliance</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>About Raneen One</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Retail Media Guide</li>
              <li>Ad Server Guide</li>
              <li>Help from support</li>
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
          Copyright © 2025 Raneen One 
        </div>
      </div>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  );
};

export default Footer; 