import dateTools from 'shared/tools/date';
import { render, NODE_IMAGE } from 'storyblok-rich-text-react-renderer';
import style from 'ui/blog/BlogDetail.module.scss';
import BlogHeadSeo from 'ui/blog/BlogHeadSeo';
import SectionContainer from 'ui/common/SectionContainer';

const BlogDetail = ({ blog }) => {
  if (!blog) return null;

  return (
    <>
      <BlogHeadSeo title="Volume Finance" description="" content={blog.content} />
      <SectionContainer>
        <section className={style.container}>
          <img className={style.image} src={`https:${blog.content.image}`} />
          <div className={style.date}>{dateTools.convertDateString2(blog.content.published_date)}</div>
          {blog.content.intro && <p className={style.intro}>{blog.content.intro}</p>}
          <section className={style.post}>
            {render(blog.content.long_text, {
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
