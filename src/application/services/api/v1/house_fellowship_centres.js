import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "."

const entity = 'house_fellowship_centres'

const endpoints = {
  index: (page, per_page) => `/${entity}?page=${page}&per_page=${per_page}`,
  create: entity,
  show: (id) => `/${entity}/${id}`,
  update: (id) => `/${entity}/${id}`,
  destroy: (id) => `/${entity}/${id}`
}

const initialState  = {
  house_fellowship_centre: null,
  house_fellowship_centres: [],

  loading: false,
  error: null,

  createError: null,
  createLoading: false,

  showError: null,
  showLoading: false,

  updateError: null,
  updateLoading: false,

  destroyError: null,
  destroyLoading: false,
};

export const index = createAsyncThunk(
  `${entity}/index`,
  async (data, thunkAPI) => {
    try {
      const response = await api.get(endpoints.index(data.page, data.per_page));

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

      if (response.status == 201) {
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

export const update = createAsyncThunk(
  `${entity}/update`,
  async (data, thunkAPI) => {
    try {
      const response = await api.put(endpoints.update(data.id), data);

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

export const destroy = createAsyncThunk(
  `${entity}/destroy`,
  async (id, thunkAPI) => {
    try {
      const response = await api.delete(endpoints.destroy(id));

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

export default createSlice({
  name: entity,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(index.pending, (state) => {
      state.loading = true;
      state.house_fellowship_centres = [];
    })

    builder.addCase(index.fulfilled, (state, action) => {
      state.loading = false;
      state.house_fellowship_centres = action.payload.data;
      state.error = null;
    })

    builder.addCase(index.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    })

    builder.addCase(create.pending, (state) => {
      state.createLoading = true;
    })

    builder.addCase(create.fulfilled, (state, action) => {
      state.createLoading = false;
      state.house_fellowship_centres.push(action.payload.data);
      state.createError = null;
    })

    builder.addCase(create.rejected, (state, action) => {
      state.createLoading = false;
      state.createError = action.payload.message;
    })

    builder.addCase(show.pending, (state) => {
      state.showLoading = true;
    })

    builder.addCase(show.fulfilled, (state, action) => {
      state.showLoading = false;
      state.house_fellowship_centre = action.payload.data;
      state.showError = null;
    })

    builder.addCase(show.rejected, (state, action) => {
      state.showLoading = false;
      state.showError = action.payload.message;
    })

    builder.addCase(update.pending, (state) => {
      state.updateLoading = true;
    })

    builder.addCase(update.fulfilled, (state, action) => {
      state.updateLoading = false;
      state.house_fellowship_centre = action.payload.data;
      const house_fellowship_centreIndex = state.house_fellowship_centres.findIndex((p) => p.id === action.payload.data.id)
      state.house_fellowship_centres = state.house_fellowship_centres.filter((p) => p.id !== action.payload.data.id)
      state.house_fellowship_centres.splice(house_fellowship_centreIndex, 0, action.payload.data)
      state.updateError = null;
    })

    builder.addCase(update.rejected, (state, action) => {
      state.updateLoading = false;
      state.updateError = action.payload.message;
    })

    builder.addCase(destroy.pending, (state) => {
      state.destroyLoading = true;
    })

    builder.addCase(destroy.fulfilled, (state, action) => {
      state.destroyLoading = false;
      state.house_fellowship_centres = state.house_fellowship_centres.filter((p) => p.id !== action.payload.data.id)
      state.destroyError = null;
    })

    builder.addCase(destroy.rejected, (state, action) => {
      state.destroyLoading = false;
      state.destroyError = action.payload.message;
    })
  }
})
