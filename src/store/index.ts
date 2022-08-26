import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";

import cartData from "./modules/Cart/reducer";
import productData from "./modules/Products/reducer";

const rootReducers = combineReducers({
  cart: cartData,
  products: productData,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
