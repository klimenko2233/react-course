import type {IUser} from "../../models/IUser.ts";
import {createSlice} from "@reduxjs/toolkit";

type UserSliceType = { users:IUser[] }
const initUserSliceState :UserSliceType = {users: []};
export const userSlice = createSlice({
    name: "userStoreSlice",
    initialState: initUserSliceState,
    reducers: {},
    extraReducers: (builder) => builder
});