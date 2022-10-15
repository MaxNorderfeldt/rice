import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  workerType: "peasant",
};

export const workerSlice = createSlice({
  name: "workers",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementRiceByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementRiceByAmount } = workerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectWorkers = (state: any) => state.workers.value;

export default workerSlice.reducer;
