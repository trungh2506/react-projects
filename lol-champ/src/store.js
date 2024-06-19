import { configureStore } from "@reduxjs/toolkit";
import { championApi } from "./champApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    [championApi.reducerPath]: championApi.reducer,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(championApi.middleware),
});
export default store;
