import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const mutex = new Mutex();

const baseQueryWithReAuth: any = async (
  args: any,
  api: any,
  extraOptions: any,
) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  let token;
  let user;
  let refreshToken;
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState, endpoint }: any) => {
      console.log({ endpoint });
      console.log(getState()?.authSlice);
      token = getState()?.authSlice?.access_token;
      user = getState()?.authSlice?.user;
      refreshToken = getState()?.authSlice?.refresh_token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
      }
      headers.set("ngrok-skip-browser-warning", "6024");
      headers.set("Accept", `application/json`);
      headers.set("lang", navigator.language);
      return headers;
    },
  });
  // return rawBaseQuery(args, api, extraOptions);
  const result: any = await rawBaseQuery(args, api, extraOptions);
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});
