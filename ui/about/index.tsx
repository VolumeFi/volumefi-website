import CompareServices from 'ui/about/CompareServices';
import style from 'ui/about/index.module.scss';
import Intro from 'ui/about/Intro';
import PrivateKeyManagement from 'ui/about/PrivateKeyManagement';
import ProductsAndService from 'ui/about/ProductsAndService';
import TotalTransactions from 'ui/about/TotalTransactions';
import Panel from 'ui/common/Panel';

const AboutContainer = () => (
  <section className={style.container}>
    <Intro />
    <ProductsAndService />
    <TotalTransactions />
    <PrivateKeyManagement />
    <CompareServices />
    <Panel
      title={
        <>
          Start building now
          <br />
          using Volume SDK
        </>
      }
      text="Unlock the power of the blockchain validator set to deliver private key management as good as, or even better, than centralized service providers."
      buttonText="Build now"
    />
  </section>
);

export default AboutContainer;
