import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  customerStatus?: any;
}

const initialState: AuthState = {
  customerStatus: [],
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setCustomerStatus: (state, action) => {
      state.customerStatus = action.payload;
    },
  },
});

export const { setCustomerStatus } = commonSlice.actions;

export default commonSlice.reducer;

export const selectCustomerStatus = (state: any) => state.commonSlice.customerStatus;
