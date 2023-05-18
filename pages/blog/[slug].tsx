import { fetchBlogs } from 'services/storyblok/utils';
import BlogDetailContainer from 'ui/blog/BlogDetail';


export default function BlogDetailPage({ blog }) {
  return <BlogDetailContainer blog={blog} />;
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const blogs = await fetchBlogs();

  // Get the paths we want to pre-render based on posts
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const blogs = await fetchBlogs();

  const blog = blogs.find((item) => item.slug === params.slug);

  // Pass post data to the page via props
  return { props: { blog } };
}
