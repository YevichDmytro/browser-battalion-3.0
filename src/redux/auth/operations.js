import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://browser-battalion-3-0-backend-kyxl.onrender.com/user";

export const register = createAsyncThunk(
  "auth/register",
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post("/register", newUser);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const login = createAsyncThunk("auth/login", async () => {
//   try {
//   } catch (error) {}
// });

// export const logout = createAsyncThunk("auth/logout", async () => {
//   try {
//   } catch (error) {}
// });

// export const refresh = createAsyncThunk("auth/refresh", async () => {
//   try {
//   } catch (error) {}
// });
