import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {} from "./api";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["supply"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    signUp: builder.mutation({
      query: (data) => ({
        url: "/sign-up",
        method: "POST",
        body: data,
      }),
    }),
    getAllSupply: builder.query({
      query: () => ({
        url: "/supply",
        method: "GET",
      }),
      providesTags: ["supply"],
    }),
    getSingleSupply: builder.query({
      query: (data) => ({
        url: `/supply/${data.id}`,
        method: "GET",
      }),
    }),
    createSupply: builder.mutation({
      query: (data) => ({
        url: `/supply/create-supply`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["supply"],
    }),
    deleteSupply: builder.mutation({
      query: (data) => ({
        url: `/supply/${data.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["supply"],
    }),
    updateSupply: builder.mutation({
      query: (data) => ({
        url: `/supply/${data.id}`,
        method: "PATCH",
        body: data.payload,
      }),
      invalidatesTags: ["supply"],
    }),
  }),
});
export const {
  useLoginMutation,
  useSignUpMutation,
  useGetAllSupplyQuery,
  useGetSingleSupplyQuery,
  useCreateSupplyMutation,
  useDeleteSupplyMutation,
  useUpdateSupplyMutation,
} = baseApi;
