export interface ProductDetail {
  title: string;
  text: string;
  image?: string;
}

export const palomaSwapProducts: ProductDetail[] = [
  {
    title: 'MEV protection for Private Transactions',
    text: 'PalomaSwap allows for users to transact privately without the risk of MEV exploitation.',
    image: '/assets/products/paloma-swap/mev-protection.svg',
  },
  {
    title: 'Scheduled Swaps',
    text: 'Pre-schedule swaps based on your strategies and enjoy the flexibility to focus on other things while your trades are executed automatically.',
    image: '/assets/products/paloma-swap/scheduled-swaps.svg',
  },
  {
    title: 'Secured by Paloma Validator Set',
    text: 'All scheduled transactions are secured by over 50 enterprise datacenters and their validator operators.',
    image: '',
  },
  {
    title: '100% Uptime',
    text: 'Decentralized execution means uptime is 100%. No critical path dependency from Volume.',
    image: '',
  },
];

export const palomaBotProducts: ProductDetail[] = [
  {
    title: 'MEV protection for Private Transactions',
    text: 'PalomaBot uses AI algorithms to analyze the blockchain and identify potential MEV opportunities, then automatically executes trades to protect private transactions.',
    image: '/assets/products/paloma-bot/mev-prot.svg',
  },
  {
    title: 'Automated MEV Back-Run revenues paid for low-liquidity pools',
    text: 'PalomaBot automatically executes trades to take advantage of earning back-run revenues for its users, maximizing returns from low-liquidity pools and grow their stake with minimal effort.',
    image: '/assets/products/paloma-bot/grain.svg',
  },
  {
    title: 'Scheduled Swaps',
    text: 'Users are able to set recurring swap schedules using PalomaBot, specifying the amount, frequency, and duration of the swaps. Once set up, PalomaBot executes the trades automatically, taking the hassle out of monitoring the market and trading manually.',
    image: '/assets/products/paloma-bot/scheduled-swaps.svg',
  },
  {
    title: 'Automated and Private Liquidations',
    text: 'PalomaBot automates the liquidation of private market pools, automating users’ moves at optimal triggers set by our artificially enabled algorithms.',
    image: '/assets/products/paloma-bot/liquidation.svg',
  },
  {
    title: 'Automated and Private Vote Distributions',
    text: 'PalomaBot uses advanced algorithms to streamline and automate vote distributions across multiple markets.',
    image: '/assets/products/paloma-bot/vote.svg',
  },
  {
    title: 'Custom DeFi Bot Creation Templates for Volume Subscribers',
    text: 'As a subscriber of Volume Finance, users have the ability to build custom PalomaBots, tailored to their specific needs.',
    image: '/assets/products/paloma-bot/custom-bot.svg',
  },
];

export const volumeSDKProducts: ProductDetail[] = [
  {
    title: 'Python and JavaScript SDK for Paloma Secure Transactions',
    text: 'The Python and JavaScript SDKs offer a flexible and user-friendly interface, allowing developers to quickly build and deploy decentralized applications that meet their specific needs.',
    image: '/assets/products/volume-sdk/sdk.svg',
  },
  {
    title: 'Volume Dashboard for API Key Management',
    text: 'This Volume dashboard provides a centralized location for developers to manage their API keys, allowing them to easily create, revoke, and monitor their keys.',
    image: '/assets/products/volume-sdk/dashboard.svg',
  },
  {
    title: 'Onchain custody of Private Keys',
    text: 'Users have full control over their private keys and can securely store and manage them on the blockchain, rather than relying on a centralized third-party custodian.',
    image: '/assets/products/volume-sdk/private-key.svg',
  },
  {
    title: 'Volume Authorization Workflows for DeFi',
    text: 'Leverage the power of the Volume workflow authorization engine to establish a comprehensive policy framework for DeFi protocols, exchanges, and application',
    image: '',
  },
];
