import { useState } from 'react';

import { Button } from 'components/Button';
import { Link } from 'components/Link';
import { StaticLink } from 'configs/links';
import { headerMenus } from 'configs/menus';
import style from 'ui/header/mobile/MobileHeader.module.scss';

const MobileHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleToggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <section className={style.container}>
      <section className={style.headerContainer}>
        <Link href={StaticLink.Home}>
          <img className={style.logo} src="/assets/volume-logo.svg" alt="Logo of Volume" />
        </Link>
        <Button variant="text" onClick={handleToggleMobileMenu}>
          <img className={style.hamburger} src="/assets/hamburger.svg" alt="Open menu" />
        </Button>
      </section>
      {showMobileMenu && (
        <section className={style.mobileMenuContainer}>
          <section className={style.headerContainer}>
            <Link href={StaticLink.Home}>
              <img className={style.logo} src="/assets/volume-logo.svg" alt="Logo of Volume" />
            </Link>
            <Button variant="text" onClick={handleToggleMobileMenu}>
              <img className={style.hamburger} src="/assets/hamburger.svg" alt="Open menu" />
            </Button>
          </section>
          <section className={style.menuWrapper}>
            {headerMenus.map((menu) => (
              <Link key={menu.title} href={menu.href} label={menu.title} className={style.menu} />
            ))}
          </section>
        </section>
      )}
    </section>
  );
};

export default MobileHeader;
