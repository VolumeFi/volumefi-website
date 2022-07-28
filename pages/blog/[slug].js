import React, { useEffect } from "react";

import { render, NODE_IMAGE } from "storyblok-rich-text-react-renderer";

import { fetchBlogs } from "utils/storyblok";
import { convertDateString2 } from "utils/date";

import { HeadSeo } from "components/Blog";

const Blog = ({ post, router }) => {
  useEffect(() => {
    mixpanel.track("VISIT_BLOGPOST", {
      title: post.content.title,
      slug: post.slug,
    });
  }, []);
console.log(post)
  return (
    <>
      {post !== null && post !== undefined && (
        <HeadSeo title="Volume Finance" description="" content={post.content} />
      )}
      <div className="page-container">
        {post !== null && post !== undefined && (
          <div className="blog-page-container">
            <div className="blog-post-title-bg">
              <div className="blog-post-title-wrapper">
                <h1 className="blog-title">{post.content.title}</h1>
              </div>
            </div>
            <div className="blog-post-view">
              <div className="blog-content"></div>
              {/* <div className="blog-divider"></div> */}
              <div className="blog-pubtime">
                {convertDateString2(post.first_published_at)}
              </div>
              <div className="blog-post">
                {render(post.content.long_text, {
                  nodeResolvers: {
                    [NODE_IMAGE]: (children, props) => (
                      <img
                        {...props}
                        style={{ borderRadius: "0px", maxWidth: "100%" }}
                      />
                    ),
                  },
                  blokResolvers: {
                    ["YouTube-blogpost"]: (props) => (
                      <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                          className="embed-responsive-item"
                          src={
                            "https://www.youtube.com/embed/" +
                            props.YouTube_id.replace("https://youtu.be/", "")
                          }
                        ></iframe>
                      </div>
                    ),
                  },
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = await fetchBlogs();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const posts = await fetchBlogs();

  let post = {};

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].full_slug.includes(params.slug)) {
      post = posts[i];
      break;
    }
  }

  // Pass post data to the page via props
  return { props: { post } };
}

export default Blog;
