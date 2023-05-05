import Intro from 'ui/home/Intro';
import ProductsAndService from 'ui/home/ProductsAndService';
import TotalTransactions from 'ui/home/TotalTransactions';
import PrivateKeyManagement from 'ui/home/PrivateKeyManagement';
import Headline from 'ui/home/Headline';
import CompareServices from 'ui/home/CompareServices';
import JoinWaitlist from 'ui/common/JoinWaitlist';

import style from 'ui/home/index.module.scss';

const HomeContainer = () => (
  <section className={style.container}>
    <Intro />
    <ProductsAndService />
    <TotalTransactions />
    <PrivateKeyManagement />
    <Headline />
    <CompareServices />
    <JoinWaitlist />
  </section>
);

export default HomeContainer;
