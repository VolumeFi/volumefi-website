import SectionContainer from 'ui/common/SectionContainer';
import style from 'ui/pricing/Intro.module.scss';

const Intro = () => (
  <SectionContainer>
    <section className={style.container}>
      <div className={style.textWrapper}>
        <h1 className={style.title}>Volume Private Key Management</h1>
        <p className={style.description}>
          Start managing your Private Key Workflows on any target chain, today. The Volume team is here to help.
        </p>
      </div>
    </section>
  </SectionContainer>
);

export default Intro;
