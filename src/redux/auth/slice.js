import { createSlice } from "@reduxjs/toolkit";

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
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder =>
    builder.addCase()
});

export const authReducer = authSlice.reducer;
