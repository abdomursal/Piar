import { createSlice } from "@reduxjs/toolkit";

export type AuthProps = {
  token?: string;
};

export const initialState: AuthProps = {
  token: undefined,
};

export const authSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setToken: (state, action) => {
      return { ...state, token: action.payload };
    },
    dropToken: (state) => {
      return { ...state, token: undefined };
    },
  },
});

export const { setToken, dropToken } = authSlice.actions;

export default authSlice.reducer;
