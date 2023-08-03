import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

import { DEVICES } from 'utils';

export const initialDevice = createAsyncThunk(
  'app/initialDevice',
  async (body: DEVICES, { rejectWithValue }) => {
    try {
      return body;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

interface AppDeviceState {
  device: DEVICES;
  isFirstLoad: boolean;
}

const initialState: AppDeviceState = {
  device: DEVICES.DESKTOP,
  isFirstLoad: true,
};

const appDeviceSlice = createSlice({
  name: 'appDevice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(initialDevice.fulfilled, (state, { payload }) => {
      state.device = payload as DEVICES;
      state.isFirstLoad = false;
    });
  },
});

const { actions, reducer: appDeviceReducer } = appDeviceSlice;

export const {} = actions;

export default appDeviceReducer;

export const selectAppDevice = (state: RootState): AppDeviceState =>
  state.appDevice as AppDeviceState;
