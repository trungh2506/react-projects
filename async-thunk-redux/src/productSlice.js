import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getAllProduct",
  async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      return res.data;
    } catch (error) {
      return error;
    }
  }
);
export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (productId) => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      return res.data;
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  data: [],
  product: undefined,
  isSuccess: false,
  message: "",
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.message = action.error.message;
      state.loading = false;
      state.isSuccess = false;
    });

    builder.addCase(getProductById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.isSuccess = true;
      state.product = action.payload;
    });
    builder.addCase(getProductById.rejected, (state, action) => {
      state.loading = true;
      state.isSuccess = false;
      state.message = action.error.message;
    });
  },
});

export default productsSlice;
