import { createSlice } from '@reduxjs/toolkit';

import {
  login,
  logout,
  refreshUser,
  register,
  updateUserData,
} from './operations';

const authInitialState = {
  user: {
    userName: null,
    email: null,
    gender: null,
    waterRate: null,
    photo: null,
  },
  token: null,
  isAuthenticated: false,
  isRefreshing: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.user };
        state.token = action.payload.accessToken;
        state.isAuthenticated = true;
        state.loading = false;
        state.error = false;
      })
      .addCase(register.rejected, state => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = true;
      })
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.user };
        state.token = action.payload.accessToken;
        state.isAuthenticated = true;
        state.loading = false;
        state.error = false;
      })
      .addCase(login.rejected, state => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = true;
      })
      .addCase(logout.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user = {
          userName: null,
          email: null,
          gender: null,
          waterRate: null,
          photo: null,
        };
        state.token = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = false;
      })
      .addCase(logout.rejected, state => {
        state.user = {
          userName: null,
          email: null,
          gender: null,
          waterRate: null,
          photo: null,
        };
        state.token = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = true;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.isAuthenticated = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(updateUserData.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.isAuthenticated = true;
        state.loading = false;
        state.error = false;
      })
      .addCase(updateUserData.rejected, state => {
        state.loading = false;
        state.error = true;
      }),
});

export const authReducer = authSlice.reducer;
