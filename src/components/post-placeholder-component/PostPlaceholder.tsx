import type {IPost} from "../../models/IPostPlaceholder.ts";
import type {FC} from "react";

interface PostPlaceholderProps {
    post: IPost
}

export const PostPlaceholder: FC<PostPlaceholderProps> = ({ post }) => {
    return (
        <div className="shadow p-6 mb-4 border border-gray-200 rounded-lg bg-white text-gray-800">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{post.title}</h3>
            <p className="mb-3 text-gray-700">{post.body}</p>
            <div className="text-sm text-gray-600">
                <p><span className="font-medium">User ID:</span> {post.userId}</p>
                <p><span className="font-medium">Post ID:</span> {post.id}</p>
            </div>
        </div>
    );
};
