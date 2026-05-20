import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from ".."

const entity = 'auth/google'

const endpoints = {
  create: (return_to_on_success, return_to_on_failure) =>
    `${api.getUri()}/${entity}_oauth2?return_to_on_success=${encodeURIComponent(return_to_on_success)}&return_to_on_failure=${encodeURIComponent(return_to_on_failure)}`,
}

const initialState  = {
  loading: false,
  error: null,
};

export const create = createAsyncThunk(
  `${entity}/create`,
  async (data, thunkAPI) => {
    try {
      window.location.href = endpoints.create(
        data?.return_to_on_success || 'profile',
        data?.return_to_on_failure || 'login'
      )
      return thunkAPI.fulfillWithValue({ success: true, message: 'Redirecting to Google OAuth2' })
    } catch (error) {
      return thunkAPI.rejectWithValue({ success: false, message: error.response?.data?.message || error.message })
    }
  }
)

export default createSlice({
  name: entity,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(create.pending, (state) => {
      state.loading = true;
    })

    builder.addCase(create.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    })

    builder.addCase(create.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    })
  }
})
