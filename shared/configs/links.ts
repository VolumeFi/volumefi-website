export enum StaticLink {
  Home = '/',
  Pricing = '/pricing',
  Careers = '/careers',
  Signup = '/signup',
  SignupSuccess = '/signup/success',
  PalomaSwap = '/products/paloma-swap',
  PalomaBot = '/products/paloma-bot',
  VolumeSDK = '/products/volume-sdk',
  VolumeCustody = '/products/volume-custody',
  Blog = '/blog',
  Events = '/events',
  Team = '/team',
  Message = '/message',
  MessageSuccess = '/message/success',
  SnipingBot = '/sniping-bots',
  TradingBot = '/trading-bots',
  LendingBot = '/lending-bots',
  VotingBot = '/voting-bots',
}

export enum ExternalLink {
  VolumeDiscord = 'https://discord.gg/Ebh6YjMShu',
  PalomaDiscord = 'https://discord.gg/tNqkNHvVNc',
  Twitter = 'https://twitter.com/volumefi',
  Linkedin = 'https://www.linkedin.com/company/volumefi/',
  PalomaSwap = 'https://www.palomaswap.com/',
  PalomaBot = 'https://www.palomabot.ai/',
  Lever = 'https://jobs.lever.co/volume-finance',
}

export const getBlogDetailLink = (slug: string) => `${StaticLink.Blog}/${slug}`;
