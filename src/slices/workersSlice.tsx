import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workers: 0,
  farmers: 0,
};

export const workerSlice = createSlice({
  name: "workers",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementWorkers: (state, action) => {
      state.workers += action.payload;
    },
    incrementFarmers: (state, action) => {
      state.farmers += action.payload;
    },
    decreaseWorkers: (state, action) => {
      state.workers -= action.payload;
    },
  },
});

export const { incrementWorkers, decreaseWorkers, incrementFarmers } =
  workerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectWorkers = (state: any) => state.workers.workers;
export const selectFarmers = (state: any) => state.workers.farmers;

export default workerSlice.reducer;
