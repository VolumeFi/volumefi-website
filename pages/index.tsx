import React from "react";
import Marquee from "react-fast-marquee";

import SubscribeForm from "components/SubscribeForm";

import { PRODUCTS, PROPOSITIONS, REVIEWS, INVESTORS } from "utils/constants";

const Product = ({ product }) => (
  <div className="home-product-container">
    <div className="home-product-content">
      <div className="home-product-info">
        <div className="home-product-for">{product.for}</div>
        <div className="home-product-category">{product.category}</div>
        <div className="home-product-title">{product.description}</div>
      </div>
      <img className="home-product-img" src={product.image} style={product.style}/>
    </div>
    <div className="home-product-description">
      <div className="home-product-description-left">
        {product.param1}
      </div>
      <div className="home-product-description-right">
        <span>{product.param2}</span>
        <a href={product.link} target="_blank" className="home-product-link">{product.linkText}</a>
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
      <p className="reviewer-info-comment">{data.comment}</p>
      <span className="reviewer-info-name">{data.name}</span>
      <span className="reviewer-info-title">{data.title}</span>
      <img className="reviewer-info-logo" src={data.logo} />
    </div>
  </div>
);

export default function Home({ state, router }) {
  return (
    <div className="page-container">
      <div className="home-page-container">
        <div className="home-top">
          <div className="home-top-text">
            <h1>{process.env.LANDING_TITLE}</h1>
            <p className="home-top-description">
              {process.env.VOLUME_MISSION}
            </p>
            <div className="home-top-images">
              <img src="/assets/logo/paloma.png"/>
              <img src="/assets/logo/ccc.svg" className="ccc" />
            </div>
          </div>
        </div>

        <div className="home-software-developers">
          <h2>
            For blockchain
            <br /> software developers{" "}
          </h2>
          <p>
            {process.env.VOLUME_PROVIDING}
          </p>
          <div className="home-products">
            {PRODUCTS.map((product, index) => (
              <Product product={product} key={`home-product-${index}`} />
            ))}
          </div>
        </div>

        <div className="home-value-propositions">
          <h2 className="home-value-propositions-title">Value Propositions</h2>
          <div className="home-propositions-wrapper">
            {PROPOSITIONS.map((item, index) => (
              <ProPosition position={item} key={`home-proposition-${index}`} />
            ))}
          </div>
        </div>

        <div className="home-reviewers">
          <Review data={REVIEWS[0]} />
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
