import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { roomApi } from 'api';
import { GetOneRoomType, GetRooms } from 'api/room';

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

export const getRoomsByLocationThunk = createAsyncThunk(
  'room/getRoomsByLocationThunk',
  async (option: GetRooms, { rejectWithValue }) => {
    try {
      const response = await roomApi.getRoomsByLocation(option)

      return response
    }
    catch (error: any) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }

  }
)

interface InitialState {
  currentRoom: any;
  rooms: any[]
}

const initState: InitialState = {
  currentRoom: {},
  rooms: [],
};

const roomSlice = createSlice({
  name: 'room',
  initialState: initState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getRoomsByLocationThunk.fulfilled, (state, action) => {
      state.rooms = (action.payload as any).content
    })
  },
});
const { actions, reducer: roomReducer } = roomSlice;

export const { } = actions;

export default roomReducer;

export const selectRoom = (state: RootState): InitialState =>
  state.room as InitialState;

export const rooms = (state: RootState): InitialState =>
  state.room as InitialState;
