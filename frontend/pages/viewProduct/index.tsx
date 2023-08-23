import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "../_app";
import Table from "@/components/Table/Table";
import TableSkeleton from "@/components/Table/TableSkeleton";
import { useGetAllProductsQuery } from "@/store/api/products/product.api";
import AllProducts from "@/components/Products/Products";

const columns = [
  {
    header: "Product Name",
    accessorKey: "productName",
    id: "productName",
    cell: (info: any) => info.getValue(),
    footer: (props: any) => props.column.id,
  },
  {
    header: "Product Type",
    accessorKey: "productType",
    id: "productType",
    cell: (info: any) => info.getValue(),
    footer: (props: any) => props.column.id,
  },
  {
    header: "Product Description",
    accessorKey: "productDesctiption",
    id: "productDesctiption",
    cell: (info: any) => info.getValue(),
    footer: (props: any) => props.column.id,
  },
  {
    header: "Status",
    accessorKey: "status",
    id: "status",
    cell: (info: any) => info.getValue(),
    footer: (props: any) => props.column.id,
  },
];

const AllUsers: NextPageWithLayout = () => {
  const router = useRouter();
  const { data, isLoading } = useGetAllProductsQuery({});

  const dataFormatted = data?.items.map((x) => {
    return {
      id: x.id,
      productName: x.productName,
      productType: x.productType,
      productDesctiption: x.productDesctiption,
      status: x.status,
      createdDate: x.createdDate,
    };
  });

  const poductsDetailsHandler = (id: string) => {};
  return (
    <>
      {isLoading && <TableSkeleton />}{" "}
      {!isLoading && (
        <AllProducts
          productsDetailsHandler={poductsDetailsHandler}
          columns={columns}
          data={isLoading ? [] : dataFormatted}
        />
      )}
    </>
  );
};

AllUsers.getLayout = Layout;

export default AllUsers;
