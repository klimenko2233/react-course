import type {IUser} from "../../../models/IUser.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";

export const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
            return thunkAPI.fulfillWithValue(users);
        }catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
)

export const loadUser = createAsyncThunk(
    'userSlice/loadUser',
    async (id:string, thunkAPI) => {
        try {
            const user = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
                .then(response => response.json())
            return thunkAPI.fulfillWithValue(user);
        }catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
)

type UserSliceType = { users: IUser[],user: IUser| null };
const initialState: UserSliceType = { users: [], user: null };
export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        })
            .addCase(loadUsers.rejected, (state, action) => {
            console.log(state);
            console.log(action)
            })
            .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
            })
});
export const userSliceActions = { ...userSlice.actions,loadUsers, loadUser };