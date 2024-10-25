import { createSlice } from '@reduxjs/toolkit';

import {
  addWaterItem,
  getMonthWaterData,
  getTodayWaterData,
  updateWaterItem,
} from './operations';

const initialState = {
  formattedMonth: null,
  monthData: [],
  todayData: {},
  error: null,
  loading: false,
};

const waterSlice = createSlice({
  name: 'water',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(addWaterItem.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addWaterItem.fulfilled, state => {
        state.loading = false;
        state.error = false;
      })
      .addCase(addWaterItem.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(updateWaterItem.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateWaterItem.fulfilled, state => {
        state.loading = false;
        state.error = false;
      })
      .addCase(updateWaterItem.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getTodayWaterData.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getTodayWaterData.fulfilled, (state, action) => {
        state.todayData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getTodayWaterData.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getMonthWaterData.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getMonthWaterData.fulfilled, (state, action) => {
        state.formattedMonth = action.payload.date;
        state.monthData = action.payload.waterData;
        state.loading = false;
        state.error = null;
      })
      .addCase(getMonthWaterData.rejected, state => {
        state.loading = false;
        state.error = true;
      }),
});

export const waterTrackerReducer = waterSlice.reducer;
