interface DataTableNoContentProps {
  noContent?: React.ReactNode;
}

export const DataTableNoContent = ({ noContent }: DataTableNoContentProps) => (
  <section>{noContent ? noContent : 'No data available'}</section>
);
