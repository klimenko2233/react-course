import type {IPostDummy} from "../../models/IPostDummy.ts";
import type {FC} from "react";

interface PostDummyProps {
    post: IPostDummy
}

export const PostDummy:FC<PostDummyProps> = ({post}) => {
    return (
        <div className="shadow p-6 mb-4 border border-gray-200 rounded-lg bg-white text-gray-800">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{post.title}</h2>
            <p className="mb-3 text-gray-700">{post.body}</p>

            <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag:string, index) => (
                    <span
                        key={index}
                        className="px-2 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                    >#{tag}
                    </span>))
                }
            </div>

            <div className="text-sm text-gray-600 space-y-1">
                <p>
                    <span className="font-medium">User ID:</span> {post.userId}
                </p>
                <p>
                    <span className="font-medium">Views:</span> {post.views}
                </p>
                <p>
                    <span className="font-medium">Reactions:</span> 👍 {post.reactions.likes}, 👎 {post.reactions.dislikes}
                </p>
            </div>
        </div>
    );
};