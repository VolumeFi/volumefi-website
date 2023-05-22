/* eslint-disable  @typescript-eslint/no-explicit-any */
import type { PropsWithChildren } from 'react';

interface DataTableRowProps {
  idx: string | number;
  data?: any;
}

export const DataTableRow = ({ idx, data, children }: PropsWithChildren<DataTableRowProps>) => {
  if (children) {
    return <tr>{children}</tr>;
  }

  return (
    <tr>
      {data?.map((value, index) => (
        <td key={`table-${idx}-${index}`}>{value}</td>
      ))}
    </tr>
  );
};
