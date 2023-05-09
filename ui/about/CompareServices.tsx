import { serviceCompanies } from 'configs/services';
import style from 'ui/about/CompareServices.module.scss';
import Service from 'ui/about/Service';
import SectionContainer from 'ui/common/SectionContainer';

const CompareServices = () => (
  <SectionContainer>
    <section className={style.container}>
      <h2 className={style.title}>Volume vs. the Competition</h2>
      <p className={style.description}>
        Volume’s decentralized private-key management and workflow offerings are an attractive alternative to centralized providers, matching and exceeding on some of the most important requirements for developers and professional users.
      </p>
      <section className={style.serviceContainer}>
        <Service />
        {serviceCompanies.map((item) => (
          <Service key={item.name} serviceCompany={item} border={item.name === 'Volume'} />
        ))}
      </section>
    </section>
  </SectionContainer>
);

export default CompareServices;
