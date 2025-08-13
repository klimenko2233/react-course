import type {IPost} from "../../models/IPost.ts";
import {createSlice} from "@reduxjs/toolkit";

type PostSliceType = { posts:IPost[] }
const initPostSliceState :PostSliceType = {posts: []};
export const postSlice = createSlice({
    name: "postStoreSlice",
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: (builder) => builder
});