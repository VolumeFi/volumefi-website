import { useRouter } from 'next/router';
import { StaticLink } from 'shared/configs/links';
import style from 'ui/about/index.module.scss';
import Panel from 'ui/common/Panel';
import ComparePlans from 'ui/pricing/ComparePlans';
import Intro from 'ui/pricing/Intro';
import SubscriptionPlans from 'ui/pricing/SubscriptionPlans';

const PricingContainer = () => {
  const router = useRouter();

  const handleBuildSDK = () => {
    router.push(StaticLink.Signup);
  };

  return (
    <section className={style.container}>
      <Intro />
      <SubscriptionPlans />
      <ComparePlans />
      <Panel
        title={
          <>
            Start building now{' '}
            <br />
            using Volume SDK
          </>
        }
        text="Let us help you take you from zero to serious business and beyond. Our no-strings attached free trial lets you test our product today."
        buttonText="Build now"
        onClick={handleBuildSDK}
      />
    </section>
  );
};

export default PricingContainer;
