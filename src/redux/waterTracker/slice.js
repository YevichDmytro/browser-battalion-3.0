import { createSlice } from '@reduxjs/toolkit';

import {
  addWaterItem,
  deleteWaterItem,
  getMonthWaterData,
  getTodayWaterData,
  updateWaterItem,
} from './operations';

const initialState = {
  formattedMonth: null,
  monthData: [],
  todayData: {},
  todayGoal: 0,
  error: null,
  loading: false,
  monthLoading: false,
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
      .addCase(deleteWaterItem.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteWaterItem.fulfilled, state => {
        state.loading = false;
        state.error = false;
      })
      .addCase(deleteWaterItem.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getTodayWaterData.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getTodayWaterData.fulfilled, (state, action) => {
        state.todayData = action.payload.records;
        state.todayGoal = action.payload.percentageOfGoal;
        state.loading = false;
        state.error = null;
      })
      .addCase(getTodayWaterData.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getMonthWaterData.pending, state => {
        state.monthLoading = true;
        state.error = false;
      })
      .addCase(getMonthWaterData.fulfilled, (state, action) => {
        state.formattedMonth = action.payload.date;
        state.monthData = action.payload.waterData;
        state.monthLoading = false;
        state.error = null;
      })
      .addCase(getMonthWaterData.rejected, state => {
        state.monthLoading = false;
        state.error = true;
      }),
});

export const waterTrackerReducer = waterSlice.reducer;
