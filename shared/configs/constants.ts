export enum Environment {
  Production = 'production',
  Development = 'development',
}

const envParams = {
  environment: process.env.ENVIRONMENT ?? Environment.Production,
  baseUrl: process.env.BASE_URL ?? '',
  apiVolumeService: process.env.API_VOLUME_SERVICE ?? '',
};

export { envParams };
