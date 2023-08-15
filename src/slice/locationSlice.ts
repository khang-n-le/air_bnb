import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FindOneOptions, FindOptions } from 'api/common';
import { RootState } from 'app/store';

export const findAllLocation = createAsyncThunk(
  'area/findAllLocation',
  async (option: FindOneOptions, { rejectWithValue }) => {
    try {
      // const response = await locationApi.findAll(option);
      // return response;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

interface InitialState {
  list: Array<any>;
}

const initialState: InitialState = {
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

export const selectLocation = (state: RootState): InitialState =>
  state.location as InitialState;
