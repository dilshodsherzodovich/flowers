import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiBaseUrl } from "../../config";
import { useHttp } from "../../hooks/useHttp";

const initialState = {
  reviews: [],
  loading: false,
};

export const fetchReviews = createAsyncThunk(
  "reviews/fetchreviews",
  async () => {
    const { request } = useHttp();
    return await request(`${apiBaseUrl}products/v1/productReview_api_view/`);
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.loading = false;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.loading = "error";
      });
  },
});
// eslint-disable-next-line
const { reducer, actions } = reviewSlice;
export default reducer;
