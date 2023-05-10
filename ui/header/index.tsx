import DesktopHeader from 'ui/header/desktop/DesktopHeader';
import style from 'ui/header/index.module.scss';
import MobileHeader from 'ui/header/mobile/MobileHeader';

const Header = () => (
  <section className={style.container}>
    <section className={style.desktop}>
      <DesktopHeader />
    </section>
    <section className={style.mobile}>
      <MobileHeader />
    </section>
  </section>
);

export default Header;
