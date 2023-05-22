import classNames from 'classnames';
import { Button } from 'components/Button';
import { SubscriptionType } from 'shared/configs/subscriptionPlans';
import style from 'ui/pricing/SubscriptionPlanView.module.scss';

import type { SubscriptionPlan } from 'shared/configs/subscriptionPlans';

interface SubscriptionPlanProps extends DefaultComponentProps {
  subscriptionPlan: SubscriptionPlan;
}

const SubscriptionPlanView = ({ subscriptionPlan, className }: SubscriptionPlanProps) => (
  <section className={classNames(style.container, className, { [style.popular]: subscriptionPlan.isPopular })}>
    <section className={classNames(style.popularBadge, { [style.show]: subscriptionPlan.isPopular })}>
      Most Popular
    </section>
    <h2 className={style.title}>{subscriptionPlan.name}</h2>
    <section
      className={classNames(style.price, { [style.small]: subscriptionPlan.name === SubscriptionType.Enterprise })}
    >
      {subscriptionPlan.currency && <span>{subscriptionPlan.currency}</span>}
      <span>{subscriptionPlan.price}</span>
      {subscriptionPlan.period && <span className={style.period}>{` /${subscriptionPlan.period}`}</span>}
    </section>
    <hr className={style.divider} />
    <section className={style.descripitons}>
      {subscriptionPlan.descriptions?.map((item, index) => (
        <div key={`${subscriptionPlan.name}-${subscriptionPlan.name}-${index}`} className={style.description}>
          {item}
        </div>
      ))}
    </section>
    <Button className={style.startButton} variant={subscriptionPlan.isPopular ? 'primary' : 'secondary'}>
      {subscriptionPlan.name === SubscriptionType.Enterprise ? 'Contact us' : 'Get Started'}
    </Button>
  </section>
);

export default SubscriptionPlanView;
