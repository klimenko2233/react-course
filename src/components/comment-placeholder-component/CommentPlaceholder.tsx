import type {ICommentPlaceholder} from "../../models/ICommentPlaceholder.ts";
import type {FC} from "react";

interface CommentPlaceholderProps {
    comment: ICommentPlaceholder
}

export const CommentPlaceholder:FC<CommentPlaceholderProps> = ({comment}) => {
    return (
        <div className="shadow p-5 mb-4 border border-gray-200 rounded-lg bg-white text-gray-800">
            <h4 className="text-lg font-semibold text-blue-700 mb-1">{comment.name}</h4>
            <p className="text-sm text-gray-500 mb-3">{comment.email}</p>
            <p className="text-gray-700 mb-3">{comment.body}</p>

            <div className="text-sm text-gray-600">
                <strong>Post ID:</strong> {comment.postId} | <strong>Comment ID:</strong> {comment.id}
            </div>
        </div>
    );
};