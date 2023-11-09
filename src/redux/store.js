import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./slice";
import cardSlice from "./cardSlice";

export const Store = configureStore({
  reducer: {
    news: newsSlice,
    card: cardSlice ,
  },
});
