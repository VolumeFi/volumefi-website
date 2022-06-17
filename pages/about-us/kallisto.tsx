import React from "react";

import { KALLISTO_WEBSITE } from "utils/constants";

export default function Kallisto({ state, router }) {
  return (
    <div className="page-container">
      <div className="about-page-container">
        <div className="about-page-top">
          <div className="top-logo-wrapper">
            <img className="top-logo" src="/assets/logo/kallisto.png" />
          </div>
          <div className="top-divider"></div>
          <div className="top-content">
            <div className="top-content-title">
              Use Automated liquidity vaults with Kallisto
            </div>
            <a href={KALLISTO_WEBSITE} target="_blank" className="launch-link">
              launch kallisto
            </a>
          </div>
        </div>

        <div className="service-description">
          <div className="service-item">
            Kallisto are automated vaults powered by the Paloma blockchain
          </div>
          <div className="service-item">
            Use Kallisto to automate yield growth and revenues on all EVM and
            Cosmos chain
          </div>
          <div className="service-item">
            Collect fees into perpetuity for your liquidity
          </div>
        </div>

        <div
          className="service-connection"
          style={{ backgroundImage: `url('/assets/about/kallisto.png')` }}
        >
          <div className="service-connection-left"></div>
          <div className="service-connection-right">
            <div className="service-title">
              use Kallisto Automated Liquidity Vaults
            </div>
            <a href={KALLISTO_WEBSITE} target="_blank" className="service-link">
              launch kallisto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
