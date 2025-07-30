import type {ICommentDummy} from "../../models/ICommentDummy.ts";
import type {FC} from "react";

interface CommentDummyProps {
    comment: ICommentDummy
}

export const CommentDummy:FC<CommentDummyProps> = ({comment}) => {
    return (
        <div className="shadow p-5 mb-4 border border-gray-200 rounded-lg bg-white text-gray-800">
            <div className="mb-2 flex justify-between items-center">
                <h4 className="text-lg font-semibold text-blue-700">{comment.user.fullName}</h4>
                <span className="text-sm text-gray-500">@{comment.user.username}</span>
            </div>

            <p className="text-gray-700 mb-3">{comment.body}</p>

            <div className="text-sm text-gray-600 flex justify-between">
                <span><strong>Post ID:</strong> {comment.postId}</span>
                <span><strong>Likes:</strong> ❤️ {comment.likes}</span>
                <span><strong>Comment ID:</strong> {comment.id}</span>
            </div>
        </div>    );
};