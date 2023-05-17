import { useEffect } from 'react';

import { useRouter } from 'next/router';
import { useStoryBlok } from 'services/storyblok';
import dateTools from 'shared/tools/date';
import { render, NODE_IMAGE } from 'storyblok-rich-text-react-renderer';
import style from 'ui/blog/BlogDetail.module.scss';
import BlogHeadSeo from 'ui/blog/BlogHeadSeo';
import SectionContainer from 'ui/common/SectionContainer';

const BlogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { fetchBlogs, detail: post, isLoading } = useStoryBlok({ getBlogDetailBySlug: slug?.toString() });

  useEffect(() => {
    fetchBlogs();
  }, [slug]);

  if (isLoading || !post) return null;

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
