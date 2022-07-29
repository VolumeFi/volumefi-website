import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { render, NODE_IMAGE } from "storyblok-rich-text-react-renderer";

import SubscribeForm from "components/SubscribeForm";

import { CCC_TELEGRAM, CCC_PARTNERS, STORYBLOK_PAGES } from "utils/constants";
import { fetchPageValues } from "utils/storyblok";

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
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const homeData = await fetchPageValues(STORYBLOK_PAGES.ABOUT_US_CCC);
      if (homeData === null) {
        return;
      }

      const content = homeData.content;

      const data = {
        pageMainTitle: content.title,
        pageSubTitle: content.subtitle,

        pageHeaderTitle: content.header,
        pageHeaderTextLeft: content.text_left,
        pageHeaderTextRight: content.text_right,

        pillars: [
          {
            image: "/assets/vectors/1.png",
            category: content.pillar_title1,
            title: content.pillar_subtitle1,
            description: content.pillar_text1,
          },
          {
            image: "/assets/vectors/1.png",
            category: content.pillar_title2,
            title: content.pillar_subtitle2,
            description: content.pillar_text2,
          },
          {
            image: "/assets/vectors/1.png",
            category: content.pillar_title3,
            title: content.pillar_subtitle3,
            description: content.pillar_text3,
          },
        ],
      };

      setData(data);
    };

    getData();
  }, []);

  if (data === null) {
    return <div className="page-container" />;
  }

  return (
    <div className="page-container">
      <div className="about-page-container">
        <div className="about-page-top">
          <div className="top-logo-wrapper">
            <img className="top-logo ccc" src="/assets/logo/ccc2.png" />
          </div>
          <div className="top-content">
            <div className="top-content-title">{data.pageMainTitle}</div>
            <div className="top-content-description">{data.pageSubTitle}</div>
            <a href={CCC_TELEGRAM} target="_blank" className="launch-link">
              join the cross chain coalition
            </a>
          </div>
        </div>

        <div className="ccc-history">
          <h2 className="ccc-history-title">{data.pageHeaderTitle}</h2>
          <div className="ccc-history-content">
            <div className="ccc-history-left">
              {render(data.pageHeaderTextLeft, {
                nodeResolvers: {
                  [NODE_IMAGE]: (children, props) => (
                    <img
                      {...props}
                      style={{ borderRadius: "0px", maxWidth: "100%" }}
                    />
                  ),
                },
              })}
            </div>
            <div className="ccc-history-right">
              {render(data.pageHeaderTextRight, {
                nodeResolvers: {
                  [NODE_IMAGE]: (children, props) => (
                    <img
                      {...props}
                      style={{ borderRadius: "0px", maxWidth: "100%" }}
                    />
                  ),
                },
              })}
            </div>
          </div>
        </div>

        <div className="volume-investors">
          <Marquee speed={120} gradient={false} loop={0} delay={0}>
            <div>
              {CCC_PARTNERS.map((img, index) => (
                <img
                  src={img}
                  style={{
                    opacity:
                      img.endsWith("figment.png") ||
                      img.endsWith("simple-vc.png")
                        ? 0.7
                        : 1,
                  }}
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
            {data.pillars.map((item, index) => (
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
