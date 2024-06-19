import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const championApi = createApi({
  reducerPath: "championApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ddragon.leagueoflegends.com/cdn/14.12.1/data/vi_VN/",
  }),
  endpoints: (builder) => ({
    getChampionByName: builder.query({
      query: (champName) => `champion/${champName}.json`,
    }),
  }),
});

export const { useGetChampionByNameQuery } = championApi;
