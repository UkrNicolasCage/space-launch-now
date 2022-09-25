import { createSlice } from "@reduxjs/toolkit";
import { getRecentEvents } from "../lib/api";
import { CardEvent } from "../lib/interfaces";

interface EventSliece {
  events: CardEvent[];
  lastIndex: number;
  isLoading: boolean;
}
interface EventAction {
  type: string;
  payload: {
    task: "next" | "back";
    events: CardEvent[];
  };
}

const initState: EventSliece = { events: [], lastIndex: 0, isLoading: false };

const eventSlice = createSlice({
  name: "event",
  initialState: initState,
  reducers: {
    setEvents(state, action: EventAction) {
      if (action.payload.task === "next") {
        state.events = action.payload.events;
      } else if (action.payload.task === "back") {
        state.events = action.payload.events;
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

const eventActions = eventSlice.actions;

const getEventCardsData = (lastIndex: number, task: "back" | "next", move = 0) => {
  return async (dispatch: Function) => {
    dispatch(eventActions.toggleIsLoading())
    
    dispatch(eventActions.changeLastIndex(move));
    const events = await getRecentEvents(lastIndex + move);
    dispatch(eventActions.setEvents({ task: task, events }));

    dispatch(eventActions.toggleIsLoading());
  };
};

const eventReducer = eventSlice.reducer;
export { eventActions, eventReducer, getEventCardsData };
