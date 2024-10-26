import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://browser-battalion-3-0-backend-kyxl.onrender.com';

export const addWaterItem = createAsyncThunk(
  'water/addItem',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/water', data);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWaterItem = createAsyncThunk(
  'water/updateItem',
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await axios.patch(`/water/${id}`, data);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWaterItem = createAsyncThunk(
  'water/deleteItem',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/water/${id}`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTodayWaterData = createAsyncThunk(
  'water/todayWaterData',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/water/today');
      return response.data.data.records;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMonthWaterData = createAsyncThunk(
  'water/monthWaterData',
  async (date, thunkAPI) => {
    try {
      const response = await axios.get(`/water/month/${date}`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
