import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import flatReducer from "./slice/flatSlice";
import filterReducer from "./slice/filterSlice";
import favReducer from "./slice/favSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  flat: flatReducer,
  filter: filterReducer,
  fav: favReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
