import style from 'ui/about/Headline.module.scss';
import SectionContainer from 'ui/common/SectionContainer';

const Headline = () => (
  <SectionContainer fullScreenWidth>
    <section className={style.container}>
      <h2 className={style.title}>This is a headline</h2>
      <p className={style.description}>
        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s,`}
      </p>
      <img className={style.decentralizePolkaDot} src="/assets/headline.svg" />
    </section>
  </SectionContainer>
);

export default Headline;
