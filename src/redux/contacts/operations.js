import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from './contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await api.reqGetContacts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await api.reqAddContacts(contact);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await api.reqRemoveContacts(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
