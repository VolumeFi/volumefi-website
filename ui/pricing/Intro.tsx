import SectionContainer from 'ui/common/SectionContainer';
import style from 'ui/pricing/Intro.module.scss';

const Intro = () => (
  <SectionContainer>
    <section className={style.container}>
      <div className={style.textWrapper}>
        <div className={style.sub}>Your keys, your money.</div>
        <h1 className={style.title}>Start Messaging Securely Now</h1>
        <p className={style.description}>Contact us for a customized plan if you are ready to scale.</p>
      </div>
    </section>
  </SectionContainer>
);

export default Intro;
