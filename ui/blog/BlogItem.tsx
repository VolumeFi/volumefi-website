import { Button } from 'components/Button';
import { useRouter } from 'next/router';
import { getBlogDetailLink } from 'shared/configs/links';
import dateTools from 'shared/tools/date';
import style from 'ui/blog/BlogItem.module.scss';

const BlogItem = ({ blog }) => {
  const router = useRouter();

  const handleClickReadMore = (slug: string) => {
    router.push(getBlogDetailLink(slug));
  };

  return (
    <section className={style.container}>
      <section className={style.contentWrapper}>
        <span className={style.date}>{dateTools.convertDateString2(blog.content.published_date)}</span>
        <h3 className={style.title}>{blog.content.title}</h3>
        <p className={style.intro}>{blog.content.intro}</p>
        <Button className={style.readMore} variant="outline" onClick={() => handleClickReadMore(blog.slug)}>
          Read More...
        </Button>
      </section>
      <img className={style.image} src={`https:${blog.content.image}`} />
    </section>
  );
};

export default BlogItem;
