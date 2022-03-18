import { createSlice } from "@reduxjs/toolkit";


export type stationEntitesProps={
    id?: number,
    name: string,
    comment: string,
    created_at: string,
    updated_at: string,
    api_key: string

}
export type stationsProps={
    stations:Array<stationEntitesProps>
}

export const initialState: stationsProps = {
   stations:[]

}

export const stationSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    getStations: (state , action) => {
      return { ...state, stations:action.payload};
    },
  },
});

export const { getStations } = stationSlice.actions;

export default stationSlice.reducer;
