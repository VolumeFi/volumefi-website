import classNames from 'classnames';
import { ExternalLink } from 'shared/configs/links';
import { palomaSwapProducts } from 'shared/configs/products';
import PalomaSwapBanner from 'ui/common/banners/PalomaSwapBanner';
import SectionContainer from 'ui/common/SectionContainer';
import Intro from 'ui/products/common/Intro';
import ProductList from 'ui/products/common/ProductList';
import style from 'ui/products/products.module.scss';

const PalomaSwapContainer = () => {
  const handleClickButton = () => {
    window.open(ExternalLink.PalomaSwap, '_blank');
  };
  return (
    <SectionContainer fullScreenWidth>
      <section className={style.container}>
        <Intro
          title="Paloma Swap"
          description="Execute decentralized exchange trading with MEV front-run protection and back-run cashback. Schedule swaps via the Volume SDK on any EVM chain."
          button={{
            text: 'Try PalomaSwap now ',
            onClick: handleClickButton,
            className: style.palomaSwapIntroButton,
          }}
          className={classNames(style.palomaSwapIntroGrid)}
        />
        <ProductList
          title="Why Paloma Swap"
          products={palomaSwapProducts}
          className={style.palomaSwapProductsList}
          theme="pink"
        />
        <section className={style.bannerWrapper}>
          <PalomaSwapBanner />
        </section>
      </section>
    </SectionContainer>
  );
};

export default PalomaSwapContainer;
