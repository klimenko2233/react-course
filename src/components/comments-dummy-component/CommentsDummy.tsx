import {useEffect, useState} from "react";
import type {ICommentDummy, ICommentDummyResponse} from "../../models/ICommentDummy.ts";
import {CommentDummyService} from "../../services/dummyjson.api.service.ts";
import {CommentDummy} from "../comment-dummy-component/CommentDummy.tsx";

export const CommentsDummy = () => {
    const [comments, setComments] = useState<ICommentDummy[]>([])
    useEffect(() => {
        CommentDummyService.getAll().then((data:ICommentDummyResponse)=>setComments(data.comments))
    }, []);
    return (
        <div>
            {comments.map((comment: ICommentDummy) => <CommentDummy key={comment.id} comment={comment}/>)}
        </div>
    );
};