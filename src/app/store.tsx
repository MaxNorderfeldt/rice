import { configureStore } from "@reduxjs/toolkit";
import riceReducer from "../slices/riceSlice";
import workersReducer from "../slices/workersSlice";

export const store = configureStore({
  reducer: {
    rice: riceReducer,
    workers: workersReducer,
  },
});
