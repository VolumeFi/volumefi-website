import { Button } from 'components/Button';
import dateTools from 'shared/tools/date';
import style from 'ui/blog/BlogItem.module.scss';

const BlogItem = ({ blog }) => {
  return (
    <section className={style.container}>
      <section className={style.contentWrapper}>
        <span className={style.date}>{dateTools.convertDateString2(blog.content.published_date)}</span>
        <h3 className={style.title}>{blog.content.title}</h3>
        <p className={style.intro}>{blog.content.intro}</p>
        <Button className={style.readMore} variant="outline">
          Read More...
        </Button>
      </section>
      <img className={style.image} src={`https:${blog.content.image}`} />
    </section>
  );
};

export default BlogItem;
