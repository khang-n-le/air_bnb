import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  list: Array<any>;
  item: any;
  owner: any;
}

const initialState: IInitialState = {
  list: [],
  item: undefined,
  owner: undefined,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

const { actions, reducer: accountReducer } = accountSlice;

export const {} = actions;

export default accountReducer;
