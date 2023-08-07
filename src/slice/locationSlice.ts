import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FindOptions } from 'api/common';
import { locationApi } from 'api/location';
import { RootState } from 'app/store';

export const findAllLocation = createAsyncThunk(
  'area/findAllLocation',
  async (option: FindOptions, { rejectWithValue }) => {
    try {
      const response = await locationApi.findAll(option);

      return response;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

interface IInitialState {
  list: Array<any>;
}

const initialState: IInitialState = {
  list: [],
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(findAllLocation.fulfilled, (state, action) => {
      state.list = (action.payload as any)?.content;
    });
  },
});

const { actions, reducer: locationReducer } = locationSlice;

export const {} = actions;

export default locationReducer;

export const selectLocation = (state: RootState): IInitialState =>
  state.location as IInitialState;
