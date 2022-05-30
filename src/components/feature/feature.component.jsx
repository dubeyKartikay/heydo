import React from "react";
import './feature.styles.scss'
export default function Feature({ feature, index }) {
  const FeatureElements = [<img className={feature.cssClasses} src={feature.icon} alt="" />, <div className="feature-text">
    <h1>{feature.heading}</h1>
    <p>{feature.subText}</p>
  </div>]
  if (index % 2 == 1) {
    FeatureElements.reverse();
  }
  return (
    <div className="feature">
      {
        FeatureElements.map((ele) => ele)

      }
    </div>
  )
}
