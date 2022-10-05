import { createSlice } from "@reduxjs/toolkit";

const initState = {
  isLoading: false,
  
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initState,
  reducers: {
    setIsLoadingTrue(state) {
      state.isLoading = true;
    },
    setIsLoadingFalse(state) {
      state.isLoading = false;
    },
  },
});

const uiActions = uiSlice.actions;

const loadData = (loadFunc: Function, id?: string | number) => {
  return async (dispatch: Function) => {
    dispatch(uiActions.setIsLoadingTrue());
    await loadFunc();
    dispatch(uiActions.setIsLoadingFalse());
  };
};

const uiReducer = uiSlice.reducer;
export { uiReducer, uiActions, loadData };
