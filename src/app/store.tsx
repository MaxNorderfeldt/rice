import { configureStore } from "@reduxjs/toolkit";
import riceReducer from "../slices/riceSlice";
import workersReducer from "../slices/workersSlice";
import buildingsReducer from "../slices/buildingsSlice";

export const store = configureStore({
  reducer: {
    rice: riceReducer,
    workers: workersReducer,
    buildings: buildingsReducer,
  },
});
