/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import style from 'components/DataTable/DataTable.module.scss';
import { DataTableBody } from 'components/DataTable/DataTableBody';
import { DataTableNoContent } from 'components/DataTable/DataTableNoContent';
import { HeadCell } from 'components/DataTable/HeadCell';

interface DataTableProps {
  loading?: boolean;
  columns: string[];
  data: any[];
  pagination?: React.ReactNode;
  renderCells?: (item: any, index: number) => React.ReactNode;
  noContent?: React.ReactNode;
  className?: string;
}

export const DataTable = ({
  loading,
  columns,
  data,
  pagination,
  renderCells,
  noContent,
  className,
}: DataTableProps) => {
  return (
    <section className={classNames(style.container, className)}>
      <table cellPadding={0} cellSpacing={0} className={style.table}>
        <thead>
          <tr className={style.header}>
            {columns.map((col) => (
              <HeadCell key={col} column={col} />
            ))}
          </tr>
        </thead>
        {!loading && <DataTableBody data={data} renderCells={renderCells} />}
      </table>

      {!loading && data.length === 0 && <DataTableNoContent noContent={noContent} />}

      {pagination && pagination}
    </section>
  );
};
