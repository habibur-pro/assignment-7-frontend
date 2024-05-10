import { createSlice } from "@reduxjs/toolkit";
type TCounterState = { count: number };
const initialState: TCounterState = {
  count: 0,
};
// PayloadAction<number>   use for define payload types
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.count = state.count + 1;
    },
  },
});
export const { increase } = counterSlice.actions;
export default counterSlice.reducer;
