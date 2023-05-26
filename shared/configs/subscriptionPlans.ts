export type SubscriptionPeriod = 'month' | 'year';
export type SubscriptionPrice = 'Free' | 'Contact Sales' | number;
export type SubscriptionPriceCurrency = '$';
export enum SubscriptionType {
  Starter = 'Starter',
  Pro = 'Pro',
  Business = 'Business',
  Enterprise = 'Enterprise',
}

export enum SubscriptionBenfitType {
  ApiCallsSecond = 'API Calls/Second',
  CallRequests = 'Call Requests',
  BlockchainAccess = 'Blockchain Access',
  MevFrontRunProtection = 'MEV Front-Run Protection',
  MevBackRunProtection = 'MEV Back-Run Revenue',
  SDKAccess = 'SDK Access',
  ApiDocumentationAccess = 'API Documentation Access',
  TradingBotAccess = 'Trading Bot Access',
  PalomaKeyManagement = 'Paloma Key Management',
  FiatOnRampAndOffRamp = 'Fiat On-ramp and Off-ramp',
  UptimeSLA = 'Uptime SLA',
  Support = 'Support',
}

export interface SubscriptionPlan {
  name: SubscriptionType;
  price: SubscriptionPrice;
  period?: SubscriptionPeriod;
  currency?: SubscriptionPriceCurrency;
  isPopular?: boolean;
  descriptions?: string[];
}

export type SubscriptionPlanBenefit = {
  [subscriptionKey in SubscriptionType]?: {
    [benefitKey in SubscriptionBenfitType]?: number | string | boolean;
  };
};

export const subscripitonPlanOptions: SubscriptionPlan[] = [
  {
    name: SubscriptionType.Starter,
    price: 'Free',
    descriptions: ['25 API Call/second', 'Access to 1 Chain', 'Access to 1 Trading Bot', '1 Paloma Key Management'],
  },
  {
    name: SubscriptionType.Pro,
    price: 24,
    period: 'month',
    currency: '$',
    isPopular: true,
    descriptions: [
      '100 API Call / second',
      'Access to 3 Chains',
      'Access to 5 Trading Bots',
      '10 Paloma Key Management',
    ],
  },
  {
    name: SubscriptionType.Business,
    price: 299,
    period: 'month',
    currency: '$',
    descriptions: [
      '200 API Call/second',
      'Access to Unlimited Chains',
      'Access to Unlimited Trading Bots',
      'Unlimited Paloma Key Management',
    ],
  },
  {
    name: SubscriptionType.Enterprise,
    price: 'Contact Sales',
    descriptions: ['Unlimited Access', 'Call us!'],
  },
];

export const comparePlanBenefitOptions: SubscriptionPlanBenefit = {
  [SubscriptionType.Starter]: {
    [SubscriptionBenfitType.ApiCallsSecond]: 25,
    [SubscriptionBenfitType.CallRequests]: 20000,
    [SubscriptionBenfitType.BlockchainAccess]: '1 Chain',
    [SubscriptionBenfitType.MevFrontRunProtection]: false,
    [SubscriptionBenfitType.MevBackRunProtection]: false,
    [SubscriptionBenfitType.SDKAccess]: true,
    [SubscriptionBenfitType.ApiDocumentationAccess]: true,
    [SubscriptionBenfitType.TradingBotAccess]: '1 Bot',
    [SubscriptionBenfitType.PalomaKeyManagement]: '1 Key',
    [SubscriptionBenfitType.FiatOnRampAndOffRamp]: 25,
    [SubscriptionBenfitType.UptimeSLA]: '100%',
    [SubscriptionBenfitType.Support]: 'Limited <48-hour Revert',
  },
  [SubscriptionType.Pro]: {
    [SubscriptionBenfitType.ApiCallsSecond]: 100,
    [SubscriptionBenfitType.CallRequests]: 100000,
    [SubscriptionBenfitType.BlockchainAccess]: '3 Chain',
    [SubscriptionBenfitType.MevFrontRunProtection]: true,
    [SubscriptionBenfitType.MevBackRunProtection]: true,
    [SubscriptionBenfitType.SDKAccess]: true,
    [SubscriptionBenfitType.ApiDocumentationAccess]: true,
    [SubscriptionBenfitType.TradingBotAccess]: '5 Bots',
    [SubscriptionBenfitType.PalomaKeyManagement]: '10 Keys',
    [SubscriptionBenfitType.FiatOnRampAndOffRamp]: 100,
    [SubscriptionBenfitType.UptimeSLA]: '100%',
    [SubscriptionBenfitType.Support]: '5 Days a Week, Office Hours',
  },
  [SubscriptionType.Business]: {
    [SubscriptionBenfitType.ApiCallsSecond]: 200,
    [SubscriptionBenfitType.CallRequests]: 500000,
    [SubscriptionBenfitType.BlockchainAccess]: 'Unlimited Chains',
    [SubscriptionBenfitType.MevFrontRunProtection]: true,
    [SubscriptionBenfitType.MevBackRunProtection]: true,
    [SubscriptionBenfitType.SDKAccess]: true,
    [SubscriptionBenfitType.ApiDocumentationAccess]: true,
    [SubscriptionBenfitType.TradingBotAccess]: 'Unlimited',
    [SubscriptionBenfitType.PalomaKeyManagement]: 'Unlimited',
    [SubscriptionBenfitType.FiatOnRampAndOffRamp]: 200,
    [SubscriptionBenfitType.UptimeSLA]: '100%',
    [SubscriptionBenfitType.Support]: 'Priority Support',
  },
  [SubscriptionType.Enterprise]: {
    [SubscriptionBenfitType.ApiCallsSecond]: 'Call us',
    [SubscriptionBenfitType.CallRequests]: 'Call us',
    [SubscriptionBenfitType.BlockchainAccess]: 'Call us',
    [SubscriptionBenfitType.MevFrontRunProtection]: true,
    [SubscriptionBenfitType.MevBackRunProtection]: true,
    [SubscriptionBenfitType.SDKAccess]: true,
    [SubscriptionBenfitType.ApiDocumentationAccess]: true,
    [SubscriptionBenfitType.TradingBotAccess]: 'Unlimited',
    [SubscriptionBenfitType.PalomaKeyManagement]: 'Unlimite',
    [SubscriptionBenfitType.FiatOnRampAndOffRamp]: 'Call us',
    [SubscriptionBenfitType.UptimeSLA]: '100%',
    [SubscriptionBenfitType.Support]: 'Priority Support',
  },
};

export const getComparePlanHeaders = () =>
  [''].concat(Object.keys(SubscriptionType).map((key) => SubscriptionType[key]));

export const getComparePlanData = () => {
  const benefitTypeKeys = Object.keys(SubscriptionBenfitType);
  const subscriptionPlanKeys = Object.keys(SubscriptionType);

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const comparePlanData: any[] = [];

  for (const key of benefitTypeKeys) {
    const benefitKey = SubscriptionBenfitType[key];
    const benefit = [benefitKey];
    for (const planKey of subscriptionPlanKeys) {
      const value = comparePlanBenefitOptions[planKey][benefitKey];
      const formatValue = typeof value === 'number' ? Intl.NumberFormat('en-US').format(value) : value;
      benefit.push(formatValue);
    }

    comparePlanData.push(benefit);
  }

  return comparePlanData;
};
