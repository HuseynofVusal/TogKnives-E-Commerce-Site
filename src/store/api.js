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
  tagTypes: ["Category", "Product"],
  endpoints: (builder) => ({
    // AUTH
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

    // CATEGORY
    getCategory: builder.query({
      query: () => "/api/category",
      providesTags: ["Category"],
    }),
    createCategory: builder.mutation({
      query: (params) => ({
        url: "/api/category",
        method: "POST",
        body: params,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/api/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: builder.mutation({
      query: (params) => ({
        url: `/category/${params.modal}`,
        method: "PUT",
        body: { name: params.name, slug: params.slug },
      }),
      invalidatesTags: ["Category"],
    }),

    // IMAGE UPLOAD
    uploadImage: builder.mutation({
      query: (formData) => ({
        url: "/api/upload/image",
        method: "POST",
        body: formData,
      }),
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

    // PRODUCT
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/api/product",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Product"],
    }),
    getProduct: builder.query({
      query: () => "/api/product/all",
      providesTags: ["Product"],
    }),
    getProductByCategoryId: builder.query({
      query: (id) => `/api/product/category/${id}`,
      providesTags: ["Category"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/api/product/${id}`,
        method: "DELETE",
        // body: id,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetCategoryQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
  useCreateCategoryMutation,
  useUploadImageMutation,
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductQuery,
  useGetProductByCategoryIdQuery,
  useAddBasketMutation,
  useGetBasketQuery,
  useDeleteBasketMutation,
} = newsApi;
export default newsApi;
