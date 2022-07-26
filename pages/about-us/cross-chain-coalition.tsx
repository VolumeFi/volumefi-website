import React from "react";
import Marquee from "react-fast-marquee";

import SubscribeForm from "components/SubscribeForm";

import { PILLARS, CCC_TELEGRAM, CCC_PARTNERS } from "utils/constants";

const Pillar = ({ data }) => (
  <div className="value-proposition-container">
    <div className="value-proposition-image">
      <img src={data.image} />
    </div>
    <div className="value-proposition-content">
      <span className="value-proposition-category">{data.category}</span>
      <span className="value-proposition-title">{data.title}</span>
      <span className="value-proposition-description">{data.description}</span>
    </div>
  </div>
);

export default function CrossChainCoalition({ state, router }) {
  return (
    <div className="page-container">
      <div className="about-page-container">
        <div className="about-page-top">
          <div className="top-logo-wrapper">
            <img className="top-logo ccc" src="/assets/logo/ccc2.png" />
          </div>
          <div className="top-content">
            <div className="top-content-title">
              Moving developers forward to innovate for a cross chain world
            </div>
            <div className="top-content-description">
              Our mission is to expand awareness of cross chain communication
              and cross chain development to drive forward the future of crypto.
            </div>
            <a href={CCC_TELEGRAM} target="_blank" className="launch-link">
              join the cross chain coalition
            </a>
          </div>
        </div>

        <div className="ccc-history">
          <h2 className="ccc-history-title">History</h2>
          <div className="ccc-history-content">
            <div className="ccc-history-left">
              The Cross Chain Coalition (CCC) is a collective of builders that
              have united together to educate developers on cross chain
              infrastructure. <br/><br/>The CCC aims to expand awareness and increase
              education for cross chain development. join us in our journey to
              turn every blockchain engineer into a cross chain engineer.
            </div>
            <div className="ccc-history-right">
              The CCC was founded in May of 2022 by a collection of crypto
              innovators, builders, and investors spanning from various chains
              and ventures.<br/><br/> The current digital asset ecosystem is fragmented by
              chains and tribes all competing for the same future. As
              invigorating as competition can be, we think intra-ecosystem
              competition is ultimately inefficient. If we want to bring the
              world to crypto, we must first bring crypto to the world together.
              The future of crypto is cross chain.
            </div>
          </div>
        </div>


        <div className="volume-investors">
          <Marquee speed={120} gradient={false} loop={0} delay={0}>
            <div>
              {CCC_PARTNERS.map((img, index) => (
                <img
                  src={img}
                  style={{ opacity: img.endsWith("figment.png") || img.endsWith("simple-vc.png") ? 0.7 : 1 }}
                  className="volume-investor-logo"
                  key={`volume-investor-${index}`}
                />
              ))}
            </div>
          </Marquee>
        </div>

        <div className="ccc-pillars">
          <h2 className="ccc-pillars-title">Pillars</h2>
          <div className="ccc-pillars-wrapper">
            {PILLARS.map((item, index) => (
              <Pillar data={item} key={`ccc-pillar-${index}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="newsletter-form">
        <SubscribeForm />
      </div>
    </div>
  );
}
