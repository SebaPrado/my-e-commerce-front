import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    authUser(state, action) {
      return (state = action.payload);
    },
    logout(state, action) {
      return {};
    },
  },
});

const { reducer, actions } = userSlice;

export const { authUser, logout } = actions;

export default reducer;
