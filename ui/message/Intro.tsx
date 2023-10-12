import SectionContainer from 'ui/common/SectionContainer';
import style from 'ui/message/Intro.module.scss';

const Intro = () => (
  <SectionContainer>
    <section className={style.container}>
      <p className={style.head}>Do you have a new Bot idea?</p>
      <h1 className={style.title}>Get in Touch</h1>
      <p className={style.description}>
        Schedule a meeting with the Volume Team to design and engineer your decentralized bot.
      </p>
    </section>
  </SectionContainer>
);

export default Intro;
