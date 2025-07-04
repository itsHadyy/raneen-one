import React from 'react';
import { FaChartLine, FaMagic, FaUsersCog, FaCogs } from 'react-icons/fa';
import './AIDrivenRetailMediaSection.css';

const features = [
  {
    icon: <FaChartLine size={32} color="#e94f4f" />,
    title: 'Yield Forecast',
    desc: 'Raneen One forecast uses advanced machine learning simulations to predict future delivery and performance. Sell, plan and optimize while boosting sell-through rates, fill-rates and ad operations efficiency.'
  },
  {
    icon: <FaMagic size={32} color="#e94f4f" />,
    title: 'Custom Relevancy',
    desc: 'With Custom Relevancy retailers can BYOM: bring your own model. Now, retailers can supply their own models and use them to help choose the most relevant ad based on their data.'
  },
  {
    icon: <FaUsersCog size={32} color="#00bfae" />,
    title: 'AI Segment Builder',
    desc: 'Raneen One Audience allows retailers to leverage AI in building segments by focusing on the desired outcome and constructing targetable segments based on that goal.'
  },
  {
    icon: <FaCogs size={32} color="#2979ff" />,
    title: 'AI Campaign Management',
    desc: 'Improve your ad operations with an intuitive, AI driven interface that optimizes workflows helping retailers manage inventory, data assets and campaign performance while delivering best-in-class ROAS.'
  },
];

const AIDrivenRetailMediaSection = () => (
  <section className="ai-retail-media-section">
    <div className="ai-retail-media-header">
      <h2>AI Driven Retail Media</h2>
      <p className="ai-retail-media-desc">
        The Retail Media Cloud® includes advanced AI and ML features that help drive results for you and your advertisers. Here are just some examples of those AI powered features found in Ad Server, Audience and Console.
      </p>
    </div>
    <div className="ai-retail-media-cards">
      {features.map((f) => (
        <div
          key={f.title}
          className="ai-retail-media-card"
        >
          <div className="ai-retail-media-card-icon">{f.icon}</div>
          <div className="ai-retail-media-card-title">{f.title}</div>
          <div className="ai-retail-media-card-desc">{f.desc}</div>
        </div>
      ))}
    </div>
  </section>
);

export default AIDrivenRetailMediaSection; 