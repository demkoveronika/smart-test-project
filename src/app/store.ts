import { combineSlices, configureStore } from "@reduxjs/toolkit";

import usersReducer from '../features/users'
import filtersReducer from "../features/filters";

const rootReducer = combineSlices({
  users: usersReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;