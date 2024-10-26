import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://browser-battalion-3-0-backend-kyxl.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('/auth/register', newUser);

      const loginResponse = await axios.post('/auth/login', {
        email: newUser.email,
        password: newUser.password,
      });

      setAuthHeader(loginResponse.data.data.accessToken);

      return loginResponse.data.data;
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
