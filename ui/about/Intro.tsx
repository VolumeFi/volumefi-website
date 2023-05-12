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
          <div className={style.sub}>Affordable Private Key Management Software for the Rest of Us</div>
          <h1 className={style.title}>Make The Blockchain Manage Your Keys</h1>
          <p className={style.description}>
            Unlock the power of the blockchain to manage your private keys so that you will have key control and key
            security, but without breaking the bank.
          </p>
        </div>
        <Button className={style.join} onClick={handleJoinWaitlist}>
          Join the waitlist
        </Button>
      </section>
    </SectionContainer>
  );
};

export default Intro;
