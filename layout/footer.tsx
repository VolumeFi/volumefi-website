import React from "react";
import Link from "next/link";

import { SOCIALS, VOLUME_COMMUNITY } from "utils/constants";

const Footer = () => (
  <div className="footer-container">
    <div className="footer-view">
      <div className="footer-view-left">
        <h3>Let's Connect!</h3>
        <div className="social-icons">
          {SOCIALS.map((icon, index) => (
            <a
              href={icon.link}
              target="_blank"
              key={`footer-social-icons-${index}`}
            >
              <img src={icon.icon} />
            </a>
          ))}
        </div>
      </div>
      <div className="footer-view-right">
        <h3>Careers</h3>
        <p>
          Come and work with us! We are always looking for great and intelligent
          people to join our international team.
        </p>
        <Link href="/careers">
          <div className="join-volume">JOIN VOLUME</div>
        </Link>
      </div>
    </div>
    <div className="footer-divider"></div>
    <div className="footer-copyright">
      <span>©2022 VOLUME</span>
      <img src="/assets/logo/volume.png" />
    </div>
  </div>
);

export default Footer;
