import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

// Defines the type for the dispatch function, used by useDispatch hook
export type AppDispatch = typeof store.dispatch;
// Defines the type for the entire global state object, used by useSelector hook
export type RootState = ReturnType<typeof store.getState>;
// Defines the generic type for asynchronous actions (Thunks)
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType, // The return type of the thunk function
  RootState, // The global state type
  unknown, // The type of extra arguments passed to the Thunk
  Action<string> // The type of actions that can be dispatched
>;
// Malumotlar bunkeri
