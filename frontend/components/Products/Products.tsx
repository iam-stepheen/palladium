import React from "react";
import Table from "../Table/Table";
const AllProducts: React.FC<{
  columns: any;
  data: any;
  productsDetailsHandler: (id: string) => void;
}> = ({ columns, data, productsDetailsHandler }) => {
  console.log("users", data);
  return (
    <Table
      tableData={data}
      tableColumns={columns}
      onRowSelect={productsDetailsHandler}
    />
  );
};
export default AllProducts;
