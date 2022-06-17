import React from "react";

import { PALOMA_WEBSITE, PALOMA_TELEGRAM } from "utils/constants";

export default function Paloma({ state, router }) {
  return (
    <div className="page-container">
      <div className="about-page-container">
        <div className="about-page-top">
          <div className="top-logo-wrapper">
            <img className="top-logo" src="/assets/logo/paloma.png" />
          </div>
          <div className="top-divider"></div>
          <div className="top-content">
            <div className="top-content-title">
              Build your own automatic vaults cross-chain with Paloma
            </div>
            <a href={PALOMA_WEBSITE} target="_blank" className="launch-link">
              launch Paloma
            </a>
          </div>
        </div>

        <div className="service-description">
          <div className="service-item">
            Create the new future of decentralized applications
          </div>
          <div className="service-item">
            Build automated cross chain DApps easily
          </div>
          <div className="service-item">
            Scale multiple smart contracts across multiple chains
          </div>
        </div>

        <div className="service-connection" style={{ background: "#FDF2F2" }}>
          <div className="service-connection-left">
            <img src="/assets/about/paloma.png" />
          </div>
          <div className="service-connection-right">
            <div className="service-title" style={{ color: "#151515" }}>
              Participate in our upcoming TestNET Series
            </div>
            <a
              href={PALOMA_TELEGRAM}
              target="_blank"
              className="service-link"
              style={{ background: "#151515" }}
            >
              JOIN OUR COMMUNITY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
