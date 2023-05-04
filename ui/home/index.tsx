import Intro from 'ui/home/Intro';

import style from 'ui/home/index.module.scss';
import ProductsAndService from 'ui/home/ProductsAndService';
import TotalTransactions from 'ui/home/TotalTransactions';

const HomeContainer = () => (
  <section className={style.container}>
    <Intro />
    <ProductsAndService />
    <TotalTransactions />
  </section>
);

export default HomeContainer;
