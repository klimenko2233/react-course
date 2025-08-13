import type {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type UserSliceType = { users:IUser[] }
const initUserSliceState :UserSliceType = {users: []};

const loadUsers = createAsyncThunk("loadUsers", async (_,thunkAPI) => {
    try {
        const users = await getAll<IUser[]>('users');
        return thunkAPI.fulfillWithValue(users);
    }catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

export const userSlice = createSlice({
    name: "userStoreSlice",
    initialState: initUserSliceState,
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(loadUsers.fulfilled,(state, action:PayloadAction<IUser[]>)=>{
            state.users = action.payload;
        })
});

export const userActions = {...userSlice.actions,loadUsers};