import { createSlice } from "@reduxjs/toolkit";

export interface UiState {
  colorMode: string;
  collapse: boolean;
  userCollapse: boolean;
  showDocumentPane: boolean;
}

const initialState: UiState = {
  colorMode: "light",
  collapse: false,
  userCollapse: false,
  showDocumentPane: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setColorMode: (state) => {
      state.colorMode = state.colorMode === "dark" ? "light" : "dark";
    },
    setDrawer: (state) => {
      state.collapse = !state.collapse;
    },
    setUserDrawer: (state) => {
      state.userCollapse = !state.userCollapse;
    },
    setShowDocumentPane: (state, action) => {
      state.showDocumentPane = action.payload;
    },
  },
});

export const { setColorMode, setDrawer, setUserDrawer, setShowDocumentPane } =
  uiSlice.actions;

export default uiSlice.reducer;

export const selectColorMode = (state: any) => state.ui.colorMode;
export const selectDrawer = (state: any) => state.ui.collapse;
export const selectUserDrawer = (state: any) => state.ui.userCollapse;
export const selectShowDocumentPane = (state: any) => state.ui.showDocumentPane;
