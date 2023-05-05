export interface ServiceAvailable {
  name: string;
  available: string[];
}

export interface Price {
  name: string;
  value: number;
  period: string;
  description: string;
}

export interface PriceOption {
  name: string;
  description: string;
  price: Price;
  isPopular: boolean;
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
    description: 'Felis tristique et viverra volutpat ipsum tristique posuere mattis.',
    price: {
      name: 'Free',
      value: 0,
      description: 'Sed gravida posuere non',
      period: '',
    },
    isPopular: false,
  },
  {
    name: PriceType.Pro,
    description: 'Felis tristique et viverra volutpat ipsum tristique posuere mattis.',
    price: {
      name: '$24',
      value: 24,
      description: 'Sed gravida posuere non',
      period: 'month',
    },
    isPopular: true,
  },
  {
    name: PriceType.Business,
    description: 'Felis tristique et viverra volutpat ipsum tristique posuere mattis.',
    price: {
      name: '$99',
      value: 99,
      description: 'Sed gravida posuere non',
      period: 'month',
    },
    isPopular: false,
  },
  {
    name: PriceType.Enterprise,
    description: 'Felis tristique et viverra volutpat ipsum tristique posuere mattis.',
    price: {
      name: '$199',
      value: 199,
      description: 'Sed gravida posuere non',
      period: 'month',
    },
    isPopular: false,
  },
];

export const benefitOptions: ServiceAvailable[] = [
  {
    name: 'Intelligent Cotton Car',
    available: [PriceType.Starter, PriceType.Pro, PriceType.Business, PriceType.Enterprise],
  },
  {
    name: 'Intelligent Rubber Pants',
    available: [PriceType.Starter, PriceType.Pro, PriceType.Business, PriceType.Enterprise],
  },
  {
    name: 'Rustic Rubber Car',
    available: [PriceType.Pro, PriceType.Business, PriceType.Enterprise],
  },
  {
    name: 'Refined Fresh Towels',
    available: [PriceType.Pro, PriceType.Business, PriceType.Enterprise],
  },
  {
    name: 'Practical Soft Shirt',
    available: [PriceType.Business, PriceType.Enterprise],
  },
  {
    name: 'Ergonomic Granite Soap',
    available: [PriceType.Business, PriceType.Enterprise],
  },
  {
    name: 'Licensed Frozen Hat',
    available: [PriceType.Enterprise],
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
    available: ['Volume', 'Fireblocks', 'BitGo', 'Coinbase'],
  },
  {
    name: 'Self-Serve Policy Engin & Workflow Authorization',
    available: ['Volume', 'Fireblocks', 'BitGo', 'Coinbase'],
  },
  {
    name: 'Cost savings on ERC-20 transactions',
    available: ['Volume', 'Fireblocks', 'BitGo', 'Coinbase'],
  },
  {
    name: 'Zero custodial counterparty risk',
    available: ['Volume', 'Fireblocks', 'BitGo', 'Coinbase'],
  },
  {
    name: 'DeFi Programmatic Access',
    available: ['Volume', 'Fireblocks', 'BitGo', 'Coinbase'],
  },
  {
    name: 'DeFi Authorization Workflows(Apps, Contracts, Users)',
    available: ['Volume', 'Fireblocks', 'BitGo', 'Coinbase'],
  },
  {
    name: 'MEV Front-Run and Back-Run Protection',
    available: ['Volume', 'Fireblocks', 'BitGo', 'Coinbase'],
  },
  {
    name: 'Native Blockchain Support',
    available: ['Volume', 'Fireblocks', 'BitGo', 'Coinbase'],
  },
  {
    name: 'Decentralized',
    available: ['Volume', 'Fireblocks', 'BitGo', 'Coinbase'],
  },
];
