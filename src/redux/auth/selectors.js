export const selectІsAuthenticated = (state) => state.auth.isAuthenticated;

export const selectUser = (state) => state.auth.user;

export const selectLoading = (state) => state.auth.loading;

export const selectError = (state) => state.auth.error;
