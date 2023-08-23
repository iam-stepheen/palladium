import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:6500",
    prepareHeaders: async (headers, { getState }) => {
      return headers;
    },
  }),
  tagTypes: [""],
  endpoints: () => ({}),
});
