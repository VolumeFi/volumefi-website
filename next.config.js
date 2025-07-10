require('dotenv').config();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    API_VOLUME_SERVICE: process.env.API_VOLUME_SERVICE,
    STORYBLOK_ACCESS_TOKEN: process.env.STORYBLOK_ACCESS_TOKEN,
    MIXPANEL_API_KEY: process.env.MIXPANEL_API_KEY || '',
    PALOMA_BOT_URL: process.env.PALOMA_BOT_URL || '',
  },
};

module.exports = nextConfig;