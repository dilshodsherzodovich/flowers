import { configureStore } from "@reduxjs/toolkit";
import StringMiddleWare from "../Middlewares/StringMiddlewares";

const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(StringMiddleWare),
    devTools: process.env.NODE_ENV !== "production",
})

export default store;