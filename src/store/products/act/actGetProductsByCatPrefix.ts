import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@customTypes/product";

type TResponse = TProduct[];

const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get<TResponse>(
        `https://quilted-hazel-border.glitch.me/products?cat_prefix=${prefix}`
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An error occurred");
      }
    }
  }
);

export default actGetProductsByCatPrefix;
