import { createSlice } from "@reduxjs/toolkit";
import { loadData, uiActions } from "./ui-slice";

const initState = {
  time: 0
};

const timerSlice = createSlice({
  name: "timer",
  initialState: initState,
  reducers: {
    setTime(state, action){
      state.time = action.payload - 1;
    }
  },
});

const timerActions = timerSlice.actions;

// const setLaunchData = (loadFunc: Function, id?: string | number) => {
//   return async (dispatch: Function) => {
//     dispatch(loadData(loadFunc, id));
//   };
// };

const timerReducer = timerSlice.reducer;
export { timerReducer, timerActions};
