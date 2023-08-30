import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

import { commentApi, CommentType } from 'api/comment';

export const findCommentByRoomId = createAsyncThunk(
  'comment/findCommentByRoomId',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await commentApi.findByRoomID(id);

      return response;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

export const uploadCommentByRoomId = createAsyncThunk(
  'comment/uploadCommentByRoomId',
  async (data: CommentType, { rejectWithValue }) => {
    try {
      const response = await commentApi.uploadCommentByRoomId(data);

      return response;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

interface InitialState {
  currentRoom: any;
}

const initState: InitialState = {
  currentRoom: {},
};

const commentSlice = createSlice({
  name: 'comment',
  initialState: initState,
  reducers: {},
});

const { actions, reducer: commentReducer } = commentSlice;

export default commentReducer;

export const {} = actions;

export const selectComment = (state: RootState): InitialState =>
  state.comment as InitialState;
