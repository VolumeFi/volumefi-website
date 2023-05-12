import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Button } from 'components/Button';
import style from 'ui/common/banners/PalomaBot.module.scss';

const PalomaBot = ({ className }: DefaultComponentProps) => (
  <section className={classNames(style.container, className)}>
    <img src="/assets/paloma-bot.svg" className={style.image} />
    <div className={style.title}>
      Try <strong>PalomaBot</strong> for Free now!
    </div>
    <Button variant="dark">
      <span>Build a Trading Bot </span>
      <FontAwesomeIcon icon={faArrowRight} />
    </Button>
  </section>
);

export default PalomaBot;
