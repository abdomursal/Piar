import { createSlice } from "@reduxjs/toolkit";


type CurrentUserProps={
  name:string;
  email:string;
  password:string;
}

export const initialState: CurrentUserProps = {
  name:'',
  email:'',
  password: '',
};

export const currentUserSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    getCurrentUser: (state , action) => {
      return { ...state, ...action.payload};
    },
  },
});

export const { getCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
