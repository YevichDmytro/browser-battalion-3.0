export const selectMonthData = state => state.waterTracker.monthData;

export const selectTodayData = state => state.waterTracker.todayData;

export const selectPercentageOfGoal = state => state.waterTracker.todayGoal;

export const selectFormattedMonth = state => state.waterTracker.formattedMonth;

export const selectWaterIsLoading = state => state.waterTracker.loading;

export const selectWaterIsMonthLoading = state =>
  state.waterTracker.monthLoading;

export const selectWaterError = state => state.waterTracker.error;
