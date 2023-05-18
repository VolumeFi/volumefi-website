/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import { fetchBlogs } from 'services/storyblok/utils';

interface useStoryBlokProps {
  getBlogDetailBySlug?: string;
}

export const useStoryBlok = ({ getBlogDetailBySlug }: useStoryBlokProps) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [detail, setDetail] = useState<any>();

  const getBlogs = async () => {
    setLoading(true);

    const blogs = await fetchBlogs();

    if (getBlogDetailBySlug) {
      const blogDetail = blogs.find((blog) => blog.slug === getBlogDetailBySlug);
      setDetail(blogDetail);
    }

    setData(blogs);

    setLoading(false);
  };

  return {
    data,
    detail,
    isLoading,
    getBlogs,
  };
};
