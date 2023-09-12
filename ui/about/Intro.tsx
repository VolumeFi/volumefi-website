import { Button } from 'components/Button';
import { useRouter } from 'next/router';
import { StaticLink } from 'shared/configs/links';
import style from 'ui/about/Intro.module.scss';
import SectionContainer from 'ui/common/SectionContainer';

const Intro = () => {
  const router = useRouter();

  const handleJoinWaitlist = () => {
    router.push(StaticLink.Signup);
  };

  return (
    <SectionContainer>
      <section className={style.container}>
        <div className={style.textWrapper}>
          <div className={style.sub}>Securely Manage your onchain funds with blockchain bots</div>
          <h1 className={style.title}>Over 200 intelligent bots active onchain</h1>
          <p className={style.description}>
            Unlock the power of the blockchain, zero-knowledge cryptography, and artificial intelligence to create
            intelligent blockchain applications quickly.
          </p>
        </div>
        {/* <Button className={style.join} onClick={handleJoinWaitlist}>
          Join the waitlist
        </Button> */}
        <a href="https://www.palomabot.ai/" target="_blank" rel="noreferrer" className={style.launchBot}>Launch a Free Bot</a>
      </section>
    </SectionContainer>
  );
};

export default Intro;
