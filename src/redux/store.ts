import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/user-slice/userSlice.ts";
import {postSlice} from "./slices/post-slice/postSlice.ts";
import {commentSlice} from "./slices/comment-slice/commentSlice.ts";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer,
        commentSlice: commentSlice.reducer,
    }
})