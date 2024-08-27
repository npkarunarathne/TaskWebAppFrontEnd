import { apiSlice } from "../apiSlice";
import { LoginRequest, UserResponse } from "../../../types/common";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAuthenticate: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "User/login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response) => {
        return response;
      },
    }),
  }),
});

export const { useGetAuthenticateMutation } = authApiSlice;
