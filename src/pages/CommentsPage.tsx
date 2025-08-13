import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {commentActions} from "../redux/slices/CommentSlice.ts";
import type {IComment} from "../models/IComment.ts";

export const CommentsPage = () => {
    const dispatch = useAppDispatch();
    const comments:IComment[] = useAppSelector(state => state.commentStoreSlice.comments);
    useEffect(() => {
        dispatch(commentActions.loadComments())
    }, []);
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
            {comments.map(comment => (
                <div
                    key={comment.id}
                    className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
                >
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">{comment.name}</h2>
                    <p className="text-sm text-gray-500 mb-3">{comment.email}</p>
                    <p className="text-gray-600 leading-relaxed">{comment.body}</p>
                </div>
            ))}
        </div>

    );
};