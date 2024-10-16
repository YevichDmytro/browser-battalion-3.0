import { createSlice } from "@reduxjs/toolkit";

const waterTrackerInitialState = {
  waterTracker: {
    data: [],
    error: null,
    loading: false,
  },
};

const waterTrackerSlice = createSlice({
  name: 'auth',
  initialState: waterTrackerInitialState,
  extraReducers: builder => builder.addCase(),
});

export const waterTrackerReducer = waterTrackerSlice.reducer;