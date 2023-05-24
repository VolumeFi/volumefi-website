import classNames from 'classnames';
import { useRouter } from 'next/router';
import { StaticLink } from 'shared/configs/links';
import { volumeSDKProducts } from 'shared/configs/products';
import Panel from 'ui/common/Panel';
import SectionContainer from 'ui/common/SectionContainer';
import Intro from 'ui/products/common/Intro';
import ProductList from 'ui/products/common/ProductList';
import style from 'ui/products/products.module.scss';

const VolumeSDKContainer = () => {
  const router = useRouter();

  return (
    <SectionContainer fullScreenWidth>
      <section className={style.container}>
        <Intro
          title="Volume SDK"
          description="Programmable DeFi with the Volume SDK enables any developer to build and deploy decentralized key management applications with Volume."
          button={{
            text: 'Build now',
            onClick: async () => router.push(StaticLink.Signup),
          }}
          className={classNames(style.volumeSDKIntroGrid)}
        />
        <ProductList
          title="Why Volume SDK"
          products={volumeSDKProducts}
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

export default VolumeSDKContainer;
