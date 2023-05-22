import { ExternalLink, StaticLink } from 'shared/configs/links';
import { envParams } from './constants';

interface Menu {
  id: string;
  title: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  subMenus?: Menu[];
}

export const headerMenus: Menu[] = [
  {
    id: 'products',
    title: 'Volume Products',
    subMenus: [
      {
        id: 'products/paloma-swap',
        title: 'PalomaSwap',
        href: `${envParams.baseUrl}${StaticLink.PalomaSwap}`,
      },
      {
        id: 'products/paloma-bot',
        title: 'Paloma Bot',
        href: `${envParams.baseUrl}${StaticLink.PalomaBot}`,
      },
      {
        id: 'products/volume-sdk',
        title: 'Volume SDK',
        href: `${envParams.baseUrl}${StaticLink.VolumeSDK}`,
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing',
    href: `${envParams.baseUrl}${StaticLink.Pricing}`,
  },
  {
    id: 'about',
    title: 'About',
    href: `${envParams.baseUrl}${StaticLink.About}`,
  },
  {
    id: 'careers',
    title: 'Careers',
    href: `${envParams.baseUrl}${StaticLink.Careers}`,
  },
  {
    id: 'blog',
    title: 'Blog',
    href: `${envParams.baseUrl}${StaticLink.Blog}`,
  },
  {
    id: 'event',
    title: 'Events',
    href: StaticLink.Events,
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
        href: `${envParams.baseUrl}${StaticLink.PalomaSwap}`,
      },
      {
        id: 'footer/products/paloma-bot',
        title: 'Paloma Bot',
        href: `${envParams.baseUrl}${StaticLink.PalomaBot}`,
      },
      {
        id: 'footer/products/volume-sdk',
        title: 'Volume SDK',
        href: `${envParams.baseUrl}${StaticLink.VolumeSDK}`,
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
        href: `${envParams.baseUrl}${StaticLink.Pricing}`,
      },
      {
        id: 'footer/pricing/pro',
        title: 'Pro',
        href: `${envParams.baseUrl}${StaticLink.Pricing}`,
      },
      {
        id: 'footer/pricing/business',
        title: 'Business',
        href: `${envParams.baseUrl}${StaticLink.Pricing}`,
      },
      {
        id: 'footer/pricing/enterprise',
        title: 'Enterprise',
        href: `${envParams.baseUrl}${StaticLink.Pricing}`,
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
        href: `${envParams.baseUrl}${StaticLink.Careers}`,
      },
      // {
      //   title: 'Brand Assets',
      //   href: `${envParams.baseUrl}${StaticLink.Home,
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
        href: `${envParams.baseUrl}${ExternalLink.Discord}`,
        target: '_blank',
      },
      {
        id: 'footer/social-media/twitter',
        title: 'Twitter',
        href: `${envParams.baseUrl}${ExternalLink.Twitter}`,
        target: '_blank',
      },
      {
        id: 'footer/social-media/linkedin',
        title: 'Linkedin',
        href: `${envParams.baseUrl}${ExternalLink.Linkedin}`,
        target: '_blank',
      },
    ],
  },
];
