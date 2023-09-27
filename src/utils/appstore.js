import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const appstore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appstore;
