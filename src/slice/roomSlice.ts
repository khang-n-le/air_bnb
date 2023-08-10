import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FindOptions, } from "api/common";
import { GetRooms, roomApi } from "api/room";
import { RootState } from "app/store";

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
    rooms: any[]
}

const initialState: InitialState = {
    rooms: [],
}

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getRoomsByLocationThunk.fulfilled, (state, action) => {
            state.rooms = (action.payload as any).content
        })
    }
})

const { actions, reducer: roomReducer } = roomSlice;

export const { } = actions

export default roomReducer;

export const rooms = (state: RootState): InitialState =>
    state.room as InitialState;