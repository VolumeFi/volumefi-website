import { useMemo, useRef, useState } from 'react';

import classNames from 'classnames';
import { Button } from 'components/Button';
import { Link } from 'components/Link';
import { useRouter } from 'next/router';
import { AllBots, BotList } from 'shared/configs/bots';
import { envParams } from 'shared/configs/constants';
import { ExternalLink, StaticLink } from 'shared/configs/links';
import { headerMenus } from 'shared/configs/menus';
import { useOnClickOutside } from 'shared/hooks';
import style from 'ui/header/desktop/DesktopHeader.module.scss';

const DesktopHeader = () => {
  const ref = useRef(null);
  const linkRef = useRef(null);

  const router = useRouter();
  const [clickedParentMenu, setClickedParentMenu] = useState('');

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

  useOnClickOutside(
    ref,
    () => {
      setClickedParentMenu('');
    },
    [linkRef],
  );

  const handleJoinWaitlist = () => {
    router.push(StaticLink.Signup);
  };

  const handleClickParentMenu = (menu: string) => {
    setClickedParentMenu(clickedParentMenu === menu ? '' : menu);
  };

  const handleClickSubMenu = (menu: string, url: string) => {
    router.push(url);
    setClickedParentMenu(clickedParentMenu === menu ? '' : menu);
  };

  return (
    <section className={style.container}>
      <section className={style.headerContainer}>
        <Link href={StaticLink.Home}>
          <img className={style.logo} src="/assets/volume-logo.svg" alt="Logo of Volume" />
        </Link>
        <section className={style.mainWrapper}>
          {headerMenus.map((menu) => (
            <section key={menu.id} className={style.menuItemWrapper}>
              <Link
                href={menu.href}
                label={menu.title}
                className={classNames(style.menu, { [style.active]: activeMenuIds.includes(menu.id) })}
                forwardedRef={linkRef}
                onClick={() => handleClickParentMenu(menu.title)}
                belowIcon={menu.subMenus && menu.subMenus.length > 0}
              />
              {/* {menu.subMenus && clickedParentMenu === menu.title && (
                <section className={style.subMenuWrapper} ref={ref}>
                  {menu.subMenus.map((subMenu) => (
                    <Link
                      key={subMenu.id}
                      label={subMenu.title}
                      className={classNames(style.menu, {
                        [style.active]: activeMenuIds.includes(subMenu.id),
                      })}
                      onClick={() => handleClickSubMenu(menu.title, subMenu.href ?? '')}
                    />
                  ))}
                </section>
              )} */}
            </section>
          ))}
        </section>
        <section className={style.communityWrapper}>
          <Link href={ExternalLink.PalomaDiscord} target="_blank" label="Community" />
          {/* <Button label="Join the Waitlist" onClick={handleJoinWaitlist} /> */}
          <a href={envParams.palomabot} target="_blank" rel="noreferrer" className={style.launchBot}>
            Launch a Free Bot
          </a>
        </section>
      </section>
      {clickedParentMenu === headerMenus[0].title && (
        <section className={style.botsSubMenuWrapper} ref={ref}>
          <div className={style.botsSubMenu}>
            <div className={style.botsDetails}>
              <h3 className={style.title}>Volume Bots</h3>
              <p className={style.text}>
                Decentralized blockchain trading bots that will enter and exit your positions automatically. All bots
                are run on the Paloma Blockchain. Security provided by the Paloma validator set.
              </p>
            </div>
            {Object.values(AllBots).map((bots) => (
              <Link
                key={bots.title}
                className={classNames(style.botsMenu, {
                  [style.active]: activeMenuIds.includes(bots.link),
                })}
                onClick={() => handleClickSubMenu(bots.title, bots.link ?? '')}
              >
                <div className={style.botType}>
                  <img className={style.image} src={bots.subImage} alt={bots.title} height="22" />
                  {bots.title}
                </div>
                {BotList[bots.title].map((bot) => (
                  <a className={style.subBot} key={bot.title} href={bot.link} target="_blank" rel="noreferrer">{bot.title}</a>
                ))}
              </Link>
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export default DesktopHeader;
