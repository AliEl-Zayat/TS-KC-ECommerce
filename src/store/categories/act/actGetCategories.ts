import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCategory } from "@customTypes/category";

type TResponse = TCategory[];

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get<TResponse>(
        "https://quilted-hazel-border.glitch.me/categories"
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      }
      return rejectWithValue("An error occurred");
    }
  }
);

export default actGetCategories;
