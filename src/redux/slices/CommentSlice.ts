import type {IComment} from "../../models/IComment.ts";
import {createSlice} from "@reduxjs/toolkit";

type CommentSliceType = { comments:IComment[] }
const initCommentSliceState :CommentSliceType = {comments: []};
export const commentSlice = createSlice({
    name: "commentStoreSlice",
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: (builder) => builder
});