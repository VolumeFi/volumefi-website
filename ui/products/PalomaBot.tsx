import classNames from 'classnames';
import { ExternalLink } from 'shared/configs/links';
import { palomaBotProducts } from 'shared/configs/products';
import PalomaBotBanner from 'ui/common/banners/PalomaBotBanner';
import SectionContainer from 'ui/common/SectionContainer';
import Intro from 'ui/products/common/Intro';
import ProductList from 'ui/products/common/ProductList';
import style from 'ui/products/products.module.scss';

const PalomaBotContainer = () => {
  const handleClickButton = () => {
    window.open(ExternalLink.PalomaBot, '_blank');
  };
  return (
    <SectionContainer fullScreenWidth>
      <section className={style.container}>
        <Intro
          title="Paloma Bot"
          description="Artificial Intelligence enabled algorithmic trading on supported chains and decentralized exchanges with MEV protection for professionals."
          button={{
            text: 'Build a Trading Bot now',
            onClick: handleClickButton,
            className: style.palomaBotIntroButton,
          }}
          image="/assets/products/paloma-bot-intro.svg"
          className={classNames(style.palomaBotIntroGrid)}
        />
        <ProductList
          title="Why Paloma Bot"
          products={palomaBotProducts}
          className={style.palomaBotProductsList}
          theme="blue"
        />
        <section className={style.bannerWrapper}>
          <PalomaBotBanner />
        </section>
      </section>
    </SectionContainer>
  );
};

export default PalomaBotContainer;
