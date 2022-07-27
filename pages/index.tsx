import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { render, NODE_IMAGE } from "storyblok-rich-text-react-renderer";

import SubscribeForm from "components/SubscribeForm";

import { INVESTORS, PALOMA_WEBSITE, CCC_TELEGRAM } from "utils/constants";
import { fetchHome } from "utils/storyblok";

const Product = ({ product }) => (
  <div className="home-product-container">
    <div className="home-product-content">
      <div className="home-product-info">
        <div className="home-product-for">{product.for}</div>
        <div className="home-product-category">{product.category}</div>
        <div className="home-product-title">{product.description}</div>
      </div>
      <img
        className="home-product-img"
        src={product.image}
        style={product.style}
      />
    </div>
    <div className="home-product-description">
      <div className="home-product-description-left">{product.param1}</div>
      <div className="home-product-description-right">
        <span>{product.param2}</span>
        <a href={product.link} target="_blank" className="home-product-link">
          {product.linkText}
        </a>
      </div>
    </div>
  </div>
);

const ProPosition = ({ position }) => (
  <div className="value-proposition-container">
    <div className="value-proposition-image">
      <img src={position.image} />
    </div>
    <div className="value-proposition-content">
      <span className="value-proposition-title">{position.title}</span>
      <span className="value-proposition-description">
        {position.description}
      </span>
    </div>
  </div>
);

const Review = ({ data }) => (
  <div className="review-container">
    <div className="reviewer-photo">
      <img src={data.photo} />
    </div>
    <div className="reviewer-info">
      {/* <p className="reviewer-info-comment">{data.comment}</p>
      <span className="reviewer-info-name">{data.name}</span>
      <span className="reviewer-info-title">{data.title}</span>
      <img className="reviewer-info-logo" src={data.logo} /> */}
      <div>
        {render(data.content, {
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
      <img className="reviewer-info-logo" src={data.logo} />
    </div>
  </div>
);

export default function Home({ state, router }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const homeData = await fetchHome();
      if (homeData === null) {
        return;
      }

      const homeContent = homeData.content;
      console.log(homeContent);

      const data = {
        pageMainTitle: homeContent.main_title1,
        pageMainText: homeContent.main_text1,

        pageSubTitle: homeContent.main_title2,
        pageSubText: homeContent.main_text2,

        products: [
          {
            for: "For Developers",
            category: homeContent.paloma_title,
            description: homeContent.paloma_subtitle,
            image: "/assets/logo/paloma.png",
            param1: homeContent.paloma_text,
            param2: homeContent.paloma_button_caption,
            linkText: "launch paloma",
            link: PALOMA_WEBSITE,
            style: {},
          },
          {
            for: "For Developers",
            category: homeContent.ccc_title,
            description: homeContent.ccc_subtitle,
            image: "/assets/logo/ccc.svg",
            param1: homeContent.ccc_text,
            param2: homeContent.ccc_button_caption,
            linkText: "join the ccc",
            link: CCC_TELEGRAM,
            style: { height: 98 },
          },
        ],

        propositions: [
          {
            image: "/assets/vectors/1.png",
            title: homeContent.value_prop_title1,
            description: homeContent.value_prop_text1,
          },
          {
            image: "/assets/vectors/2.png",
            title: homeContent.value_prop_title2,
            description: homeContent.value_prop_text2,
          },
          {
            image: "/assets/vectors/3.png",
            title: homeContent.value_prop_title3,
            description: homeContent.value_prop_text3,
          },
          {
            image: "/assets/vectors/4.png",
            title: homeContent.value_prop_title4,
            description: homeContent.value_prop_text4,
          },
        ],

        reviews: [
          {
            name: "Brian Lee",
            title: "Partner, FTX ventures",
            comment: `"Volume is going to be the Twilio for Crypto by making it easy for anyone to create and deploy profitable Defi strategies that can run on multiple chains all at once."`,
            logo: homeContent.quote_logo.filename,
            photo: homeContent.quote_image.filename,
            content: homeContent.quote_text,
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
      <div className="home-page-container">
        <div className="home-top">
          <div className="home-top-text">
            <h1>{data.pageMainTitle}</h1>
            <p className="home-top-description">{data.pageMainText}</p>
            <div className="home-top-images">
              <img src="/assets/logo/paloma.png" />
              <img src="/assets/logo/ccc.svg" className="ccc" />
            </div>
          </div>
        </div>

        <div className="home-software-developers">
          <h2 style={{ maxWidth: 400 }}>{data.pageSubTitle}</h2>
          <p>{data.pageSubText}</p>
          <div className="home-products">
            {data.products.map((product, index) => (
              <Product product={product} key={`home-product-${index}`} />
            ))}
          </div>
        </div>

        <div className="home-value-propositions">
          <h2 className="home-value-propositions-title">Value Propositions</h2>
          <div className="home-propositions-wrapper">
            {data.propositions.map((item, index) => (
              <ProPosition position={item} key={`home-proposition-${index}`} />
            ))}
          </div>
        </div>

        <div className="home-reviewers">
          <Review data={data.reviews[0]} />
        </div>

        <div className="volume-investors">
          <h2 className="volume-investors-title">Investors</h2>
          <Marquee speed={120} gradient={false} loop={0} delay={0}>
            <div>
              {INVESTORS.map((img, index) => (
                <img
                  src={img}
                  style={{ opacity: img.endsWith("newform.png") ? 0.7 : 1 }}
                  className="volume-investor-logo"
                  key={`volume-investor-${index}`}
                />
              ))}
            </div>
          </Marquee>
        </div>

        <div className="newsletter-form">
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
}
