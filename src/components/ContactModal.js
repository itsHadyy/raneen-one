import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Style.css";
import "./ContactModal.css";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, scale: 0.96, y: -40, transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] } }
};

const ContactModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="contact-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="contact-modal-content"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={e => e.stopPropagation()}
        >
          <button className="contact-modal-close" onClick={onClose}>&times;</button>
          <h2 className="contact-modal-title">Talk to an expert</h2>
          <p className="contact-modal-desc">Learn more about how Raneen One can support your ad business with a 30 minute introductory call.</p>
          <form>
            <div className="contact-modal-row">
              <input placeholder="First name*" className="contact-modal-input" />
              <input placeholder="Last name*" className="contact-modal-input" />
            </div>
            <div className="contact-modal-row">
              <input placeholder="Business Email*" className="contact-modal-input" />
              <input placeholder="Phone number*" className="contact-modal-input" />
            </div>
            <div className="contact-modal-row-full">
              <input placeholder="Company name*" className="contact-modal-input" />
            </div>
            <div className="contact-modal-row">
              <select className="contact-modal-input" defaultValue="">
                <option value="" disabled>Select Your Industry*</option>
                <option>Retail</option>
                <option>Marketplace</option>
                <option>Delivery</option>
                <option>Finance</option>
                <option>Other</option>
              </select>
              <select className="contact-modal-input" defaultValue="United States">
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Other</option>
              </select>
            </div>
            <div className="contact-modal-row">
              <select className="contact-modal-input" defaultValue="">
                <option value="" disabled>Do you already have an existing ad platform?</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              <select className="contact-modal-input" defaultValue="">
                <option value="" disabled>Which one of these best describes you?*</option>
                <option>Brand</option>
                <option>Agency</option>
                <option>Retailer</option>
                <option>Other</option>
              </select>
            </div>
            <div className="contact-modal-row-full">
              <textarea placeholder="Anything else you would like to share?" className="contact-modal-input" rows={3} />
            </div>
            <div className="contact-modal-row-full" style={{marginBottom:12}}>
              <label className="contact-modal-checkbox">
                <input type="checkbox" />
                I consent to marketing communications from Raneen One.
              </label>
            </div>
            <button type="submit" className="contact-modal-submit">Get Started</button>
          </form>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ContactModal; 