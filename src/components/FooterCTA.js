import React, { useState } from "react";
import ContactModal from "./ContactModal";
import { FaArrowRight } from "react-icons/fa";


function FooterCTA() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
            <div className="footer-cta-section">
                <h2 className="footer-cta-title">Ready to get started?</h2>
                <p className="footer-cta-desc">
                    Talk to one of our experts today. Learn how The Retail Media Cloud® can supercharge your retail media network or review our documentation.
                </p>
                <button className="footer-cta-btn" onClick={() => setModalOpen(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    Talk to an expert <FaArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
                </button>
            </div>
            <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    )
}

export default FooterCTA;