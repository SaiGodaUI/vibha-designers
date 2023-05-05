import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index";
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: reducers,
});
