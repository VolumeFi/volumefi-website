import { Link } from 'components/Link';
import { StaticLink } from 'configs/links';
import { footerMenus } from 'configs/menus';
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
        </section>
        <section className={style.menuWrapper}>
          {footerMenus.map((parentFooterMenu) => (
            <section key={parentFooterMenu.title} className={style.menuBlock}>
              {parentFooterMenu.href ? (
                <Link className={style.menuLink} href={parentFooterMenu.href} target={parentFooterMenu.target}>
                  {parentFooterMenu.title}
                </Link>
              ) : (
                <div className={style.menuLink}>{parentFooterMenu.title}</div>
              )}
              <section className={style.subMenu}>
                {parentFooterMenu.subMenus?.map((subFooterMenu) => (
                  <Link
                    key={`${parentFooterMenu.title}-${subFooterMenu.title}`}
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
