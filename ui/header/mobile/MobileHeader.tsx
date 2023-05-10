import { useState } from 'react';

import classNames from 'classnames';
import { Button } from 'components/Button';
import { Link } from 'components/Link';
import { StaticLink } from 'configs/links';
import { headerMenus } from 'configs/menus';
import { useRouter } from 'next/router';
import style from 'ui/header/mobile/MobileHeader.module.scss';

const MobileHeader = () => {
  const router = useRouter();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClickMenu = (href: string) => {
    router.push(href);
    setShowMobileMenu(false);
  };

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
              <Button
                key={menu.title}
                variant="link"
                className={classNames(style.menu, { [style.active]: menu.href && router.route.includes(menu.href) })}
                onClick={() => handleClickMenu(menu.href ?? '')}
              >
                {menu.title}
              </Button>
            ))}
          </section>
        </section>
      )}
    </section>
  );
};

export default MobileHeader;
