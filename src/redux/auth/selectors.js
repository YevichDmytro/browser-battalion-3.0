export const selectIsAuthenticated = state => state.auth.isAuthenticated;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectUser = state => state.auth.user;

export const selectLoading = state => state.auth.loading;

export const selectUserLoading = state => state.auth.userLoading;

export const selectPhotoLoading = state => state.auth.photoLoading;

export const selectError = state => state.auth.error;
