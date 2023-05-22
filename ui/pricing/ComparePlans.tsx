import classNames from 'classnames';
import { DataTable, DataTableRow } from 'components/DataTable';
import { getComparePlanHeaders, getComparePlanData } from 'shared/configs/subscriptionPlans';
import SectionContainer from 'ui/common/SectionContainer';
import style from 'ui/pricing/ComparePlans.module.scss';
import { v4 as uuidv4 } from 'uuid';

const comparePlanHeaders = getComparePlanHeaders();
const comparePlanData = getComparePlanData();

const renderCells = (data, idx) => {
  return (
    <DataTableRow key={idx} idx={idx}>
      {data.map((value, index) => (
        <td key={uuidv4()} className={classNames(style.column, { [style.first]: index === 0 })}>
          {value === true && <img className={style.checkIcon} src="/assets/pricing/check.svg" />}
          {value === false && <img className={style.checkIcon} src="/assets/pricing/x.svg" />}
          {value !== true && value !== false && <div className={index !== 0 ? style.text : ''}>{value}</div>}
        </td>
      ))}
    </DataTableRow>
  );
};

const ComparePlans = () => (
  <SectionContainer>
    <section className={style.container}>
      <h2 className={style.title}>Compare Plans</h2>
      <section className={style.tableWrapper}>
        <section className={style.scrollInnerWrapper}>
          <DataTable columns={comparePlanHeaders} data={comparePlanData} renderCells={renderCells} />
        </section>
      </section>
    </section>
  </SectionContainer>
);

export default ComparePlans;
