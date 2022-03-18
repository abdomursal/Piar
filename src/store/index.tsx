import { configureStore } from "@reduxjs/toolkit";
import currentUserSlice  from "./currentUserReducer";
import modalSlice  from "./modalReducer";
import userSlice from "./userReducer";
import stationSlice from "./stationReducer";
import  authSlice  from "./authReducer";


//MIDDLEWARE
const localStorageMiddleware = ({ getState }:any) => {
  return (next:any) => (action:any) => {
    const result = next(action);
    localStorage.setItem('state', JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem('state') !== null) {
    const getItem = localStorage.getItem('state')
    return JSON.parse(getItem as any); // re-hydrate the store
  }
};

export const store = configureStore({
  reducer: {
    currentUser: currentUserSlice,
    users: userSlice,
    stations:stationSlice,
    modal:modalSlice,
    token:authSlice
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState: reHydrateStore(),
});



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
