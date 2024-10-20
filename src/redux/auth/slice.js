import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout } from "./operations";

const authInitialState = {
  user: {
    name: null,
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
  name: "auth",
  initialState: authInitialState,
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
        state.error = false;
      })
      .addCase(register.rejected, (state) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = true;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.loading = false;
        state.error = false;
      })
      .addCase(login.rejected, (state) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = true;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          name: null,
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
      .addCase(logout.rejected, (state) => {
        state.user = {
          name: null,
          email: null,
          gender: null,
          waterRate: null,
          photo: null,
        };
        state.token = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = true;
      }),
});

export const authReducer = authSlice.reducer;
