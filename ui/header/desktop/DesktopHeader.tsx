import classNames from 'classnames';
import { Button } from 'components/Button';
import { Link } from 'components/Link';
import { ExternalLink, StaticLink } from 'configs/links';
import { headerMenus } from 'configs/menus';
import { useRouter } from 'next/router';
import style from 'ui/header/desktop/DesktopHeader.module.scss';

const DesktopHeader = () => {
  const router = useRouter();

  return (
    <section className={style.container}>
      <section className={style.headerContainer}>
        <Link href={StaticLink.Home}>
          <img className={style.logo} src="/assets/volume-logo.svg" alt="Logo of Volume" />
        </Link>
        <section className={style.mainWrapper}>
          {headerMenus.map((menu) => (
            <Link
              key={menu.title}
              href={menu.href}
              label={menu.title}
              className={classNames(style.menu, { [style.active]: menu.href && router.route.includes(menu.href) })}
            />
          ))}
        </section>
        <section className={style.communityWrapper}>
          <Link href={ExternalLink.Discord} target="_blank" label="Community" />
          <Button label="Join the Waitlist" />
        </section>
      </section>
    </section>
  );
};

export default DesktopHeader;
