import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { useOutsideAlerter } from "hooks";
import { VOLUME_COMMUNITY } from "utils/constants";

import cn from "classnames";

const HeaderMenu = ({
  title,
  isLink = true,
  href = "",
  onClick = () => {},
  className = "",
  active = false,
  img = "",
  children = null,
  childrenRef = null,
  childrenOpen = false,
  hoverClassName = ""
}) => {
  return isLink ? (
    <Link href={href}>
      <div
        className={cn(className, {
          active,
        })}
      >
        <span>{title}</span>
        {img !== "" && active && <img src={`${img}.png`} />}
        {img !== "" && !active && <img src={`${img}-black.png`} />}
      </div>
    </Link>
  ) : (
    <div ref={childrenRef} onClick={(e) => onClick()} className={hoverClassName}>
      <div
        className={cn(className, {
          active,
        })}
      >
        <span>{title}</span>
        {img !== "" && <img src={`${img}.png`} />}
      </div>
      {/* {childrenOpen && children} */}
      {children}
    </div>
  );
};

const LayoutHeader = ({ router }) => {
  const [curLink, setCurLink] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [eventSubMenuOpen, setEventSubMenuOpen] = useState(false);
  const eventSubMenuRef = useRef(null);
  useOutsideAlerter(eventSubMenuRef, () => {
    setEventSubMenuOpen(false);
  });

  const [eventMobileSubMenuOpen, setEventMobileSubMenuOpen] = useState(false);

  useEffect(() => {
    if (router.route.startsWith("/event")) {
      setEventMobileSubMenuOpen(true);
    }
  }, [router.route]);

  const handleClickMobileLink = (link) => {
    setMobileMenuOpen(false);
    router.push(link);
  };

  return (
    <header className="layout-container__header">
      <div className="layout-container__header__logo">
        <Link href="/">
          <img className="" src="/assets/logo/volume.png" alt="Volume" />
        </Link>
      </div>
      <div className="layout-container__header__buttons">
        <HeaderMenu
          title="About Us"
          isLink={false}
          className="header-button"
          active={curLink.startsWith("/about-us")}
          img="/assets/arrows/chevron-down"
          childrenOpen={true}
          hoverClassName="header-parent-menu"
        >
          <div className="header-menu-sub">
            <HeaderMenu
              title="Kallisto"
              href="/about-us/kallisto"
              className="header-menu-sub-link"
              active={curLink.startsWith("/about-us/kallisto")}
            />
            <HeaderMenu
              title="Paloma"
              href="/about-us/paloma"
              className="header-menu-sub-link"
              active={curLink.startsWith("/about-us/paloma")}
            />
            <HeaderMenu
              title="Cross-Chain Coalition"
              href="/about-us/cross-chain-coalition"
              className="header-menu-sub-link"
              active={curLink.startsWith("/about-us/cross-chain-coalition")}
            />
          </div>
        </HeaderMenu>
        <HeaderMenu
          title="Blog"
          href="/blog"
          className="header-button"
          active={curLink.startsWith("/blog")}
        />
        <HeaderMenu
          title="Events"
          isLink={false}
          className="header-button"
          active={curLink.startsWith("/event")}
          img="/assets/arrows/chevron-down"
          childrenOpen={true}
          hoverClassName="header-parent-menu"
        >
          <div className="header-menu-sub">
            <HeaderMenu
              title="Upcoming Events"
              href="/event/upcoming-events"
              className="header-menu-sub-link"
              active={curLink.startsWith("/event/upcoming-events")}
            />
            <HeaderMenu
              title="Past Events"
              href="/event/past-events"
              className="header-menu-sub-link"
              active={curLink.startsWith("/event/past-events")}
            />
          </div>
        </HeaderMenu>
        <HeaderMenu
          title="Team"
          href="/team"
          className="header-button"
          active={curLink.startsWith("/team")}
        />
        <HeaderMenu
          title="Careers"
          href="/careers"
          className="header-button"
          active={curLink.startsWith("/careers")}
        />
        <a
          href={VOLUME_COMMUNITY}
          className="header-button community"
          target="_blank"
        >
          <span>Join our Community</span>
        </a>
      </div>
      <div className="layout-container__header__hamburger">
        <img
          src="/assets/icons/hamburger.png"
          onClick={(e) => setMobileMenuOpen(true)}
        />
      </div>
      {mobileMenuOpen && (
        <div className="mobile-header-menu">
          <div className="mobile-header-menu-top">
            <img className="mobile-logo" src="/assets/logo/volume.png" />
            <img
              className="mobile-menu-close"
              src="/assets/icons/close.png"
              onClick={(e) => setMobileMenuOpen(false)}
            />
          </div>
          <div className="mobile-header-menu-menus">
            <HeaderMenu
              title="About Us"
              isLink={false}
              className="mobile-button"
              active={curLink.startsWith("/about-us")}
              img="/assets/arrows/chevron-down"
              childrenOpen={eventMobileSubMenuOpen}
              onClick={() =>
                setEventMobileSubMenuOpen(!eventMobileSubMenuOpen)
              }
            >
              <div className="mobile-menu-sub">
                <HeaderMenu
                  title="Kallisto"
                  href="/about-us/kallisto"
                  className="mobile-menu-sub-link"
                  active={curLink.startsWith("/about-us/kallisto")}
                  isLink={false}
                  onClick={() =>
                    handleClickMobileLink("/about-us/kallisto")
                  }
                />
                <HeaderMenu
                  title="Paloma"
                  href="/about-us/paloma"
                  className="mobile-menu-sub-link"
                  active={curLink.startsWith("/about-us/paloma")}
                  isLink={false}
                  onClick={() => handleClickMobileLink("/about-us/paloma")}
                />
                <HeaderMenu
                  title="Cross-Chain Coalition"
                  href="/about-us/cross-chain-coalition"
                  className="mobile-menu-sub-link"
                  active={curLink.startsWith("/about-us/cross-chain-coalition")}
                  isLink={false}
                  onClick={() => handleClickMobileLink("/about-us/cross-chain-coalition")}
                />
              </div>
            </HeaderMenu>
            <HeaderMenu
              title="Blog"
              href="/blog"
              isLink={false}
              className="mobile-button"
              active={curLink.startsWith("/blog")}
              onClick={() => handleClickMobileLink("/blog")}
            />
            <HeaderMenu
              title="Events"
              isLink={false}
              className="mobile-button"
              active={curLink.startsWith("/event")}
              img="/assets/arrows/chevron-down"
              childrenOpen={eventMobileSubMenuOpen}
              onClick={() =>
                setEventMobileSubMenuOpen(!eventMobileSubMenuOpen)
              }
            >
              <div className="mobile-menu-sub">
                <HeaderMenu
                  title="Upcoming Events"
                  href="/event/upcoming-events"
                  className="mobile-menu-sub-link"
                  active={curLink.startsWith("/event/upcoming-events")}
                  isLink={false}
                  onClick={() =>
                    handleClickMobileLink("/event/upcoming-events")
                  }
                />
                <HeaderMenu
                  title="Past Events"
                  href="/event/past-events"
                  className="mobile-menu-sub-link"
                  active={curLink.startsWith("/event/past-events")}
                  isLink={false}
                  onClick={() => handleClickMobileLink("/event/past-events")}
                />
              </div>
            </HeaderMenu>
            <HeaderMenu
              title="Team"
              href="/team"
              isLink={false}
              className="mobile-button"
              active={curLink.startsWith("/team")}
              onClick={() => handleClickMobileLink("/team")}
            />
            <HeaderMenu
              title="Careers"
              href="/careers"
              isLink={false}
              className="mobile-button"
              active={curLink.startsWith("/careers")}
              onClick={() => handleClickMobileLink("/careers")}
            />
            <div className="mobile-menu-spacer"></div>
            <a
              href={VOLUME_COMMUNITY}
              className="mobile-button community"
              target="_blank"
            >
              <span>Join our Community</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default LayoutHeader;
