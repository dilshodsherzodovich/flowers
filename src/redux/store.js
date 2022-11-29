import { configureStore } from "@reduxjs/toolkit";
import StringMiddleWare from "../Middlewares/StringMiddlewares";

//Reducers
import flowers from "../Components/CatalogFlowers/flowers_slice";
import filter from "../Components/CataogFilters/filters_slice";
import singleFlower from "../Components/FlowerCard/singleFlower_slice";

const store = configureStore({
  reducer: { filter, flowers, singleFlower },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(StringMiddleWare),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
