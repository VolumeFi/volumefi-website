import { StaticLink } from 'configs/links';
import { useRouter } from 'next/router';
import style from 'ui/about/index.module.scss';
import Panel from 'ui/common/Panel';
import Intro from 'ui/pricing/Intro';
import PriceTable from 'ui/pricing/PriceTable';

const PricingContainer = () => {
  const router = useRouter();

  const handleJoinWaitlist = () => {
    router.push(StaticLink.Signup);
  };

  return (
    <section className={style.container}>
      <Intro />
      <PriceTable />
      <Panel
        title={
          <>
            Ready to start
            <br />
            messaging securely?
          </>
        }
        text={`Let us help you take you from zero to serious business and beyond.
Our no-strings attached free trial lets you test our product today.`}
        buttonText="Join the waitlist"
        onClick={handleJoinWaitlist}
      />
    </section>
  );
};

export default PricingContainer;
