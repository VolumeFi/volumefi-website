import React, { useMemo, useState } from 'react';

import classNames from 'classnames';
import { Button } from 'components/Button';
import { Link } from 'components/Link';
import { useRouter } from 'next/router';
import { StaticLink } from 'shared/configs/links';
import { headerMenus } from 'shared/configs/menus';
import style from 'ui/header/mobile/MobileHeader.module.scss';

const MobileHeader = () => {
  const router = useRouter();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const activeMenuIds = useMemo(() => {
    const route = router.route;

    const activeMenus: string[] = [];

    for (const menu of headerMenus) {
      if (menu.href && route.includes(menu.href)) {
        activeMenus.push(menu.id);
      }

      if (!menu.subMenus) continue;

      for (const subMenu of menu.subMenus) {
        if (subMenu.href && route.includes(subMenu.href)) {
          activeMenus.push(subMenu.id);
          activeMenus.push(menu.id);

          break;
        }
      }
    }
    return activeMenus;
  }, [router.route]);

  const handleClickMenu = (href: string | undefined) => {
    if (href) {
      router.push(href);
      setShowMobileMenu(false);
    }
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
              <React.Fragment key={menu.id}>
                <Button
                  variant="link"
                  className={classNames(style.menu, { [style.active]: activeMenuIds.includes(menu.id) })}
                  onClick={() => handleClickMenu(menu.href)}
                >
                  {menu.title}
                </Button>
                {menu.subMenus && (
                  <section className={style.subMenuWrapper}>
                    {menu.subMenus.map((subMenu) => (
                      <Button
                        key={subMenu.id}
                        variant="link"
                        className={classNames(style.menu, { [style.active]: activeMenuIds.includes(subMenu.id) })}
                        onClick={() => handleClickMenu(subMenu.href)}
                      >
                        {subMenu.title}
                      </Button>
                    ))}
                  </section>
                )}
              </React.Fragment>
            ))}
          </section>
        </section>
      )}
    </section>
  );
};

export default MobileHeader;
