import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  currentRequest,
  loginRequest,
  logoutRequest,
  singupRequest,
} from './auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (user, { rejectWithValue }) => {
    try {
      const data = await singupRequest(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const data = await loginRequest(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logoutRequest();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await currentRequest(auth.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
