import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { roomApi } from 'api';
import { GetOneRoomType, GetRooms } from 'api/room';
import { FindOneOptions } from 'api/common';

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

export const getAllRoomsThunk = createAsyncThunk(
  'room/getAllRoomsThunk',
  async (option: any, { rejectWithValue }) => {
    try {
      const response = await roomApi.getAllRooms()

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
  rooms: any[];
  allRooms: any[];
}

const initState: InitialState = {
  currentRoom: {},
  rooms: [],
  allRooms: [],
};

const roomSlice = createSlice({
  name: 'room',
  initialState: initState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getRoomsByLocationThunk.fulfilled, (state, action) => {
      state.rooms = (action.payload as any).content
    })

    builder.addCase(getAllRoomsThunk.fulfilled, (state, action) => {
      state.allRooms = (action.payload as any).content
    })
  },
});
const { actions, reducer: roomReducer } = roomSlice;

export const { } = actions;

export default roomReducer;

export const selectRoom = (state: RootState): InitialState =>
  state.room as InitialState;

