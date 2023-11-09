import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  initialState: [],
  name: "cards",
  reducers: {
    addCard: (state, action) => {
      state.push(action.payload);
    },
    clear: (state, action) => {
      return [];
    },
  },
});
export const { addCard,clear } = cardSlice.actions;
export default cardSlice.reducer;
