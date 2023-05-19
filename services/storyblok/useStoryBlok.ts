/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import { fetchBlogs, fetchEvents } from 'services/storyblok/utils';
import dateTools from 'shared/tools/date';

interface useStoryBlokProps {
  getBlogDetailBySlug?: string;
  getUpcomingEvents?: boolean;
  getPastEvents?: boolean;
}

export const useStoryBlok = ({ getBlogDetailBySlug, getUpcomingEvents, getPastEvents }: useStoryBlokProps) => {
  const [isLoadingBlogs, setLoadingBlogs] = useState(false);
  const [isLoadingEvents, setLoadingEvents] = useState(false);

  const [blogs, setBlogs] = useState<any[]>([]);
  const [blogBySlug, setBlugBySlug] = useState<any>();

  const [events, setEvents] = useState<any[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);
  const [pastEvents, setPastEvents] = useState<any[]>([]);

  const getBlogs = async () => {
    setLoadingBlogs(true);

    const data = await fetchBlogs();
    if (getBlogDetailBySlug) {
      const blogDetail = data.find((blog) => blog.slug === getBlogDetailBySlug);
      setBlugBySlug(blogDetail);
    }

    setBlogs(data);
    setLoadingBlogs(false);
  };

  const getEvents = async () => {
    setLoadingEvents(true);

    const data = await fetchEvents();
    setEvents(data);

    if (getUpcomingEvents) {
      const filteredEvents = data.filter((event) => {
        const currentTime = new Date().getTime();
        const eventTime = dateTools.convertUTCtoLocalTime(dateTools.parseDate(event.content.EventTime).getTime());

        if (eventTime >= currentTime) {
          return true;
        }

        return false;
      });
      setUpcomingEvents(filteredEvents);
    }

    if (getPastEvents) {
      const filteredEvents = data.filter((event) => {
        const currentTime = new Date().getTime();
        const eventTime = dateTools.convertUTCtoLocalTime(dateTools.parseDate(event.content.EventTime).getTime());

        if (eventTime < currentTime) {
          return true;
        }

        return false;
      });

      filteredEvents.sort((a, b) => {
        const aEventTime = dateTools.parseDate(a.content.EventTime).getTime();
        const bEventTime = dateTools.parseDate(b.content.EventTime).getTime();

        return aEventTime > bEventTime ? -1 : 1;
      });

      setPastEvents(filteredEvents);
    }

    setLoadingEvents(false);
  };

  return {
    blogs,
    blogBySlug,
    events,
    upcomingEvents,
    pastEvents,
    isLoading: isLoadingBlogs || isLoadingEvents,
    getBlogs,
    getEvents,
  };
};
