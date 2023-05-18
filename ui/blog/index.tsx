import { useEffect } from 'react';

import { useStoryBlok } from 'services/storyblok';
import style from 'ui/blog/index.module.scss';
import SectionContainer from 'ui/common/SectionContainer';

import BlogItem from './BlogItem';

const BlogContainer = () => {
  const { getBlogs, data: blogs } = useStoryBlok({});

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
