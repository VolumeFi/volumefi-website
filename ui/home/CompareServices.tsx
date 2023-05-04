import SectionContainer from 'ui/common/SectionContainer';

import style from 'ui/home/CompareServices.module.scss';

const CompareServices = () => (
  <SectionContainer>
    <section className={style.container}>
      <h2 className={style.title}>Volume Private Key Management</h2>
      <p className={style.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s,
      </p>
      <img src="/assets/service-compare.png" className={style.compare} />
    </section>
  </SectionContainer>
);

export default CompareServices;
