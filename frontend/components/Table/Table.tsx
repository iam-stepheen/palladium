import * as React from "react";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/router";

const Table: React.FC<{
  tableColumns: any;
  tableData: any;
  onRowSelect: (id: string) => void;
}> = ({ tableColumns, tableData, onRowSelect }) => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData(tableData);
  }, [tableData]);
  const router = useRouter();

  const columns = tableColumns;
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handlRow = (row: any) => {
    console.log(row);
    router.push({
      pathname: `viewProduct/${row.original.id}`,
      query: {
        productName: row.original.productName,
        productType: row.original.productType,
        productDesctiption: row.original.productDesctiption,
        status: row.original.status,
        createdDate: row.original.createdDate,
      },
    });
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase my">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th scope="col" className=" mt-4 px-6 py-3 " key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white my-8">
          {table.getRowModel().rows.map((row) => (
            <tr
              onClick={() => {
                handlRow(row);
              }}
              className="py-2 cursor-pointer"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td className="py-3 px-8" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
    </div>
  );
};

export default Table;
