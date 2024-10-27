import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

import getCurrentMonth from '../../utils/getCurrentMonth';
import { getMonthWaterData } from '../waterTracker/operations';

axios.defaults.baseURL =
  'https://browser-battalion-3-0-backend-kyxl.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

let hasShownToast = false;

export const setupAxiosInterceptors = dispatch => {
  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        if (!hasShownToast) {
          toast.error('Session has expired! Please log in again.');
          hasShownToast = true;
        }
        dispatch(logout());
        setAuthHeader('');
      } else {
        hasShownToast = false;
      }
      return Promise.reject(error);
    }
  );
};

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('/auth/register', newUser);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/auth/login', userData);
      setAuthHeader(response.data.data.accessToken);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    setAuthHeader('');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    setAuthHeader(state.auth.token);

    try {
      const response = await axios.get('/user/userById');
      return response.data.data;
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);

export const updateUserData = createAsyncThunk(
  'users/updateUserData',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.patch('/user/update', userData, {});
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWaterRate = createAsyncThunk(
  'users/updateWaterRate',
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch('/user/waterRate', data, {});
      thunkAPI.dispatch(getMonthWaterData(getCurrentMonth()));
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePhoto = createAsyncThunk(
  'users/updatePhoto',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.patch('/user/avatar', userData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
