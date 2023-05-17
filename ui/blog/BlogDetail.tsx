import { useEffect } from 'react';
import { render, NODE_IMAGE } from 'storyblok-rich-text-react-renderer';

import { useStoryBlok } from 'services/storyblok';
import style from 'ui/blog/BlogDetail.module.scss';
import SectionContainer from 'ui/common/SectionContainer';

import BlogItem from 'ui/blog/BlogItem';
import { useRouter } from 'next/router';
import BlogHeadSeo from 'ui/blog/BlogHeadSeo';
import dateTools from 'shared/tools/date';

const BlogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { fetchBlogs, detail: post, isLoading } = useStoryBlok({ getBlogDetailBySlug: slug?.toString() });

  useEffect(() => {
    fetchBlogs();
  }, [slug]);

  if (isLoading || !post) return;
  console.log(post);
  return (
    <>
      <BlogHeadSeo title="Volume Finance" description="" content={post.content} />
      <SectionContainer>
        <section className={style.container}>
          <img className={style.image} src={`https:${post.content.image}`} />
          <div className={style.date}>{dateTools.convertDateString2(post.content.published_date)}</div>
          {post.content.intro && <p className={style.intro}>{post.content.intro}</p>}
          <section className={style.post}>
            {render(post.content.long_text, {
              nodeResolvers: {
                [NODE_IMAGE]: (children, props) => <img {...props} style={{ borderRadius: '0px', maxWidth: '100%' }} />,
              },
              blokResolvers: {
                ['YouTube-blogpost']: (props) => (
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src={
                        'https://www.youtube.com/embed/' +
                        props?.YouTube_id?.toString().replace('https://youtu.be/', '')
                      }
                    ></iframe>
                  </div>
                ),
              },
            })}
          </section>
        </section>
      </SectionContainer>
    </>
  );
};

export default BlogDetail;
