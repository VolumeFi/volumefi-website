import React, { useEffect, useState } from "react";

import { BlogList } from "components/Blog";

import { fetchBlogs, filterBlogs } from "utils/storyblok";

const Blog = () => {
  const [latestBlogs, setLatestBlog] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchBlogs();
      setLatestBlog(filterBlogs(data));
    };

    getData();
  }, []);

  return (
    <div className="page-container">
      <div className="blog-page-container">
        <div className="blog-page-top">
          <h1 className="blog-page-top-title">Volume Blog</h1>
        </div>
        <div className="blog-latest-wrapper">
          <BlogList data={latestBlogs} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
