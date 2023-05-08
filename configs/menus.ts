import { StaticLink } from 'configs/links';

interface Menu {
  title: string;
  href?: string;
  onClick?: () => void;
  subMenus?: Menu[];
}

export const headerMenus: Menu[] = [
  {
    title: 'Volume Products',
    href: StaticLink.Home,
  },
  {
    title: 'Pricing',
    href: StaticLink.Pricing,
  },
  {
    title: 'About',
    href: StaticLink.Home,
  },
];

export const footerMenus: Menu[] = [
  {
    title: 'Products',
    href: StaticLink.Home,
    subMenus: [
      {
        title: 'Paloma Swap',
        href: StaticLink.Home,
      },
      {
        title: 'Paloma Bot',
        href: StaticLink.Home,
      },
      {
        title: 'Volume SDK',
        href: StaticLink.Home,
      },
    ],
  },
  {
    title: 'Pricing',
    href: StaticLink.Home,
    subMenus: [
      {
        title: 'Starter',
        href: StaticLink.Home,
      },
      {
        title: 'Pro',
        href: StaticLink.Home,
      },
      {
        title: 'Business',
        href: StaticLink.Home,
      },
      {
        title: 'Enterprise',
        href: StaticLink.Home,
      },
    ],
  },
  {
    title: 'Company Assets',
    href: StaticLink.Home,
    subMenus: [
      {
        title: 'Careers',
        href: StaticLink.Home,
      },
      {
        title: 'Brand Assets',
        href: StaticLink.Home,
      },
    ],
  },
  {
    title: 'Social Media',
    href: StaticLink.Home,
    subMenus: [
      {
        title: 'Starter',
        href: StaticLink.Home,
      },
      {
        title: 'Pro',
        href: StaticLink.Home,
      },
      {
        title: 'Business',
        href: StaticLink.Home,
      },
      {
        title: 'Enterprise',
        href: StaticLink.Home,
      },
    ],
  },
];
