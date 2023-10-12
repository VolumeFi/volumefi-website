import Bots from 'ui/about/Bots';
import CompareServices from 'ui/about/CompareServices';
import style from 'ui/about/index.module.scss';
import Intro from 'ui/about/Intro';
import PrivateKeyManagement from 'ui/about/PrivateKeyManagement';
import ProductsAndService from 'ui/about/ProductsAndService';
import Testimonials from 'ui/about/Testimonials';
import JoinWaitlistBanner from 'ui/common/banners/JoinWaitlistBanner';

const AboutContainer = () => (
  <section className={style.container}>
    <Intro />
    <Bots />
    {/* <ProductsAndService /> */}
    {/* <TotalTransactions /> */}
    {/* <Testimonials /> */}
    {/* <PrivateKeyManagement /> */}
    {/* <CompareServices /> */}
    {/* <JoinWaitlistBanner /> */}
  </section>
);

export default AboutContainer;
