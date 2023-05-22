interface HeadCellProps {
  column: string;
}

export const HeadCell = ({ column }: HeadCellProps) => {
  return (
    <th>
      <div>
        <span>{column}</span>
      </div>
    </th>
  );
};
