export enum Environment {
  Production = 'production',
  Development = 'development',
}

const envParams = {
  environment: process.env.ENVIRONMENT ?? Environment.Production,
  baseUrl: process.env.BASE_URL ?? '',
  apiVolumeService: process.env.API_VOLUME_SERVICE ?? '',
  storyblokAccessToken: process.env.STORYBLOK_ACCESS_TOKEN ?? '',
  mixPanelApiKey: process.env.MIXPANEL_API_KEY ?? '',
  palomabot: process.env.PALOMA_BOT_URL ?? '',
};

export { envParams };
