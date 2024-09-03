import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filters } from "../types/Filters";

const initialState: Filters = {
  name: '',
  username: '',
  phone: '',
  email: '',
}

const filterUsers = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<{key: keyof Filters; value: string}>) {
      state[action.payload.key] = action.payload.value;
    }
  }
})

export const { setQuery } = filterUsers.actions;
export default filterUsers.reducer;