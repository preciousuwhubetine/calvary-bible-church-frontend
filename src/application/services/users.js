import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "."

const entity = 'users'

const endpoints = {
  index: entity,
  create: entity,
  show: (id) => `/${entity}/${id}`,
}

const initialState  = {
  user: null,
  users: [],

  indexSuccessMessage: null,
  indexError: null,
  indexLoading: false,

  createSuccessMessage: null,
  createError: null,
  createLoading: false,

  showSuccessMessage: null,
  showError: null,
  showLoading: false,
};

export const index = createAsyncThunk(
  `${entity}/index`,
  async (_, thunkAPI) => {
    try {
      const response = await api.get(endpoints.index);

      if (response.status == 200) {
        return { success: true, data: response.data }
      } else {
        return thunkAPI.rejectWithValue({ success: false, message: "An unknown error occured"})
      }
    } catch(error) {
      return thunkAPI.rejectWithValue({ success: false, message: error.response?.data?.message || error.message })
    }
  }
)

export const create = createAsyncThunk(
  `${entity}/create`,
  async (data, thunkAPI) => {
    try {
      const response = await api.post(endpoints.create, data);

      if (response.status == 200) {
        return { success: true, data: response.data }
      } else {
        return thunkAPI.rejectWithValue({ success: false, message: "An unknown error occured"})
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ success: false, message: error.response?.data?.message || error.message })
    }
  }
)

export const show = createAsyncThunk(
  `${entity}/show`,
  async (id, thunkAPI) => {
    try {
      const response = await api.get(endpoints.show(id));

      if (response.status == 200) {
        return { success: true, data: response.data }
      } else {
        return thunkAPI.rejectWithValue({ success: false, message: "An unknown error occured"})
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ success: false, message: error.response?.data?.message || error.message })
    }
  }
)

const usersSlice = createSlice({
  name: entity,
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.users = [];

      state.indexSuccessMessage = null;
      state.indexError = null;
      state.indexLoading = false;

      state.createSuccessMessage = null;
      state.createError = null;
      state.createLoading = false;

      state.showSuccessMessage = null;
      state.showError = null;
      state.showLoading = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(index.pending, (state) => {
      state.indexSuccessMessage = null;
      state.indexError = null;
      state.indexLoading = true;
    })

    builder.addCase(index.fulfilled, (state, action) => {
      state.users = action.payload.data;

      state.indexSuccessMessage = null;
      state.indexLoading = false;
      state.indexError = null;
    })

    builder.addCase(index.rejected, (state, action) => {
      state.indexSuccessMessage = null;
      state.indexLoading = false;
      state.indexError = action.payload.message;
    })

    builder.addCase(create.pending, (state) => {
      state.createSuccessMessage = null;
      state.createError = null;
      state.createLoading = true;
    })

    builder.addCase(create.fulfilled, (state, action) => {
      state.createSuccessMessage = action.payload.data.message;
      state.createError = null;
      state.createLoading = false;
    })

    builder.addCase(create.rejected, (state, action) => {
      state.createSuccessMessage = null;
      state.createLoading = false;
      state.createError = action.payload.message;
    })

    builder.addCase(show.pending, (state) => {
      state.showSuccessMessage = null;
      state.showError = null;
      state.showLoading = true;
    })

    builder.addCase(show.fulfilled, (state, action) => {
      state.user = action.payload.data;

      state.showSuccessMessage = null;
      state.showLoading = false;
      state.showError = null;
    })

    builder.addCase(show.rejected, (state, action) => {
      show.showSuccessMessage = null;
      state.showError = action.payload.message;
      state.showLoading = false;
    })
  }
})

export const { reset } = usersSlice.actions;
export default usersSlice;
