import { createSlice } from "@reduxjs/toolkit";

import { register } from "./operations";

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
        // state.token = action.payload.token;
        state.isAuthenticated = true;
        state.loading = false;
        state.error = false;
      })
      .addCase(register.rejected, (state) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = true;
      }),
});

export const authReducer = authSlice.reducer;
