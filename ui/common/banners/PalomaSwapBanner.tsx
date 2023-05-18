import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Button } from 'components/Button';
import { ExternalLink } from 'shared/configs/links';
import style from 'ui/common/banners/PalomaSwapBanner.module.scss';

const PalomaSwapBanner = ({ className }: DefaultComponentProps) => (
  <section className={classNames(style.container, className)}>
    <div className={style.title}>
      Try <strong>PalomaSwap</strong> for free now!
    </div>
    <Button variant="dark" className={style.button} onClick={() => window.open(ExternalLink.PalomaSwap, '_blank')}>
      <span>Try Paloma Swap now </span>
      <FontAwesomeIcon icon={faArrowRight} />
    </Button>
  </section>
);

export default PalomaSwapBanner;
