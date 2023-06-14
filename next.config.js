require('dotenv').config();

module.exports = {
  trailingSlash: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    API_VOLUME_SERVICE: process.env.API_VOLUME_SERVICE,
    STORYBLOK_ACCESS_TOKEN: process.env.STORYBLOK_ACCESS_TOKEN,
    MIXPANEL_API_KEY: process.env.MIXPANEL_API_KEY,
  },
};
