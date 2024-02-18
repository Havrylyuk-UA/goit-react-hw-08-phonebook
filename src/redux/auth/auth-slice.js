import { createSlice } from '@reduxjs/toolkit';

import { signup, login, logout, current } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

export const handleClearError = state => {
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, handlePending)
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signup.rejected, handleRejected)
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, handleRejected)
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLogin = false;
        state.user = {};
        state.token = '';
      })
      .addCase(logout.rejected, handleRejected)
      .addCase(current.pending, handlePending)
      .addCase(current.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogin = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(current.rejected, state => {
        state.isLoading = false;
        state.token = '';
      });
  },
});

export default authSlice.reducer;
