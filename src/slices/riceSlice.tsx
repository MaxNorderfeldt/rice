import { createSlice } from "@reduxjs/toolkit";

function loadRice() {
  console.log(window.localStorage.getItem("rice"));
  const rice = window.localStorage.getItem("rice");
  if (rice) {
    return parseInt(rice);
  }
  return 0;
}

const initialState = {
  value: loadRice(),
};

export const riceSlice = createSlice({
  name: "rice",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setRice: (state, action) => {
      state.value = action.payload;
    },
    incrementRice: (state, action) => {
      state.value += action.payload;
    },
    decrementRice: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { setRice, incrementRice, decrementRice } = riceSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectRice = (state: any) => state.rice.value;

export default riceSlice.reducer;
