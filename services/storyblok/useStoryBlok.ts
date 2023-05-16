/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import { envParams } from 'shared/configs/constants';
import StoryblokClient from 'storyblok-js-client';

import type { ISbResult } from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: envParams.storyblokAccessToken,
});

export const useStoryBlok = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);

  const fetchBlogs = async () => {
    setLoading(true);

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

    setData(blogs);

    setLoading(false);
  };

  return {
    data,
    isLoading,
    fetchBlogs,
  };
};
