export enum Environment {
  Production = 'production',
  Development = 'development',
}

const envParam = {
  environment: process.env.ENVIRONMENT ?? Environment.Production,
  baseUrl: process.env.BASE_URL ?? '',
  palomaNestServiceAPIBaseUrl: process.env.PALOMA_NEST_SERVICE_API_BASE_URL ?? '',
};

export { envParam };
