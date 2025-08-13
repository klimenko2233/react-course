import type {IComment} from "../../../models/IComment.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type CommentSliceType = { comments: IComment[] };
const initialStateComments:CommentSliceType = { comments: [] };
export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initialStateComments,
    reducers: {
        loadComments: (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload;
        }
    }
});
export const commentSliceActions = { ...commentSlice.actions };