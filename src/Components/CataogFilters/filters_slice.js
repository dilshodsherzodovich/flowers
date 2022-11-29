import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeFlower: null,
  minCost: "",
  maxCost: "",
  activeColor: "",
  activeDiameter: [],
  activeLength: [],
  activeIngredients: [],
  activePersonals: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setActiveFlower: (state, action) => {
      state.activeFlower = action.payload;
    },
    setMinCost: (state, action) => {
      state.minCost = action.payload;
    },
    setMaxCost: (state, action) => {
      state.maxCost = action.payload;
    },
    setActiveColor: (state, action) => {
      state.activeColor = action.payload;
    },
    addDiameter: (state, action) => {
      state.activeDiameter = [...state.activeDiameter, action.payload];
    },
    removeDiameter: (state, action) => {
      state.activeDiameter = state.activeDiameter.filter(
        (item, index) => index !== action.payload
      );
    },
    addLength: (state, action) => {
      state.activeLength = [...state.activeLength, action.payload];
    },
    removeLength: (state, action) => {
      state.activeLength = state.activeLength.filter(
        (item, index) => index !== action.payload
      );
    },
    addIngredient: (state, action) => {
      state.activeIngredients = [...state.activeIngredients, action.payload];
    },
    removeIngredient: (state, action) => {
      state.activeIngredients = state.activeIngredients.filter(
        (item, index) => index !== action.payload
      );
    },
    addPersonal: (state, action) => {
      state.activePersonals = [...state.activePersonals, action.payload];
    },
    removePersonal: (state, action) => {
      state.activePersonals = state.activePersonals.filter(
        (item, index) => index !== action.payload
      );
    },
  },
});

const { reducer, actions } = filterSlice;

export default reducer;
export const {
  setActiveFlower,
  setMaxCost,
  setMinCost,
  setActiveColor,
  addDiameter,
  removeDiameter,
  addLength,
  removeLength,
  addIngredient,
  removeIngredient,
  addPersonal,
  removePersonal,
} = actions;
