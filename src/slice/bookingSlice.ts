import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookingApi } from "api/booking";
import { GetBookedRoom } from "api/common";
import { RootState } from "app/store";

export const getRoomsByUser = createAsyncThunk(
    'booking/getRoomsByUser',
    async (userId: GetBookedRoom, { rejectWithValue }) => {
        try {
            const response = await bookingApi.getRoomsByUser(userId)

            return response
        } catch (error: any) {
            if (!error.response) {
                throw error
            }

            return rejectWithValue(error.response.data)
        }
    }
)

interface InitialState {
    pastRooms: []
}

const initialState: InitialState = {
    pastRooms: []
}

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getRoomsByUser.fulfilled, (state, action) => {
            console.log(action)
            state.pastRooms = (action.payload as any).content
        })
        builder.addCase(getRoomsByUser.rejected, (state, action) => {
            console.log(action)
        })
    }
})

const { actions, reducer: bookingReducer } = bookingSlice;

export const { } = actions;

export default bookingReducer;

export const selectBookedRoom = (state: RootState): InitialState =>
    state.booking as InitialState;
