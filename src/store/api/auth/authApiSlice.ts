import { apiSlice } from "../apiSlice";
import { LoginRequest, UserResponse } from "../../../types/common";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAuthenticate: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "User/UserLogin",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response) => {
        return response?.data;
      },
    }),
  }),
});

export const { useGetAuthenticateMutation } = authApiSlice;
