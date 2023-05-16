export interface ServiceAvailable {
  name: string;
  available: string[];
}

export interface Price {
  name: string;
  value: number;
  period: string;
}

export interface PriceBenefits {
  name: string;
  disabled?: boolean;
}

export interface PriceOption {
  name: string;
  price: Price;
  isPopular: boolean;
  benefits: PriceBenefits[];
}

export enum PriceType {
  Starter = 'Starter',
  Pro = 'Pro',
  Business = 'Business',
  Enterprise = 'Enterprise',
}

export const priceOptions: PriceOption[] = [
  {
    name: PriceType.Starter,
    price: {
      name: 'Free',
      value: 0,
      period: '',
    },
    isPopular: false,
    benefits: [
      {
        name: '25 API Calls/seconds',
      },
      {
        name: '20,000 Call Request',
      },
      {
        name: '1 Blockchain Access',
      },
      {
        name: 'MEV Front-Run Protection',
        disabled: true,
      },
      {
        name: 'MEV Back-Run Revenue',
        disabled: true,
      },
      {
        name: 'SDK Access',
      },
      {
        name: 'API Documentation Access',
      },
      {
        name: '1 Bot',
      },
      {
        name: '1 Key',
      },
      {
        name: 'Fiat On-ramp and Off-ramp',
      },
      {
        name: '99% Uptime SLA',
      },
      {
        name: 'Limited Support <48 hour revert',
      },
    ],
  },
  {
    name: PriceType.Pro,
    price: {
      name: '$24',
      value: 24,
      period: 'month',
    },
    isPopular: true,
    benefits: [
      {
        name: '100 API Call/seconds',
      },
      {
        name: '100,000 Call Request',
      },
      {
        name: '3 Blockchain Access',
      },
      {
        name: 'MEV Front-Run Protection',
      },
      {
        name: 'MEV Back-Run Revenue',
      },
      {
        name: 'SDK Access',
      },
      {
        name: 'API Documentation Access',
      },
      {
        name: '5 Bots',
      },
      {
        name: '10 Keys',
      },
      {
        name: 'Fiat On-ramp and Off-ramp',
      },
      {
        name: '100% Uptime SLA',
      },
      {
        name: '5 days a week Support, office hours',
      },
    ],
  },
  {
    name: PriceType.Business,
    price: {
      name: '$299',
      value: 299,
      period: 'month',
    },
    isPopular: false,
    benefits: [
      {
        name: '200 API Call/seconds',
      },
      {
        name: '500,000 Call Request',
      },
      {
        name: 'Unlimited Blockchain Access',
      },
      {
        name: 'MEV Front-Run Protection',
      },
      {
        name: 'MEV Back-Run Revenue',
      },
      {
        name: 'SDK Access',
      },
      {
        name: 'API Documentation Access',
      },
      {
        name: 'Unlimited',
      },
      {
        name: 'Unlimited',
      },
      {
        name: 'Fiat On-ramp and Off-ramp',
      },
      {
        name: '100% Uptime SLA',
      },
      {
        name: 'Priority Support',
      },
    ],
  },
  {
    name: PriceType.Enterprise,
    price: {
      name: 'Contact Sales',
      value: 199,
      period: '',
    },
    isPopular: false,
    benefits: [
      {
        name: 'Call us',
      },
      {
        name: 'Call us',
      },
      {
        name: 'Call us',
      },
      {
        name: 'MEV Front-Run Protection',
      },
      {
        name: 'MEV Back-Run Revenue',
      },
      {
        name: 'SDK Access',
      },
      {
        name: 'API Documentation Access',
      },
      {
        name: 'Unlimited',
      },
      {
        name: 'Unlimited',
      },
      {
        name: 'Fiat On-ramp and Off-ramp',
      },
      {
        name: '100% Uptime SLA',
      },
      {
        name: 'Priority Support',
      },
    ],
  },
];

export interface ServiceCompany {
  name: string;
  logo: string;
  sla: string;
}

export const serviceCompanies: ServiceCompany[] = [
  {
    name: 'Volume',
    logo: '/assets/company/volume.svg',
    sla: '100%',
  },
  {
    name: 'Fireblocks',
    logo: '/assets/company/fireblocks.svg',
    sla: '99%',
  },
  {
    name: 'BitGo',
    logo: '/assets/company/bitgo.svg',
    sla: '99%',
  },
  {
    name: 'Coinbase',
    logo: '/assets/company/coinbase.svg',
    sla: '99%',
  },
];

export const supportingServices: ServiceAvailable[] = [
  {
    name: 'MPC-CMP',
    available: ['Volume', 'Fireblocks'],
  },
  {
    name: 'Self-Serve Policy Engine & Workflow Authorization',
    available: ['Volume', 'Fireblocks'],
  },
  {
    name: 'Cost savings on ERC-20 transactions',
    available: ['Volume', 'Fireblocks'],
  },
  {
    name: 'Zero custodial counterparty risk',
    available: ['Volume', 'Fireblocks'],
  },
  {
    name: 'DeFi Programmatic Access',
    available: ['Volume', 'Fireblocks'],
  },
  {
    name: 'DeFi Authorization Workflows(Apps, Contracts, Users)',
    available: ['Volume', 'Fireblocks'],
  },
  {
    name: 'MEV Front-Run and Back-Run Protection',
    available: ['Volume'],
  },
  {
    name: 'Native Blockchain Support',
    available: ['Volume'],
  },
  {
    name: 'Decentralized',
    available: ['Volume'],
  },
];
