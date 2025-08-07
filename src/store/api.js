import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",

    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  tagTypes: ["Category", "Product", "Basket"],

  endpoints: (builder) => ({
    // Login
    login: builder.mutation({
      query: (params) => ({
        url: "/api/auth/signin",
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: params,
      }),
    }),

    // ✅ Category
    getCategory: builder.query({
      query: () => "/api/category",
      providesTags: ["Category"],
    }),

    // ✅ Product
    getProduct: builder.query({
      query: () => "/api/product",
      providesTags: ["Product"],
    }),

    // getBasket
    getBasket: builder.query({
      query: () => "/api/basket",
      providesTags: ["Basket"],
    }),

    // ✅ Add to basket
    addBasket: builder.mutation({
      query: (params) => ({
        url: "/api/basket",
        method: "POST",
        body: {
          productId: params.basketId,
          quantity: params.quantity,
        },
      }),
      invalidatesTags: ["Basket"],
    }),

    // DELETE basket
    deleteBasket: builder.mutation({
      query: (id) => ({
        url: `/api/basket`,
        method: "DELETE",
        body: {
          id: Number(id),
        },
      }),
      invalidatesTags: ["Basket"],
    }),

    //UPDATE product
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/product/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetProductQuery,
  useAddBasketMutation,
  useDeleteBasketMutation,
  useUpdateProductMutation,
  useLoginMutation,
  useGetBasketQuery,
} = newsApi;
