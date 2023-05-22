/* eslint-disable  @typescript-eslint/no-explicit-any */
import style from 'components/DataTable/DataTableBody.module.scss';
import { DataTableRow } from 'components/DataTable/DataTableRow';

interface DataTableBodyProps {
  data: any[];
  renderCells?: (item: any, index: number) => React.ReactNode;
}

export const DataTableBody = ({ data, renderCells }: DataTableBodyProps) => (
  <tbody className={style.container}>
    {data.map((item, idx) => (renderCells ? renderCells(item, idx) : <DataTableRow key={idx} idx={idx} data={item} />))}
  </tbody>
);
