import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flats: [],
};

const flatSlice = createSlice({
  name: "flat",
  initialState,
  reducers: {
    storeFlat: (state, action) => {
      state.flats = action.payload;
    },
    
  },
});

export const { storeFlat } = flatSlice.actions;

export const selectFlats = (state) => state.flat.flats;

export default flatSlice.reducer;
