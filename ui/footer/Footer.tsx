import { Link } from 'components/Link';
import { StaticLink } from 'shared/configs/links';
import { footerMenus } from 'shared/configs/menus';
import SectionContainer from 'ui/common/SectionContainer';
import style from 'ui/footer/Footer.module.scss';

const Footer = () => (
  <SectionContainer>
    <section className={style.container}>
      <section className={style.section}>
        <section className={style.logoWrapper}>
          <Link href={StaticLink.Home}>
            <img className={style.logo} src="/assets/volume-logo.svg" alt="Logo of Volume" />
          </Link>
          <p className={style.text}>
            For web3 users that want decentralized computation & storage to manage private keys, Volume delivers a new
            approach that promises 100% uptime at the lowest cost.
          </p>
        </section>
        <section className={style.menuWrapper}>
          {footerMenus.map((parentFooterMenu) => (
            <section key={parentFooterMenu.id} className={style.menuBlock}>
              <Link className={style.menuLink} href={parentFooterMenu.href} target={parentFooterMenu.target}>
                {parentFooterMenu.title}
              </Link>
              <section className={style.subMenu}>
                {parentFooterMenu.subMenus?.map((subFooterMenu) => (
                  <Link
                    key={subFooterMenu.id}
                    className={style.subMenuLink}
                    href={subFooterMenu.href}
                    target={subFooterMenu.target}
                  >
                    {subFooterMenu.title}
                  </Link>
                ))}
              </section>
            </section>
          ))}
        </section>
      </section>
      <p className={style.text}>© 2023 Volume. All Rights Reserved.</p>
    </section>
  </SectionContainer>
);

export default Footer;
