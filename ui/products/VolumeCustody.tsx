import classNames from 'classnames';
import { useRouter } from 'next/router';
import { StaticLink } from 'shared/configs/links';
import { volumeCustodyProducts } from 'shared/configs/products';
import Panel from 'ui/common/Panel';
import SectionContainer from 'ui/common/SectionContainer';
import Intro from 'ui/products/common/Intro';
import ProductList from 'ui/products/common/ProductList';
import style from 'ui/products/products.module.scss';

const VolumeCustodyContainer = () => {
  const router = useRouter();

  return (
    <SectionContainer fullScreenWidth>
      <section className={style.container}>
        <Intro
          title="Volume Custody"
          description="With Volume custody, clients delegate their asset private keys to the Paloma Blockchain and its validator set."
          button={{
            text: 'Learn More',
            onClick: async () => router.push(StaticLink.Signup),
          }}
          image="/assets/products/custody-dashboard-screenshot.svg"
          className={classNames(style.volumeSDKIntroGrid)}
          imageClassName={style.volumeCustodyIntroImage}
        />
        <ProductList
          title="Why Volume Custody"
          products={volumeCustodyProducts}
          className={style.volumeSDKProductsList}
          theme="green"
        />
        <section className={style.bannerWrapper}>
          <Panel
            title={
              <>
                Start building now <br />
                using Volume SDK
              </>
            }
            text="Unlock the power of the blockchain validator set to deliver private key management as good as, or even better, than centralized service providers."
            buttonText="Build now"
            className={style.volumeSDKBanner}
          />
        </section>
      </section>
    </SectionContainer>
  );
};

export default VolumeCustodyContainer;
