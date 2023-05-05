import Intro from 'ui/pricing/Intro';
import PriceTable from 'ui/pricing/PriceTable';
import JoinWaitlist from 'ui/common/JoinWaitlist';

import style from 'ui/home/index.module.scss';

const PricingContainer = () => (
  <section className={style.container}>
    <Intro />
    <PriceTable />
    <JoinWaitlist />
  </section>
);

export default PricingContainer;
