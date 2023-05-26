import style from 'ui/about/index.module.scss';
import JoinWaitlistBanner from 'ui/common/banners/JoinWaitlistBanner';
import ComparePlans from 'ui/pricing/ComparePlans';
import Intro from 'ui/pricing/Intro';
import SubscriptionPlans from 'ui/pricing/SubscriptionPlans';

const PricingContainer = () => (
  <section className={style.container}>
    <Intro />
    <SubscriptionPlans />
    <ComparePlans />
    <JoinWaitlistBanner />
  </section>
);

export default PricingContainer;
