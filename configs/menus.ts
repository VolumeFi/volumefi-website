import { StaticLink } from 'configs/links';

interface Menu {
  title: string;
  href?: string;
  onClick?: () => void;
  subMenus?: Menu[];
}

export const headerMenus: Menu[] = [
  {
    title: 'About',
    href: StaticLink.Home,
  },
  {
    title: 'Pricing',
    href: StaticLink.Home,
  },
  {
    title: 'Volume Products',
    href: StaticLink.Home,
  },
];
