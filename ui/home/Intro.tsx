import { Button } from 'components/Button';
import SectionContainer from 'ui/common/SectionContainer';

import style from 'ui/home/Intro.module.scss';

const Intro = () => (
  <SectionContainer>
    <section className={style.container}>
      <div className={style.textWrapper}>
        <div className={style.sub}>Your keys, your money.</div>
        <h1 className={style.title}>Take your private keys wherever you go</h1>
        <p className={style.description}>
          We’ve been told it’s possible to revolutionize the payment industry. We have not reinvented the wheel, we
          decided to build upon it - successfully.
        </p>
      </div>
      <Button className={style.join}>Join the waitlist</Button>
    </section>
  </SectionContainer>
);

export default Intro;
