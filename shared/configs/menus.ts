import { ExternalLink, StaticLink } from 'shared/configs/links';

interface Menu {
  id: string;
  title: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  subMenus?: Menu[];
}

export const headerMenus: Menu[] = [
  // {
  //   id: 'products',
  //   title: 'Volume Products',
  //   subMenus: [
  //     {
  //       id: 'products/paloma-swap',
  //       title: 'PalomaSwap',
  //       href: StaticLink.PalomaSwap,
  //     },
  //     {
  //       id: 'products/paloma-bot',
  //       title: 'Paloma Bot',
  //       href: StaticLink.PalomaBot,
  //     },
  //     {
  //       id: 'products/volume-sdk',
  //       title: 'Volume SDK',
  //       href: StaticLink.VolumeSDK,
  //     },
  //   ],
  // },
  {
    id: 'pricing',
    title: 'Pricing',
    href: StaticLink.Pricing,
  },
  {
    id: 'about',
    title: 'About',
    href: StaticLink.About,
  },
  {
    id: 'careers',
    title: 'Careers',
    href: StaticLink.Careers,
  },
  {
    id: 'blog',
    title: 'Blog',
    href: StaticLink.Blog,
  },
];

export const footerMenus: Menu[] = [
  {
    id: 'footer/products',
    title: 'Products',
    subMenus: [
      {
        id: 'footer/products/paloma-swap',
        title: 'Paloma Swap',
        href: ExternalLink.PalomaSwap,
        target: '_blank',
      },
      {
        id: 'footer/products/paloma-bot',
        title: 'Paloma Bot',
        href: ExternalLink.PalomaBot,
        target: '_blank',
      },
      {
        id: 'footer/products/volume-sdk',
        title: 'Volume SDK',
        href: StaticLink.Home,
      },
    ],
  },
  {
    id: 'footer/pricing',
    title: 'Pricing',
    subMenus: [
      {
        id: 'footer/pricing/starter',
        title: 'Starter',
        href: StaticLink.Pricing,
      },
      {
        id: 'footer/pricing/pro',
        title: 'Pro',
        href: StaticLink.Pricing,
      },
      {
        id: 'footer/pricing/business',
        title: 'Business',
        href: StaticLink.Pricing,
      },
      {
        id: 'footer/pricing/enterprise',
        title: 'Enterprise',
        href: StaticLink.Pricing,
      },
    ],
  },
  {
    id: 'footer/company-assets',
    title: 'Company Assets',
    subMenus: [
      {
        id: 'footer/company-assets/careers',
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
    id: 'footer/social-media',
    title: 'Social Media',
    subMenus: [
      {
        id: 'footer/social-media/discord',
        title: 'Discord',
        href: ExternalLink.Discord,
        target: '_blank',
      },
      {
        id: 'footer/social-media/twitter',
        title: 'Twitter',
        href: ExternalLink.Twitter,
        target: '_blank',
      },
      {
        id: 'footer/social-media/linkedin',
        title: 'Linkedin',
        href: ExternalLink.Linkedin,
        target: '_blank',
      },
    ],
  },
];
