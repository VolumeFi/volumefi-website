export interface botsDetail {
  title: string;
  text: string | string[];
  image?: string;
  link?: string;
}

export const ourBots: botsDetail[] = [
  {
    title: 'Curve MultiWAP',
    text: 'Spread your swap into multiple smaller swaps on curve.',
    image: '/assets/bots/Multiple_Curve_TWAP_Bot.png',
    link: 'https://www.palomabot.ai/curve-twap/',
  },
  {
    title: 'Curve Momentum Bot',
    text: 'Swap tokens with highest inter and intra-day price momentum on Curve.',
    image: '/assets/bots/Curve_Momentum_Bot.png',
    link: 'https://www.palomabot.ai/curve-momentum/',
  },
  {
    title: 'Curve Limit Order Bot',
    text: 'Define your profit taking price on Curve.',
    image: '/assets/bots/Curve_Limit_Order_Bot.png',
    link: 'https://www.palomabot.ai/curve-limit-order/',
  },
  {
    title: 'Paloma Momentum Bot',
    text: 'Swap tokens with highest inter and intra-day price momentum.',
    image: '/assets/bots/Momentum_Bot.png',
    link: 'https://www.palomabot.ai/momentum',
  },
  {
    title: 'Gecko Bot',
    text: 'Coingecko trending tokens Bots.',
    image: '/assets/bots/GeckoAi_Bot.svg',
    link: 'https://www.palomabot.ai/gecko-ai/lists/?lag_return=6&daily_volume=0&vol_30=1&market_cap=1',
  },
]