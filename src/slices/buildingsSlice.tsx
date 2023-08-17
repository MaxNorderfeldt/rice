import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  granaries: 0,
  farms: 0,
};

export const buildingsSlice = createSlice({
  name: "buildings",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
  },
});

export const {} = buildingsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectFarms = (state: any) => state.buildings.farms;

export default buildingsSlice.reducer;
