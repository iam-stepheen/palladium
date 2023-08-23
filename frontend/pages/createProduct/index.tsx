import { useFormik } from "formik";
import Layout from "@/components/Layout/Layout";
import React from "react";
import * as Yup from "yup";
import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { ReactNotifications } from "react-notifications-component";
import { NextPageWithLayout } from "../_app";
import { useCreateProductMutation } from "@/store/api/products/product.api";
const CreateProduct: NextPageWithLayout = () => {
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const productForm = useFormik({
    initialValues: {
      productName: "",
      productType: "",
      productDesctiption: "",
      status: "",
    },
    validationSchema: Yup.object({
      productName: Yup.string().required("Required"),
      productType: Yup.string().required("Required"),
      productDesctiption: Yup.string().required("Required"),
      status: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      createProduct(values)
        .unwrap()
        .then(async (res) => {
          Store.addNotification({
            title: "Successfull",
            message: "product created successfullt",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
        })
        .catch(() => {});
    },
  });
  return (
    <div className="fixed flex justify-center items-center left-0 translate-y-[-50%] top-1/2 w-full">
      <div className="bg-white max-w-sm w-full mx-auto py-6 px-8 drop-shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-bold">Create Product</h2>
        </div>

        <form onSubmit={productForm.handleSubmit}>
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-bold text-textGrey">Product Name</p>
              {productForm.touched.productName &&
              productForm.errors.productName ? (
                <p className="text-red-400">{productForm.errors.productName}</p>
              ) : null}
              <input
                className="border bg-background border-inputBorder w-full rounded-md h-10 px-4"
                type="text"
                name="productName"
                id="productName"
                onChange={productForm.handleChange}
                value={productForm.values.productName}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-bold text-textGrey">Product Type</p>
                {productForm.touched.productType &&
                productForm.errors.productType ? (
                  <p className="text-red-400">
                    {productForm.errors.productType}
                  </p>
                ) : null}
                <input
                  className="border bg-background border-inputBorder w-full rounded-md h-10 px-4"
                  type="text"
                  name="productType"
                  id="productType"
                  onChange={productForm.handleChange}
                  value={productForm.values.productType}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-bold text-textGrey">Product Description</p>
                {productForm.touched.productDesctiption &&
                productForm.errors.productDesctiption ? (
                  <p className="text-red-400">
                    {productForm.errors.productDesctiption}
                  </p>
                ) : null}
                <input
                  className="border bg-background border-inputBorder w-full rounded-md h-10 px-4"
                  type="text"
                  name="productDesctiption"
                  id="productDesctiption"
                  onChange={productForm.handleChange}
                  value={productForm.values.productDesctiption}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-bold text-textGrey">Product Status</p>
                {productForm.touched.status && productForm.errors.status ? (
                  <p className="text-red-400">{productForm.errors.status}</p>
                ) : null}
                <input
                  className="border bg-background border-inputBorder w-full rounded-md h-10 px-4"
                  type="text"
                  name="status"
                  id="status"
                  onChange={productForm.handleChange}
                  value={productForm.values.status}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 bg-background w-full py-2 rounded-md text-lightBlue font-bold"
          >
            Create Product
          </button>
        </form>
      </div>
      <ReactNotifications />
    </div>
  );
};

CreateProduct.getLayout = Layout;

export default CreateProduct;
