import { Button } from 'components/Button';
import { Link } from 'components/Link';

import { StaticLink } from 'configs/links';
import { headerMenus } from 'configs/menus';

import style from 'ui/header/Header.module.scss';

const Header = () => (
  <section className={style.container}>
    <section className={style.headerContainer}>
      <Link href={StaticLink.Home}>
        <img className={style.logo} src="/assets/volume-logo.svg" alt="Logo of Volume" />
      </Link>
      <section className={style.mainWrapper}>
        {headerMenus.map((menu) => (
          <Link key={menu.title} href={menu.href} label={menu.title} />
        ))}
      </section>
      <section className={style.communityWrapper}>
        <Link href={StaticLink.Home} label="Community" />
        <Button label="Join the Waitlist" />
      </section>
    </section>
  </section>
);

export default Header;
