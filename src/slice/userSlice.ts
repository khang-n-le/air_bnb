import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetUser } from "api/common";
import { userApi } from "api/user";
import { RootState } from "app/store";

export const getUserById = createAsyncThunk(
    'user/getUserById',
    async (option: GetUser, { rejectWithValue }) => {
        try {
            const response = userApi.getUserById(option);

            return response
        } catch (error: any) {
            if (!error.response) {
                throw error
            }

            return rejectWithValue(error.response.data)
        }
    }
)

interface User {
    id: string,
    name: string,
    email: string,
    password: string,
    phone: string,
    birthday: string,
    avatar: string,
    gender: boolean,
    role: string,
}

interface InitialState {
    user: User | null
}

const initialState: InitialState = {
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.user = (action.payload as any).content
        })

        builder.addCase(getUserById.rejected, (state, action) => {
            console.log(action)
        })
    }
})

const { actions, reducer: userReducer } = userSlice;

export const { } = actions;

export default userReducer;

export const selectUser = (state: RootState): InitialState => state.user as InitialState