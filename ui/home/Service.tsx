import classNames from 'classnames';
import { ServiceCompany, supportingServices } from 'configs/services';

import style from 'ui/home/Service.module.scss';

interface ServiceProps {
  serviceCompany?: ServiceCompany;
  border?: boolean;
}

const Service = ({ serviceCompany, border }: ServiceProps) => (
  <section className={classNames(style.container, { [style.header]: !serviceCompany, [style.border]: border })}>
    <section className={style.company}>
      {serviceCompany && <img className={style.logo} src={serviceCompany.logo} />}
    </section>
    <section className={style.services}>
      {supportingServices.map((item, index) => (
        <section
          key={`${serviceCompany?.name}-${item.name}`}
          className={classNames(style.service, { [style.center]: serviceCompany, [style.odd]: index % 2 === 1 })}
        >
          {serviceCompany &&
            (item.available.includes(serviceCompany.name) ? (
              <img className={style.checkImg} src="/assets/check.svg" />
            ) : (
              <img className={style.checkImg} src="/assets/x.svg" />
            ))}
          {!serviceCompany && item.name}
        </section>
      ))}
      <section
        className={classNames(style.service, {
          [style.center]: serviceCompany,
          [style.odd]: supportingServices.length % 2 === 1,
        })}
      >
        {serviceCompany ? serviceCompany.sla : `System Uptime SLA`}
      </section>
    </section>
  </section>
);

export default Service;
