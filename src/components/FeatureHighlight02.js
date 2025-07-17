import React from "react";
import { Gauge, ShieldCheck, SlidersHorizontal, CloudCog } from "lucide-react";

const features = [
  {
    icon: <Gauge size={36} strokeWidth={2} />,
    label: "50 ms latency",
  },
  {
    icon: <ShieldCheck size={36} strokeWidth={2} />,
    label: "Privacy compliant",
  },
  {
    icon: <SlidersHorizontal size={36} strokeWidth={2} />,
    label: "Never ad blocked",
  },
  {
    icon: <CloudCog size={36} strokeWidth={2} />,
    label: "SaaS Pricing",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="feature-highlights-bg">
      <div className="feature-highlights-container">
        <h2 className="feature-highlights-title">
          Why Leading Retailers Build on<br />Raneen One
        </h2>
        <div className="feature-highlights-cards">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-label">{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}