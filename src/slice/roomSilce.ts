import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { roomApi } from 'api';
import { GetOneRoomType } from 'api/room';

export const getOneRoom = createAsyncThunk(
  'room/getOneRoom',
  async (option: GetOneRoomType, { rejectWithValue }) => {
    try {
      const response = await roomApi.getOne(option);

      return response;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

interface IInitState {
  currentRoom: any;
}

const initState: IInitState = {
  currentRoom: {},
};

const roomSlice = createSlice({
  name: 'room',
  initialState: initState,
  reducers: {},
  extraReducers: builder => {},
});
const { actions, reducer: roomReducer } = roomSlice;

export const {} = actions;

export default roomReducer;

export const selectRoom = (state: RootState): IInitState =>
  state.room as IInitState;
