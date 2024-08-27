import { apiSlice } from "../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMasterData: builder.query<any, any>({
      query: () => ({
        url: "COMMON.GET_MASTER_DATA",
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => {
        return response?.result;
      },
    }),
    getSearchableDropdownData: builder.mutation<any, any>({
      query: (data: any) => ({
        url: data?.url,
        method: "POST",
        body: data?.payload,
      }),
      transformResponse: (response, meta, arg) => {
        return response?.result;
      },
    }),
  }),
});

export const { useGetMasterDataQuery, useGetSearchableDropdownDataMutation } =
  authApiSlice;
