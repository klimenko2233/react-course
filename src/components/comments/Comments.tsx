import {useEffect, useState} from "react";
import type {IComment} from "../../models/IComment.ts";
import {getComments} from "../../services/api.service.ts";
import {Comment} from "../comment/Comment.tsx";

export const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        getComments().then(value => setComments(value));
    }, []);
    return (
        <div className="max-w-4xl mx-auto py-10 px-4 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">Комментарии</h1>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
};
