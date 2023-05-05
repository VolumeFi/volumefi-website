import JoinWaitlist from 'ui/common/JoinWaitlist';
import CompareServices from 'ui/home/CompareServices';
import Headline from 'ui/home/Headline';
import style from 'ui/home/index.module.scss';
import Intro from 'ui/home/Intro';
import PrivateKeyManagement from 'ui/home/PrivateKeyManagement';
import ProductsAndService from 'ui/home/ProductsAndService';
import TotalTransactions from 'ui/home/TotalTransactions';

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
