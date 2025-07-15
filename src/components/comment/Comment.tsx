import type {IComment} from "../../models/IComment.ts";
import type {FC} from "react";

interface CommentProps {
    comment: IComment
}

export const Comment: FC<CommentProps> = ({comment: { postId, id, name, email, body }}) => {
    return (
        <div className="bg-white shadow-md rounded p-5 mb-6">
            <h3 className="text-lg font-semibold text-blue-700 mb-1">{name}</h3>
            <p className="text-sm text-gray-600 mb-1"><strong>Email:</strong> {email}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Post ID:</strong> {postId}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Comment ID:</strong> {id}</p>
            <p className="text-gray-800 mt-2">{body}</p>
        </div>
    );
};
