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
  maxWidth: string;
  paddingLeft: string;
  paddingRight: string;
}

const initialState: AppDeviceState = {
  device: DEVICES.DESKTOP,
  isFirstLoad: true,
  maxWidth: '1120px',
  paddingLeft: '80px',
  paddingRight: '80px',
};

const appDeviceSlice = createSlice({
  name: 'appDevice',
  initialState,
  reducers: {
    handleChangeWidth: (state, action) => {
      state.maxWidth = action.payload.maxWidth;
      state.paddingLeft = action.payload.paddingLeft;
      state.paddingRight = action.payload.paddingRight;
    },
  },
  extraReducers: builder => {
    builder.addCase(initialDevice.fulfilled, (state, { payload }) => {
      state.device = payload as DEVICES;
      state.isFirstLoad = false;
    });
  },
});

const { actions, reducer: appDeviceReducer } = appDeviceSlice;

export const { handleChangeWidth } = actions;

export default appDeviceReducer;

export const selectAppDevice = (state: RootState): AppDeviceState =>
  state.appDevice as AppDeviceState;
