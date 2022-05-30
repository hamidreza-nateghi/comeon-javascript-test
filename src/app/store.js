import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice";
import { filterSlice } from "../features/filterSlice";

const reducer = combineReducers({
  filter: filterSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
