import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => "/api/category",
      providesTags: ["Category"],
    }),
    // PRODUCT

    getProduct: builder.query({
      query: () => "/api/product",
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetCategoryQuery, useGetProductQuery } = newsApi;
