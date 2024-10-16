import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice.js';
import { waterTrackerReducer } from './waterTracker/slice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    waterTracker: waterTrackerReducer,
  },
});
