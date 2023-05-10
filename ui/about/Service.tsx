import classNames from 'classnames';
import { supportingServices } from 'configs/services';
import style from 'ui/about/Service.module.scss';

import type { ServiceCompany } from 'configs/services';

interface ServiceProps {
  serviceCompany?: ServiceCompany;
  border?: boolean;
}

const Service = ({ serviceCompany, border }: ServiceProps) => (
  <section className={classNames(style.container, { [style.header]: !serviceCompany, [style.border]: border })}>
    <section className={style.company}>
      {serviceCompany?.logo && <img className={style.logo} src={serviceCompany?.logo} />}
    </section>
    <section className={style.services}>
      {supportingServices.map((item, index) => (
        <section
          key={`${serviceCompany?.name && serviceCompany?.name}-${item.name}`}
          className={classNames(style.service, { [style.center]: serviceCompany, [style.odd]: index % 2 === 1 })}
        >
          {serviceCompany?.name &&
            (item.available.includes(serviceCompany?.name) ? (
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
        {serviceCompany?.sla ? serviceCompany?.sla : 'System Uptime SLA'}
      </section>
    </section>
  </section>
);

export default Service;
