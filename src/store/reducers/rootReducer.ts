import { combineReducers } from "redux";
import { uiSlice } from "./ui";
import { apiSlice } from "../api/apiSlice.ts";
import { authSlice } from "./authSlice.ts";
import { commonSlice } from "./commonSlice.ts";

const rootReducer = combineReducers({
  ui: uiSlice.reducer,
  authSlice: authSlice.reducer,
  commonSlice: commonSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
