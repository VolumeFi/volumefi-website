import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
});

export const fetchPageValues = async (param) => {
  var response = await Storyblok.get("cdn/stories/", {
    "starts_with": param,
  });

  if (response.data.stories.length > 0) {
    return response.data.stories[0];
  }

  return null;
};

export const fetchBlogs = async () => {
  const blogs = [];
  var response = await Storyblok.get("cdn/stories/", {
    starts_with: "blog/",
    per_page: 100,
  });

  for (const story of response.data.stories) {
    if (story.published_at != null) {
      if (
        story.full_slug.startsWith("blog/") &&
        !story.full_slug.endsWith("blog/")
      ) {
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
  const events = [];
  var response = await Storyblok.get("cdn/stories/", {
    starts_with: "events/",
    per_page: 100,
  });

  for (const story of response.data.stories) {
    if (story.published_at != null) {
      if (
        story.full_slug.startsWith("events/") &&
        !story.full_slug.endsWith("events/")
      ) {
        events.push(story);
      }
    }
  }

  return events;
};

export const filterBlogs = (eventList, category = "") => {
  const blogs = eventList.filter((event) => {
    if (category === "") {
      return true;
    }

    if ("Category" in event.content) {
      return event.content.Category === category;
    }

    return false;
  });

  blogs.sort((a, b) => {
    const aTime = Date.parse(a.content.published_date);
    const bTime = Date.parse(b.content.published_date);

    return aTime > bTime ? -1 : 1;
  });

  // return blogs.slice(0, LATEST_BLOG_SHOW_CNT);
  return blogs;
};
