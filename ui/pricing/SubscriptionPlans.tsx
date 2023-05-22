import { subscripitonPlanOptions } from 'shared/configs/subscriptionPlans';
import SectionContainer from 'ui/common/SectionContainer';
import style from 'ui/pricing/SubscriptionPlans.module.scss';
import SubscriptionPlanView from 'ui/pricing/SubscriptionPlanView';

const SubscriptionPlans = () => (
  <SectionContainer>
    <section className={style.container}>
      {subscripitonPlanOptions.map((item) => (
        <SubscriptionPlanView key={item.name} subscriptionPlan={item} className={style.subscriptionPlan} />
      ))}
    </section>
  </SectionContainer>
);

export default SubscriptionPlans;
