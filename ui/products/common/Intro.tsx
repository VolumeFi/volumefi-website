import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Button } from 'components/Button';
import style from 'ui/products/common/Intro.module.scss';

interface IntroProps {
  title: string;
  description: string;
  button: {
    text: string;
    className?: string;
    onClick?: () => void;
  };
  image?: string;
  imageClassName?: string;
  className?: string;
}

const Intro = ({ title, description, button, image, className, imageClassName }: IntroProps) => (
  <section className={classNames(style.container, className)}>
    <section className={style.titleWrapper}>
      <h1 className={style.title}>{title}</h1>
      <p className={style.description}>{description}</p>
      <Button className={classNames(style.button, button.className)} onClick={button.onClick}>
        <span>{button.text}</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </section>
    <section className={style.imageWrapper}>
      <img src={image} className={imageClassName} />
    </section>
  </section>
);

export default Intro;
