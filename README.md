# Volume Finance

This repo the web application for [volume.finance](https://volume.finance/)

## Setup

To run this locally, you will need a Storyblok Api Key.

To set up the app for local development:

```
git clone https://github.com/VolumeFi/volumefi-website.git
cd volumefi-website

### Local Development

# Getting environment variables set
cp .env.example .env

After seeing your .env file, make sure to replace placeholders with your Storyblok Api Key

STORYBLOK_ACCESS_TOKEN=YOUR_STORYBLOK_API_KEY
```

## Run

```
npm install
npm run dev
```

You can see the website at [http://localhost:3000](http://localhost:3000)
