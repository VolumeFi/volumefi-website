import { ExternalLink, StaticLink } from 'configs/links';

interface Menu {
  title: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  subMenus?: Menu[];
}

export const headerMenus: Menu[] = [
  // {
  //   title: 'Volume Products',
  //   href: StaticLink.Home,
  // },
  {
    title: 'Pricing',
    href: StaticLink.Pricing,
  },
  {
    title: 'About',
    href: StaticLink.About,
  },
  {
    title: 'Careers',
    href: StaticLink.Careers,
  },
];

export const footerMenus: Menu[] = [
  {
    title: 'Products',
    subMenus: [
      {
        title: 'Paloma Swap',
        href: ExternalLink.PalomaSwap,
        target: '_blank',
      },
      {
        title: 'Paloma Bot',
        href: ExternalLink.PalomaBot,
        target: '_blank',
      },
      {
        title: 'Volume SDK',
        href: StaticLink.Home,
      },
    ],
  },
  {
    title: 'Pricing',
    subMenus: [
      {
        title: 'Starter',
        href: StaticLink.Pricing,
      },
      {
        title: 'Pro',
        href: StaticLink.Pricing,
      },
      {
        title: 'Business',
        href: StaticLink.Pricing,
      },
      {
        title: 'Enterprise',
        href: StaticLink.Pricing,
      },
    ],
  },
  {
    title: 'Company Assets',
    subMenus: [
      {
        title: 'Careers',
        href: StaticLink.Careers,
      },
      // {
      //   title: 'Brand Assets',
      //   href: StaticLink.Home,
      // },
    ],
  },
  {
    title: 'Social Media',
    subMenus: [
      {
        title: 'Discord',
        href: ExternalLink.Discord,
        target: '_blank',
      },
      {
        title: 'Twitter',
        href: ExternalLink.Twitter,
        target: '_blank',
      },
      {
        title: 'Linkedin',
        href: ExternalLink.Linkedin,
        target: '_blank',
      },
    ],
  },
];
