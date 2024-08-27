import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  access_token?: string | null;
  refresh_token?: string | null;
  user?: string;
}

const getToken = () => {
  return localStorage.getItem("access_token")
    ? localStorage.getItem("access_token")
    : null;
};

const initialState: AuthState = {
  access_token: getToken(),
  refresh_token: null,
  user: "",
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.access_token = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refresh_token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setUser, setRefreshToken } = authSlice.actions;

export default authSlice.reducer;

export const selectToken = (state: any) => state.authSlice.access_token;
export const selectRefreshToken = (state: any) => state.authSlice.refresh_token;
export const selectUser = (state: any) => state.authSlice.user;
