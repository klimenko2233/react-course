import {useEffect} from "react";
import type {IComment} from "../models/IComment.ts";
import {commentSliceActions} from "../redux/slices/comment-slice/commentSlice.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";

export const CommentsPage = () => {
    const {comments} = useAppSelector(({commentSlice}) => commentSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then((data:IComment[]) => dispatch(commentSliceActions.loadComments(data)))
    }, []);
    return (
        <div>
            {
                comments.map(comment => (
                    <div key={comment.id}>
                        <h3>{comment.name}</h3>
                        <p>{comment.body}</p>
                        <small>By: {comment.email}</small>
                    </div>
                ))
            }
        </div>
    );
};