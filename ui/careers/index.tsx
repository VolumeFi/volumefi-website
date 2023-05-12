import { ExternalLink } from 'shared/configs/links';
import style from 'ui/careers/index.module.scss';
import SectionContainer from 'ui/common/SectionContainer';

const CareersContainer = () => (
  <SectionContainer>
    <section className={style.container}>
      <h1 className={style.title}>Careers</h1>

      <iframe className={style.jobBoard} src={ExternalLink.Lever} />
    </section>
  </SectionContainer>
);

export default CareersContainer;
