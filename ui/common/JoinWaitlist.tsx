import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Button } from 'components/Button';
import SectionContainer from 'ui/common/SectionContainer';

import style from 'ui/common/JoinWaitlist.module.scss';

const JoinWaitlist = () => (
  <SectionContainer>
    <section className={style.container}>
      <div className={style.textWrapper}>
        <h3 className={style.title}>
          Ready to start
          <br /> messaging securely?
        </h3>
        <p className={style.text}>
          Let us help you take you from zero to serious business and beyond. Our no-strings attached free trial lets you
          test our product today.
        </p>
      </div>
      <Button variant="dark" className={style.join}>
        <span>Join the waitlist</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </section>
  </SectionContainer>
);

export default JoinWaitlist;
