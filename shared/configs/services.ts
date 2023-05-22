export interface ServiceAvailable {
  name: string;
  available: string[];
}

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
