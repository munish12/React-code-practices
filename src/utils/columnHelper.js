import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

const generateColumns = (fields) => {
  return fields.map((field) => {
    const { accessor, header } = field;
    return columnHelper.accessor(accessor, {
      cell: (info) => info.getValue(),
      header,
    });
  });
};

export default generateColumns;
