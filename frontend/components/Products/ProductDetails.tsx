import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";

import * as Yup from "yup";

const ProductDetails: React.FC<{
  productName: string;
  productType: string;
  productDesctiption: string;
  status: string;
  createdDate: string;
}> = ({
  productName,
  productType,
  productDesctiption,
  status,
  createdDate,
}) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <div
        onClick={goBack}
        className="flex flex-row items-center my-2 gap-2 cursor-pointer"
      >
        <img className="h-2 w-2" src="/images/back.png" />
        <p className="text-gray-500 text-sm">Back </p>
      </div>

      <div className="my-6"></div>
      <Card>
        <p className="font-bold mb-4">Product Details</p>

        <form>
          <div className="grid grid-cols-3 grid-rows-2 gap-x-12 gap-y-8">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-textGrey">Product Name</p>
              <input
                name="firstName"
                className="border bg-background border-inputBorder rounded-md h-10 px-4"
                type="text"
                value={router.query.productName}
                disabled
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-textGrey">Product Type</p>
              <input
                name="firstName"
                className="border bg-background border-inputBorder rounded-md h-10 px-4"
                type="text"
                value={router.query.productType}
                disabled
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-textGrey">Product Description</p>
              <input
                name="firstName"
                className="border bg-background border-inputBorder rounded-md h-10 px-4"
                type="text"
                value={router.query.productDescription}
                disabled
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-textGrey">Product Status</p>
              <input
                name="firstName"
                className="border bg-background border-inputBorder rounded-md h-10 px-4"
                type="text"
                value={router.query.status}
                disabled
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-textGrey">Created Date</p>
              <input
                name="firstName"
                className="border bg-background border-inputBorder rounded-md h-10 px-4"
                type="text"
                value={router.query.createdDate}
                disabled
              />
            </div>
          </div>
        </form>

        <div className="border border-b-1 my-12 border-highlighted"></div>
      </Card>
    </>
  );
};

export default ProductDetails;
