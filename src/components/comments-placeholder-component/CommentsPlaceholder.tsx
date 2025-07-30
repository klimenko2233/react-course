import {useEffect, useState} from "react";
import type {ICommentPlaceholder} from "../../models/ICommentPlaceholder.ts";
import {CommentPlaceholderService} from "../../services/jsonplaceholder.api.service.ts";
import {CommentPlaceholder} from "../comment-placeholder-component/CommentPlaceholder.tsx";

export const CommentsPlaceholder = () => {
    const [comments, setComments] = useState<ICommentPlaceholder[]>([])
    useEffect(() => {
        CommentPlaceholderService.getAll().then((res:ICommentPlaceholder[])=> setComments(res))
    }, []);
    return (
        <div>
            {
                comments.map((comment:ICommentPlaceholder) => <CommentPlaceholder key={comment.id} comment={comment}/>)
            }
        </div>
    );
};