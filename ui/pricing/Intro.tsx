import SectionContainer from 'ui/common/SectionContainer';
import style from 'ui/pricing/Intro.module.scss';

const Intro = () => (
  <SectionContainer>
    <section className={style.container}>
      <div className={style.textWrapper}>
        <h1 className={style.title}>Volume Private Key Management</h1>
        <p className={style.description}>
          Start managing your Private Key Workflows on any target chain. <br />
          Get in touch with the Volume team today.
        </p>
      </div>
    </section>
  </SectionContainer>
);

export default Intro;
