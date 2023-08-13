import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProduct: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sortProduct: (state, action) => {
      const { data, sort } = action.payload;
      let tempProducts = [];
      if (sort === "all") {
        tempProducts = data;
        
      }
      if (sort === "lowest-price") {
        tempProducts = data.slice().sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (sort === "highest-price") {
        tempProducts = data.slice().sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (sort === "room-lowest-to-highest") {
        tempProducts = data.slice().sort((a, b) => {
          return a.rooms - b.rooms;
        });
      }
      if (sort === "room-highest-to-lowest") {
        tempProducts = data.slice().sort((a, b) => {
          return b.rooms - a.rooms;
        });
      }
      if (sort === "size-lowest-to-highest") {
        tempProducts = data.slice().sort((a, b) => {
          return a.area - b.area;
        });
      }
      if (sort === "size-highest-to-lowest") {
        tempProducts = data.slice().sort((a, b) => {
          return b.area - a.area;
        });
      }
      state.filteredProduct = tempProducts;
    },
  
  },
});

export const { sortProduct, filteredByStatus } = filterSlice.actions;

export const selectSorted = (state) => state.filter.filteredProduct;

export default filterSlice.reducer;
