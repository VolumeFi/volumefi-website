import { useEffect } from 'react';

import { useStoryBlok } from 'services/storyblok';
import BlogItem from 'ui/blog/BlogItem';
import style from 'ui/blog/index.module.scss';
import SectionContainer from 'ui/common/SectionContainer';

const BlogContainer = () => {
  const { getBlogs, blogs } = useStoryBlok({});

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <SectionContainer>
      <section className={style.container}>
        <h1 className={style.title}>Volume Blog</h1>
        <section className={style.blogListWrapper}>
          {blogs.map((blog) => (
            <BlogItem blog={blog} key={blog.uuid} />
          ))}
        </section>
      </section>
    </SectionContainer>
  );
};

export default BlogContainer;
