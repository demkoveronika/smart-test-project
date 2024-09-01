import { combineSlices, configureStore } from "@reduxjs/toolkit";
import usersReducer from '../features/users'

const rootReducer = combineSlices({
  users: usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;