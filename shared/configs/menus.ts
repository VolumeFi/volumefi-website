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
  {
    id: 'products',
    title: 'Volume Bots',
    subMenus: [
      {
        id: 'products/sniping-bots',
        title: 'Sniping Bots',
        href: StaticLink.SnipingBot,
      },
      {
        id: 'products/trading-bots',
        title: 'Trading Bots',
        href: StaticLink.TradingBot,
      },
      {
        id: 'products/lending-bots',
        title: 'Lending Bots',
        href: StaticLink.LendingBot,
      },
      // {
      //   id: 'products/voting-bots',
      //   title: 'Staking & Voting Bots',
      //   href: StaticLink.VotingBot,
      // },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing',
    href: StaticLink.Pricing,
  },
  {
    id: 'blog',
    title: 'Blog',
    href: StaticLink.Blog,
  },
  {
    id: 'team',
    title: 'Team',
    href: StaticLink.Team,
  },
  // {
  //   id: 'careers',
  //   title: 'Careers',
  //   href: StaticLink.Careers,
  // },
  // {
  //   id: 'blog',
  //   title: 'Blog',
  //   href: StaticLink.Blog,
  // },
  // {
  //   id: 'event',
  //   title: 'Events',
  //   href: StaticLink.Events,
  // },
];

export const footerMenus: Menu[] = [
  {
    id: 'footer/products',
    title: 'Volume Bots',
    subMenus: [
      {
        id: 'footer/products/sniping-bots',
        title: 'Sniping Bots',
        href: StaticLink.SnipingBot,
      },
      {
        id: 'footer/products/trading-bots',
        title: 'Trading Bots',
        href: StaticLink.TradingBot,
      },
      {
        id: 'footer/products/lending-bots',
        title: 'Lending Bots',
        href: StaticLink.LendingBot,
      },
      // {
      //   id: 'footer/products/voting-bots',
      //   title: 'Staking & Voting Bots',
      //   href: StaticLink.VotingBot,
      // },
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
    id: 'footer/company',
    title: 'Company',
    subMenus: [
      {
        id: 'footer/company/team',
        title: 'Team',
        href: StaticLink.Team,
      },
      {
        id: 'footer/company/events',
        title: 'Events',
        href: StaticLink.Events,
      },
      {
        id: 'footer/company/blog',
        title: 'Blog',
        href: StaticLink.Blog,
      },
      {
        id: 'footer/company/careers',
        title: 'Careers',
        href: StaticLink.Careers,
      },
    ],
  },
  {
    id: 'footer/social-media',
    title: 'Social Media',
    subMenus: [
      // {
      //   id: 'footer/social-media/volume-discord',
      //   title: 'Volume Discord',
      //   href: ExternalLink.VolumeDiscord,
      //   target: '_blank',
      // },
      {
        id: 'footer/social-media/paloma-discord',
        title: 'Paloma Discord',
        href: ExternalLink.PalomaDiscord,
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
