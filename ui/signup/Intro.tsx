import SectionContainer from 'ui/common/SectionContainer';
import style from 'ui/signup/Intro.module.scss';

const Intro = () => (
  <SectionContainer>
    <section className={style.container}>
      <div className={style.textWrapper}>
        <h1 className={style.title}>Ready to Get Started?</h1>
      </div>
    </section>
  </SectionContainer>
);

export default Intro;
