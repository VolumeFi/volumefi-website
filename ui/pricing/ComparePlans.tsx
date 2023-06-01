import classNames from 'classnames';
import { DataTable, DataTableRow } from 'components/DataTable';
import { getComparePlanHeaders, getComparePlanData } from 'shared/configs/subscriptionPlans';
import SectionContainer from 'ui/common/SectionContainer';
import style from 'ui/pricing/ComparePlans.module.scss';
import { v4 as uuidv4 } from 'uuid';

const comparePlanHeaders = getComparePlanHeaders();
const comparePlanData = getComparePlanData();

const renderHeaders = () => {
  return comparePlanHeaders.map((column, index) => (
    <th key={column}>
      <div>
        <span className={index === 2 ? style.highlight : ''}>{column}</span>
      </div>
    </th>
  ));
};

const renderCells = (data, idx) => {
  return (
    <DataTableRow key={idx} idx={idx}>
      {data.map((value, index) => (
        <td
          key={uuidv4()}
          className={classNames(style.column, { [style.first]: index === 0, [style.highlight]: index === 2 })}
        >
          {value === true && index === 2 && (
            <img className={style.checkIcon} src="/assets/pricing/check-highlight.svg" />
          )}
          {value === true && index !== 2 && <img className={style.checkIcon} src="/assets/pricing/check.svg" />}
          {value === false && (
            <img className={classNames(style.checkIcon, style.disabled)} src="/assets/pricing/x.svg" />
          )}
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
          <DataTable
            columns={comparePlanHeaders}
            data={comparePlanData}
            renderHeaders={renderHeaders}
            renderCells={renderCells}
          />
        </section>
      </section>
    </section>
  </SectionContainer>
);

export default ComparePlans;
