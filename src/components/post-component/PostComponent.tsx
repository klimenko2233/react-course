import type {IPost} from "../../models/PostsModel.ts";
import type {FC} from "react";

interface PostComponentProps {
    post: IPost
}

export const PostComponent:FC<PostComponentProps> = ({post}) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p><strong>Author:</strong> {post.userId}</p>
            <p><strong>ID:</strong> {post.id}</p>
            <hr/>
        </div>
    );
};