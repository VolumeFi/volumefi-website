import classNames from 'classnames';
import { Button } from 'components/Button';
import { PriceType } from 'configs/services';
import style from 'ui/pricing/PriceOption.module.scss';

import type { PriceOption} from 'configs/services';


interface PriceOptionProps {
  priceOption: PriceOption;
}

const PriceOptionView = ({ priceOption }: PriceOptionProps) => (
  <section className={classNames(style.container, { [style.popular]: priceOption.isPopular })}>
    <section className={classNames(style.popularBadge, { [style.show]: priceOption.isPopular })}>Most Popular</section>
    <h2 className={style.title}>{priceOption.name}</h2>
    <section className={classNames(style.price, { [style.small]: priceOption.name === PriceType.Enterprise })}>
      {priceOption.price.name}
      <span className={style.period}>{priceOption.price.period && ` /${priceOption.price.period}`}</span>
    </section>
    <Button className={style.startButton} variant={priceOption.isPopular ? 'primary' : 'secondary'}>
      Get Started
    </Button>
    <section className={style.benefits}>
      {priceOption.benefits.map((item) => (
        <section key={`${priceOption.name}-${item.name}`} className={style.benefitWrapper}>
          {item.disabled ? <img src="/assets/pricing/x.svg" /> : <img src="/assets/pricing/check.svg" />}
          <section className={style.benefitName}>{item.name}</section>
        </section>
      ))}
    </section>
  </section>
);

export default PriceOptionView;
