/* eslint-disable  @typescript-eslint/no-explicit-any */
import { envParams } from 'shared/configs/constants';
import dateTools from 'shared/tools/date';
import StoryblokClient from 'storyblok-js-client';

import type { ISbResult } from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: envParams.storyblokAccessToken,
});

export const fetchBlogs = async () => {
  const blogs: any[] = [];
  const response: ISbResult = await Storyblok.get('cdn/stories/', {
    starts_with: 'blog/',
    per_page: 100,
  });

  for (const story of response.data.stories) {
    if (story.published_at != null) {
      if (story.full_slug.startsWith('blog/') && !story.full_slug.endsWith('blog/')) {
        blogs.push(story);
      }
    }
  }

  blogs.sort((a, b) => {
    const aTimestamp = Date.parse(a.content.published_date);
    const bTimestamp = Date.parse(b.content.published_date);

    return aTimestamp > bTimestamp ? -1 : 1;
  });

  return blogs;
};

export const fetchEvents = async () => {
  const events: any[] = [];
  const response = await Storyblok.get('cdn/stories/', {
    starts_with: 'events/',
    per_page: 100,
  });

  for (const story of response.data.stories) {
    if (story.published_at != null) {
      if (story.full_slug.startsWith('events/') && !story.full_slug.endsWith('events/')) {
        events.push(story);
      }
    }
  }

  events.sort((a, b) => {
    const aEventTime = dateTools.parseDate(a.content.EventTime).getTime();
    const bEventTime = dateTools.parseDate(b.content.EventTime).getTime();

    return aEventTime > bEventTime ? 1 : -1;
  });

  return events;
};
