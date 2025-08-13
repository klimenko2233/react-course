import type {IComment} from "../../models/IComment.ts";
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type CommentSliceType = { comments:IComment[] }
const initCommentSliceState :CommentSliceType = {comments: []};

const loadComments = createAsyncThunk("loadComments", async (_,thunkAPI) =>{
    try{
        const comments = await getAll<IComment[]>('comments');
        return thunkAPI.fulfillWithValue(comments)
    }catch (error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const commentSlice = createSlice({
    name: "commentStoreSlice",
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(loadComments.fulfilled,(state, action:PayloadAction<IComment[]>)=>{
            state.comments = action.payload;
        })
});

export const commentActions = {...commentSlice.actions,loadComments};