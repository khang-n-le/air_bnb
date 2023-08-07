import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface InitialState {
    list: Array<any>;
    item: any;
    owner: any;
}

const initialState: InitialState = {
    list: [],
    item: undefined,
    owner: undefined,
};

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {},
    extraReducers: builder => { },
});

const { actions, reducer: locationReducer } = locationSlice;

export const { } = actions;

export default locationReducer;
