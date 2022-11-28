import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp";

const initialState = {
  flowers: [],
  loading: false,
  activeSortFilter: "По популярности",
  activeCountFlowers: [],
};

export const fetchFlowers = createAsyncThunk(
  "flowers/fetchFlowers",
  async () => {
    const { request } = useHttp();
    return await request(
      "https://minimer07.pythonanywhere.com/products/v1/Product/"
    );
  }
);

const flowersSlice = createSlice({
  name: "flowers",
  initialState,
  reducers: {
    setActiveSortFilter: (state, action) => {
      state.activeSortFilter = action.payload;
    },
    addCountFlowers: (state, action) => {
      state.activeCountFlowers = [...state.activeCountFlowers, action.payload];
    },
    removeCountFilters: (state, action) => {
      state.activeCountFlowers = state.activeCountFlowers.filter(
        (item) => +item !== +action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlowers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFlowers.fulfilled, (state, action) => {
        state.flowers = action.payload;
        state.loading = false;
      })
      .addCase(fetchFlowers.rejected, (state) => {
        state.loading = "error";
      });
  },
});

const { reducer, actions } = flowersSlice;
export default reducer;
export const { setActiveSortFilter, addCountFlowers, removeCountFilters } =
  actions;
