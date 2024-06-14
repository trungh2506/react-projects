import { configureStore, createReducer } from "@reduxjs/toolkit";
import couterSlice from "../components/counter/couterSlice";
const store = configureStore({
  reducer: {
    counter: couterSlice,
  },
});

export default store;
