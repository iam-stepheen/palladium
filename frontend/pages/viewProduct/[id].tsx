import Layout from "@/components/Layout/Layout";

import { useRouter } from "next/router";
import { NextPageWithLayout } from "../_app";
import ProductDetails from "@/components/Products/ProductDetails";

const UsersDetails: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  // const { isLoading, data } = useGetUserQuery(id);

  //console.log("userData", data);
  return (
    <>
      {[] && (
        <ProductDetails
          productName={""}
          status={""}
          productType={""}
          productDesctiption={""}
          createdDate={""}
        />
      )}
    </>
  );
};

UsersDetails.getLayout = Layout;

export default UsersDetails;
