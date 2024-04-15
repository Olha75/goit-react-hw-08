import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


// GET  /contacts    
// Get all user contacts

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



// POST    /contacts
// Create a new contact

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



// DELETE   /contacts/{contactID}
// Delete contact

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



//PATCH  /contacts/{contactID}
// Update an existing contact

export const updateContact = createAsyncThunk(
    'contacts/updateContact',
    async (updateData, thunkAPI) => {
      try {
        const response = await axios.patch(
          `/contacts/${updateData.id}`,
          updateData.values
        );
          return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
