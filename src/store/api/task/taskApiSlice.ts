import { apiSlice } from "../apiSlice";

export const taskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTaskListData: builder.query<any, any>({
      query: () => ({
        url: "COMMON.GET_MASTER_DATA",
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => {
        return response;
      },
    }),
    getTaskFilterData: builder.mutation<any, any>({
      query: (payload) => ({
        url: "TaskItems/filter",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response, meta, arg) => {
        return response;
      },
    }),
    saveTask: builder.mutation<any, any>({
      query: (payload) => ({
        url: "TaskItems",
        method: "POST",
        body: payload,
      }),
    }),
    updateTask: builder.mutation<any, { id: string; payload: any }>({
      query: ({ id, payload }) => ({
        url: `TaskItems/${id}`,
        method: "PUT",
        body: payload,
      }),
    }),
    
  }),
});

export const { useGetTaskListDataQuery, useGetTaskFilterDataMutation,useSaveTaskMutation,useUpdateTaskMutation } =
  taskApiSlice;
