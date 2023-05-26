import classNames from 'classnames';
import style from 'ui/common/banners/JoinWaitlistBanner.module.scss';

import JoinWaitlistButton from '../JoinWaitListButton';
import SectionContainer from '../SectionContainer';

const JoinWaitlistBanner = ({ className }: DefaultComponentProps) => (
  <SectionContainer>
    <section className={classNames(style.container, className)}>
      <div className={style.textWrapper}>
        <h3 className={style.title}>
          Be the first to build on <br />
          Volume SDK
        </h3>
        <p className={style.text}>
          Unlock the power of the blockchain validator set to deliver private key management as good as, or even better,
          than centralized service providers.
        </p>
      </div>
      <JoinWaitlistButton variant="dark" className={style.join} leftIcon />
    </section>
  </SectionContainer>
);

export default JoinWaitlistBanner;
