import React, { useState, useEffect } from "react";

import {
  PALOMA_WEBSITE,
  PALOMA_TELEGRAM,
  STORYBLOK_PAGES,
} from "utils/constants";
import { fetchPageValues } from "utils/storyblok";

export default function Paloma({ state, router }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const homeData = await fetchPageValues(STORYBLOK_PAGES.ABOUT_US_PALOMA);
      if (homeData === null) {
        return;
      }

      const content = homeData.content;

      const data = {
        pageMainTitle: content.title_top,

        services: [
          content.value_prop1,
          content.value_prop2,
          content.value_prop3,
        ],

        boxTitle: content.title_box,
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
            <img className="top-logo" src="/assets/logo/paloma-red.png" />
          </div>
          <div className="top-content">
            <div className="top-content-title">{data.pageMainTitle}</div>
            <a href={PALOMA_WEBSITE} target="_blank" className="launch-link">
              launch Paloma
            </a>
          </div>
        </div>

        <div className="service-description">
          {data.services.map((item, index) => (
            <div
              className="service-item"
              key={`service-description-item-${index}`}
            >
              Create the new future of decentralized applications
            </div>
          ))}
        </div>

        <div className="service-connection" style={{ background: "#FDF2F2" }}>
          <div className="service-connection-left">
            <img src="/assets/about/paloma.png" />
          </div>
          <div className="service-connection-right">
            <div className="service-title" style={{ color: "#151515" }}>
              {data.boxTitle}
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
