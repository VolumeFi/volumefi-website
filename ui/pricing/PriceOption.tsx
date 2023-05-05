import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Button } from 'components/Button';
import { benefitOptions } from 'configs/services';
import style from 'ui/pricing/PriceOption.module.scss';

import type { PriceOption } from 'configs/services';

interface PriceOptionProps {
  priceOption: PriceOption;
}

const PriceOptionView = ({ priceOption }: PriceOptionProps) => (
  <section className={style.container}>
    <section className={classNames(style.popular, { [style.show]: priceOption.isPopular })}>Most Popular</section>
    <h2 className={style.title}>{priceOption.name}</h2>
    <p className={style.text}>{priceOption.description}</p>
    <section className={style.price}>
      {priceOption.price.name}
      <span className={style.period}>{priceOption.price.period && ` /${priceOption.price.period}`}</span>
    </section>
    <p className={style.text}>{priceOption.price.description}</p>
    <Button className={style.startButton} variant="secondary">
      Get Started
    </Button>
    <section className={style.benefits}>
      {benefitOptions.map((item) => (
        <section key={`${priceOption.name}-${item.name}`} className={style.benefitWrapper}>
          <section className={style.checkIconWrapper}>
            {item.available.includes(priceOption.name) && <FontAwesomeIcon icon={faCheck} />}
          </section>
          <section className={style.benefitName}>{item.name}</section>
        </section>
      ))}
    </section>
  </section>
);

export default PriceOptionView;
