import { url } from "inspector";
import { createProduct, createProductResponse } from "./types";

import { apiService } from "../api";

export const authApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation<createProductResponse, createProduct>({
      query: (payload) => ({
        url: "products",
        method: "post",
        body: payload,
      }),
    }),

    getAllProducts: builder.query<{ items: createProductResponse[] }, any>({
      query: () => ({
        url: `products`,
      }),
      keepUnusedDataFor: 0,
    }),

    getProductById: builder.query<{ items: [] }, any>({
      query: (productId) => ({
        url: `products/getProductById?id=${productId}`,
      }),
      keepUnusedDataFor: 0,
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductByIdQuery,
  useGetAllProductsQuery,
} = authApi;
