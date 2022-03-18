import { createSlice } from "@reduxjs/toolkit";


export type userEntitesProps={
    id?: number,
    name: string,
    comment: string,
    created_at: string,
    updated_at: string,
    login: string
}

export type usersProps={
    users:Array<userEntitesProps>
}

export const initialState: usersProps = {
   users:[]
}

export const userSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    getUsers: (state , action) => {
      return { ...state, users:action.payload};
    },
  },
});

export const { getUsers } = userSlice.actions;

export default userSlice.reducer;

