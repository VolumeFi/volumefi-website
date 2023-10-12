import { envParams } from './constants';
const palomaBotUrl = envParams.palomabot ?? '';

export interface IBotsDetails {
  title: string;
  description: string | string[];
  image?: string;
  subImage?: string;
  link: string;
}

export const BotTypes = {
  TRADING_BOT: 'Trading Bots',
  SNIPING_BOT: 'Sniping Bots',
  LENDING_BOT: 'Lending Bots',
  VOTING_STAKING_BOT: 'Voting & Staking Bots',
};

export const AllBots: { [x: string]: IBotsDetails } = {
  [BotTypes.TRADING_BOT]: {
    title: BotTypes.TRADING_BOT,
    description:
      'Trading Bots are market operations applications that enable sophisticated order creation on any blockchain AMM with lowest slippage and gas costs.',
    image: '/assets/bots/trading_bots.png',
    subImage: '/assets/bots/trading_bots_sub.png',
    link: 'trading-bots',
  },
  [BotTypes.SNIPING_BOT]: {
    title: BotTypes.SNIPING_BOT,
    description:
      'Scan decentralize exchange transactions in real-time. Use Palomabot to create criteria to enter and exit positions, automatically.',
    image: '/assets/bots/sniping_bots.png',
    subImage: '/assets/bots/sniping_bots_sub.png',
    link: 'sniping-bots',
  },
  [BotTypes.LENDING_BOT]: {
    title: BotTypes.LENDING_BOT,
    description:
      'Automate digital asset lending, borrowing, collateral maintenance, and loan repayment across multiple blockchains.',
    image: '/assets/bots/lending_bots.png',
    subImage: '/assets/bots/lending_bots_sub.png',
    link: 'lending-bots',
  },
  [BotTypes.VOTING_STAKING_BOT]: {
    title: BotTypes.VOTING_STAKING_BOT,
    description: 'Use decentralized bots to vote your tokens and increase your stake automatically.',
    image: '/assets/bots/voting_bots.png',
    subImage: '/assets/bots/voting_bots_sub.png',
    link: 'voting-bots',
  },
};

export const BotList: { [x: string]: IBotsDetails[] } = {
  [BotTypes.TRADING_BOT]: [
    {
      title: 'Curve TWAP Bot',
      description: 'Spread your large Curve swap order into smaller swaps to reduce slippage',
      image: '/assets/bots/curve_twap_bot.png',
      link: `${palomaBotUrl}/curve-twap/`,
    },
    {
      title: 'Uniswap V2 TWAP',
      description: 'Spread your large Uniswap swap order into smaller swaps to reduce slippage.',
      image: '/assets/bots/uniswapv2_twap_bot.png',
      link: `${palomaBotUrl}/uniswapv2-twap/`,
    },
    {
      title: 'PancakeSwap v2 TWAP',
      description: 'Spread your large BNB Pancakeswap-v2 swap order into smaller swaps to reduce slippage.',
      image: '/assets/bots/pancakewapv2_twap_bot.png',
      link: `${palomaBotUrl}/pancakeswapv2-twap/`,
    },
    {
      title: 'Curve Limit Order Bot',
      description: 'Define your profit taking price on Curve.',
      image: '/assets/bots/curve_limit_order_bot.png',
      link: `${palomaBotUrl}/curve-limit-order/`,
    },
    {
      title: 'Curve Stop Loss Bot',
      description: 'Limit your token losses using deep liquidity.',
      image: '/assets/bots/curve_stop_loss_bot.png',
      link: `${palomaBotUrl}/curve-stop-loss/`,
    },
  ],
  [BotTypes.SNIPING_BOT]: [
    {
      title: 'Gecko Top Gainers Bot',
      description: 'Snipe the largest Uniswap-v2 momentum gainers listed on CoinGecko.',
      image: '/assets/bots/gecko_ai_bot.png',
      link: `${palomaBotUrl}/gecko-ai/`,
    },
    {
      title: 'Gecko New Tokens Bot',
      description: 'Snipe the newest and hottest Uniswap-v2 momentum gainers listed on CoinGecko.',
      image: '/assets/bots/gecko_new_token_bot.png',
      link: `${palomaBotUrl}/coingecko-new-tokens/`,
    },
    {
      title: 'Paloma Momentum Bot',
      description: 'Snipe token momentum profits automatically.',
      image: '/assets/bots/paloma_momentum_bot.png',
      link: `${palomaBotUrl}/momentum/`,
    },
    {
      title: 'Curve Momentum Bot',
      description: 'Snipe Curve AMM token momentum profits automatically.',
      image: '/assets/bots/curve_momentum_bot.png',
      link: `${palomaBotUrl}/curve-momentum/`,
    },
  ],
  [BotTypes.LENDING_BOT]: [
    {
      title: 'Curve Lending Bot',
      description: 'Manage your Curve loans with any collateral and with automatic repayments',
      image: '/assets/bots/curve_lending_bot.png',
      link: `${palomaBotUrl}/curve-lending/`,
    },
  ],
  [BotTypes.VOTING_STAKING_BOT]: [
    {
      title: 'StakeDAO APR Chaser Bot',
      description: "Automatically vote for the highest bribes and highest return proposals on StakeDAO's votemarket.",
      image: '/assets/bots/stakedao_bot.png',
      link: `${palomaBotUrl}/vote-distribution/stake-dao-apr-chaser/`,
    },
  ],
};
