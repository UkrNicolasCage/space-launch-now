import { createSlice } from "@reduxjs/toolkit";

const initState = {
}

const uiSlice = createSlice({
  name: "ui",
  initialState: initState,
  reducers: {
  },
});

const uiActions = uiSlice.actions;


const uiReducer = uiSlice.reducer;
export { uiReducer, uiActions };
