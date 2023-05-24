export interface ProductDetail {
  title: string;
  text: string | string[];
  image?: string;
}

export const palomaSwapProducts: ProductDetail[] = [
  {
    title: 'MEV protection for Private Transactions',
    text: 'PalomaSwap allows for users to transact privately without the risk of MEV exploitation.',
    image: '/assets/products/protection.svg',
  },
  {
    title: 'Scheduled Swaps',
    text: 'Pre-schedule swaps based on your strategies and enjoy the flexibility to focus on other things while your trades are executed automatically.',
    image: '/assets/products/scheduled-swaps.svg',
  },
  {
    title: 'Secured by Paloma Validator Set',
    text: 'All scheduled transactions are secured by over 50 enterprise datacenters and their validator operators.',
    image: '/assets/products/validator.svg',
  },
  {
    title: '100% Uptime',
    text: 'Decentralized execution means uptime is 100%. No critical path dependency from Volume.',
    image: '/assets/products/100-uptime.svg',
  },
];

export const palomaBotProducts: ProductDetail[] = [
  {
    title: 'MEV protection for Private Transactions',
    text: 'PalomaBot uses AI algorithms to analyze the blockchain and identify potential MEV opportunities, then automatically executes trades to protect private transactions.',
    image: '/assets/products/protection.svg',
  },
  {
    title: 'Automated MEV Back-Run revenues paid for low-liquidity pools',
    text: 'PalomaBot automatically executes trades to take advantage of earning back-run revenues for its users, maximizing returns from low-liquidity pools and grow their stake with minimal effort.',
    image: '/assets/products/rewards.svg',
  },
  {
    title: 'Scheduled Swaps',
    text: 'Users are able to set recurring swap schedules using PalomaBot, specifying the amount, frequency, and duration of the swaps. Once set up, PalomaBot executes the trades automatically, taking the hassle out of monitoring the market and trading manually.',
    image: '/assets/products/scheduled-swaps.svg',
  },
  {
    title: 'Automated and Private Liquidations',
    text: 'PalomaBot automates the liquidation of private market pools, automating users’ moves at optimal triggers set by our artificially enabled algorithms.',
    image: '/assets/products/liquidation.svg',
  },
  {
    title: 'Automated and Private Vote Distributions',
    text: 'PalomaBot uses advanced algorithms to streamline and automate vote distributions across multiple markets.',
    image: '/assets/products/vote.svg',
  },
  {
    title: 'Custom DeFi Bot Creation Templates for Volume Subscribers',
    text: 'As a subscriber of Volume Finance, users have the ability to build custom PalomaBots, tailored to their specific needs.',
    image: '/assets/products/dashboard.svg',
  },
];

export const volumeSDKProducts: ProductDetail[] = [
  {
    title: 'Python and JavaScript SDK for Paloma Secure Transactions',
    text: 'The Python and JavaScript SDKs offer a flexible and user-friendly interface, allowing developers to quickly build and deploy decentralized applications that meet their specific needs.',
    image: '/assets/products/sdk.svg',
  },
  {
    title: 'Volume Dashboard for API Key Management',
    text: 'This Volume dashboard provides a centralized location for developers to manage their API keys, allowing them to easily create, revoke, and monitor their keys.',
    image: '/assets/products/multi-chain.svg',
  },
  {
    title: 'Onchain custody of Private Keys',
    text: 'Users have full control over their private keys and can securely store and manage them on the blockchain, rather than relying on a centralized third-party custodian.',
    image: '/assets/products/key-management.svg',
  },
  {
    title: 'Volume Authorization Workflows for DeFi',
    text: 'Leverage the power of the Volume workflow authorization engine to establish a comprehensive policy framework for DeFi protocols, exchanges, and application',
    image: '/assets/products/authorization.svg',
  },
];

export const volumeCustodyProducts: ProductDetail[] = [
  {
    title: 'Access Control',
    text: 'Clients leverage Paloma blockchain to create access control policies that will allow clients to control what roles are able to execute digital asset transactions and with what policies.',
    image: '/assets/products/control.svg',
  },
  {
    title: 'Roles and Policies',
    text: [
      'Create roles and policies handled by Paloma key infrastructure',
      'Revoke and recover control independently of Volume',
      'Create role-based limits that are managed for each target chain',
    ],
    image: '/assets/products/roles.svg',
  },
  {
    title: 'Multiple Chain Support',
    text: 'Add support for any public blockchain at any time.',
    image: '/assets/products/multi-chain.svg',
  },
  {
    title: '100% Uptime',
    text: 'Paloma validator set delivers 100% uptime',
    image: '/assets/products/100-uptime.svg',
  },
];
