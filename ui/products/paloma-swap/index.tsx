import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Button } from 'components/Button';
import SectionContainer from 'ui/common/SectionContainer';
import style from 'ui/products/paloma-swap/index.module.scss';
import baseStyle from 'ui/products/products.module.scss';

const PalomaSwapContainer = () => (
  <SectionContainer fullScreenWidth>
    <section className={classNames(baseStyle.container, style.container)}>
      <section className={classNames(baseStyle.intro)}>
        <section className={classNames(baseStyle.titleWrapper)}>
          <h1>Paloma Swap</h1>
          <p>
            Execute decentralized exchange trading with MEV front-run protection and back-run cashback. Schedule swaps
            via the Volume SDK on any EVM chain.
          </p>
          <Button className={classNames(baseStyle.button)}>
            <span>Try PalomaSwap now </span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </section>
      </section>
    </section>
  </SectionContainer>
);

export default PalomaSwapContainer;
