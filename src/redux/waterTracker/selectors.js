export const selectMonthData = state =>
  state.waterTracker.waterTracker.monthData;

export const selectTodayData = state =>
  state.waterTracker.waterTracker.todayData;

export const selectWaterIsLoading = state => state.waterTracker.loading;

export const selectWaterError = state => state.waterTracker.error;
