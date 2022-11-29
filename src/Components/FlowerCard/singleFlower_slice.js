import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp";
import { apiBaseUrl } from "../../config";

const initialState = {
  flower: {},
  loading: false,
  activeImageIndex: 0,
  activeLengthBtnIndex: null,
  activePackageBtnIndex: null,
  activeGreenBtnIndex: null,
};

export const fetchFlower = createAsyncThunk(
  "singleFlower/fetchFlower",
  async (id) => {
    const { request } = useHttp();
    return await request(`${apiBaseUrl}/products/v1/product_api_view/${id}/`);
  }
);

const flowerSlice = createSlice({
  name: "singleFlower",
  initialState,
  reducers: {
    setActiveImageIndex: (state, action) => {
      state.activeImageIndex = action.payload;
    },
    setActiveLengthBtnIndex: (state, action) => {
      state.activeLengthBtnIndex = action.payload;
    },
    setActivePackageBtnIndex: (state, action) => {
      state.activePackageBtnIndex = action.payload;
    },
    setActiveGreenBtnIndex: (state, action) => {
      state.activeGreenBtnIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlower.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFlower.fulfilled, (state, action) => {
        state.flower = action.payload;
        state.loading = false;
      })
      .addCase(fetchFlower.rejected, (state) => {
        state.loading = "error";
      });
  },
});

const { reducer, actions } = flowerSlice;
export const {
  setActiveImageIndex,
  setActiveGreenBtnIndex,
  setActiveLengthBtnIndex,
  setActivePackageBtnIndex,
} = actions;
export default reducer;
