import type {IPost} from "../../../models/IPost.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type PostSliceType = { posts: IPost[] };
const initialStatePosts:PostSliceType= {posts: []};
export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialStatePosts,
    reducers: {
        loadPosts: (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        }
    }});
export const postSliceActions = { ...postSlice.actions};