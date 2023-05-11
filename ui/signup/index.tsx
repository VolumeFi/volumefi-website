import style from 'ui/signup/index.module.scss';
import Intro from 'ui/signup/Intro';
import SignupBoard from 'ui/signup/SignupBoard';

const SignupContainer = () => (
  <section className={style.container}>
    <Intro />
    <SignupBoard />
  </section>
);

export default SignupContainer;
