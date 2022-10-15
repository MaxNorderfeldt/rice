import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const riceSlice = createSlice({
  name: "rice",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementRiceByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementRiceByAmount } = riceSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectRice = (state: any) => state.rice.value;

export default riceSlice.reducer;
