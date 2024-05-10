import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {} from "./api";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetPostsQuery } = baseApi;
