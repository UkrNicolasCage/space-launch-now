import { createSlice } from "@reduxjs/toolkit";
import { getLaunches } from "../lib/api";
import { CardLaunch } from "../lib/interfaces";

interface LaunchSliece {
  launches: CardLaunch[];
  lastIndex: number;
  isLoading: boolean;
}

const initState: LaunchSliece = {
  launches: [],
  lastIndex: 0,
  isLoading: false,
};

const launchSlice = createSlice({
  name: "launch",
  initialState: initState,
  reducers: {
    setLaunches(state, action) {
      for (const launch of action.payload) {
        state.launches.push(launch);
      }
    },
    toggleIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
    changeLastIndex(state, action) {
      state.lastIndex += action.payload;
    },
  },
});

const launchActions = launchSlice.actions;

const getLaunchesCardsData = (
  lastIndex: number = 0,
  numOfLaunches: number = 6
) => {
  return async (dispatch: Function) => {
    dispatch(launchActions.toggleIsLoading());
    dispatch(launchActions.changeLastIndex(lastIndex + numOfLaunches));
    const launches = await getLaunches(lastIndex, numOfLaunches);
    dispatch(launchActions.setLaunches(launches));
    dispatch(launchActions.toggleIsLoading());
  };
};

const launchReducer = launchSlice.reducer;
export { launchReducer, launchActions, getLaunchesCardsData };
