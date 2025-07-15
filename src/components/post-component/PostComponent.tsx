import type {IPost} from "../../models/IPost.ts";
import type {FC} from "react";

type PostProps = {
    post: IPost
}

export const PostComponent: FC<PostProps> = ({ post: { title, userId, id, body } }) => {
    return (
        <div className="bg-white shadow-md rounded p-6 mb-6">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Title: {title}</h2>
            <p className="text-gray-600"><span className="font-semibold">User ID:</span> {userId}</p>
            <p className="text-gray-600"><span className="font-semibold">Post ID:</span> {id}</p>
            <p className="text-gray-800 mt-2"><span className="font-semibold">Post:</span> {body}</p>
        </div>
    );
};
