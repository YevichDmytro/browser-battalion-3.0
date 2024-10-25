export const selectMonthData = state =>
  state.waterTracker.waterTracker.monthData;

export const selectWaterIsLoading = state => state.waterTracker.loading;

export const selectWaterError = state => state.waterTracker.error;
