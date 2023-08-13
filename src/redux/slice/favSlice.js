import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  favSlice: [],
};

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const temp = state.favSlice.find((item) => item.id === action.payload.id);
      if (temp) {
      } else {
        state.favSlice.push({ ...action.payload });
      }
    },
  },
});

export const { addToFav } = favSlice.actions;

export const selectFav = (state) => state.fav.favSlice;
export default favSlice.reducer;
