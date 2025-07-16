import React, { useState } from "react";
import "../Style.css";

const SEGMENTS = [
  {
    label: "Create",
    title: "ManagementAPI",
    description: "Create unique, scalable, and performance-driven ads and campaigns via the Management API and Catalog."
  },
  {
    label: "Segment",
    title: "Audience",
    description: "Create custom first-party data segments to captivate the right audiences using Audience or your own machine learning models."
  },
  {
    label: "Forecast",
    title: "ForecastAPI",
    description: "Accurately predict performance to drive efficient ad sales, maximizing your inventory yield management."
  },
  {
    label: "Launch",
    title: "DecisionAPI",
    description: "Power ad selection based on creative data, auctions, and targeting."
  },
  {
    label: "Report",
    title: "ReportingAPI",
    description: "Analyze and report on campaign results."
  }
];

const size = 640;
const center = size / 2;
const outerRadius = 300;
const innerRadius = 180;
const segmentCount = SEGMENTS.length;
const segmentAngle = 360 / segmentCount;

function polarToCartesian(cx, cy, r, angle) {
  const a = ((angle - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(a),
    y: cy + r * Math.sin(a)
  };
}

function describeArc(cx, cy, r1, r2, startAngle, endAngle) {
  // r1: outer radius, r2: inner radius
  const startOuter = polarToCartesian(cx, cy, r1, startAngle);
  const endOuter = polarToCartesian(cx, cy, r1, endAngle);
  const startInner = polarToCartesian(cx, cy, r2, endAngle);
  const endInner = polarToCartesian(cx, cy, r2, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M", startOuter.x, startOuter.y,
    "A", r1, r1, 0, largeArcFlag, 1, endOuter.x, endOuter.y,
    "L", startInner.x, startInner.y,
    "A", r2, r2, 0, largeArcFlag, 0, endInner.x, endInner.y,
    "Z"
  ].join(" ");
}

export default function AdLifecycleDonut() {
  const [active, setActive] = useState(0);

  return (
    <div className="donut-section">
      <h1 className="donut-title">
        The lifecycle of an ad through<br />the Retail Media Cloud<sup>TM</sup>
      </h1>
      <p className="donut-desc">
        The Retail Media Cloud brings together the power of ad serving and machine-learning powered audience targeting to launch unique onsite ad formats. Retailers can easily:
      </p>
      <div className="donut-svg-wrapper" style={{ position: "relative", width: size, height: size, margin: "0 auto" }}>
        <svg width={size} height={size} className="donut-svg">
          {SEGMENTS.map((seg, i) => {
            const startAngle = i * segmentAngle;
            const endAngle = (i + 1) * segmentAngle;
            return (
              <path
                key={seg.label}
                d={describeArc(center, center, outerRadius, innerRadius, startAngle, endAngle)}
                fill={i === active ? "#FF5A36" : "#F3F6F9"}
                stroke="#E0E6ED"
                strokeWidth="2"
                style={{ cursor: "pointer", transition: "fill 0.3s" }}
                onClick={() => setActive(i)}
              />
            );
          })}
          {/* Labels */}
          {SEGMENTS.map((seg, i) => {
            const startAngle = i * segmentAngle + 4; // +4 for a little spacing
            const endAngle = (i + 1) * segmentAngle - 4; // -4 for a little spacing
            const arcRadius = (outerRadius + innerRadius) / 2 + 10;
            const arcId = `arc-label-${i}`;
            // Arc path for the label
            const start = polarToCartesian(center, center, arcRadius, startAngle);
            const end = polarToCartesian(center, center, arcRadius, endAngle);
            const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
            const arcPath = [
              "M", start.x, start.y,
              "A", arcRadius, arcRadius, 0, largeArcFlag, 1, end.x, end.y
            ].join(" ");
            return (
              <g key={seg.label}>
                <path
                  id={arcId}
                  d={arcPath}
                  fill="none"
                  stroke="none"
                />
                <text
                  className={`donut-label${i === active ? " active" : ""}`}
                  style={{
                    fontWeight: 900,
                    fontSize: "2rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    fill: i === active ? "#fff" : "#C3CBD5",
                    textShadow: i === active ? "0 2px 8px #FF5A36" : "none",
                    pointerEvents: "none",
                    userSelect: "none"
                  }}
                >
                  <textPath
                    xlinkHref={`#${arcId}`}
                    startOffset="50%"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    dominantBaseline="middle"
                  >
                    {seg.label}
                  </textPath>
                </text>
              </g>
            );
          })}
        </svg>
        {/* Center Content */}
        <div className="donut-center-content" style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 340,
          height: 220,
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          borderRadius: 0,
          boxShadow: "none",
          padding: 0,
          zIndex: 4
        }}>
          <div className="donut-center-title">{SEGMENTS[active].title}</div>
          <div className="donut-center-desc">{SEGMENTS[active].description}</div>
        </div>
      </div>
    </div>
  );
} 