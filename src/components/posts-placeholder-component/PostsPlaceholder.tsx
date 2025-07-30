import {useEffect, useState} from "react";
import type {IPost} from "../../models/IPostPlaceholder.ts";
import {PostPlaceholderService} from "../../services/jsonplaceholder.api.service.ts";
import {PostPlaceholder} from "../post-placeholder-component/PostPlaceholder.tsx";

export const PostsPlaceholder = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        PostPlaceholderService.getAll().then((data:IPost[])=>setPosts(data))
    }, []);
    return (
        <div>
            {posts.map((post: IPost) => <PostPlaceholder key={post.id} post={post}/>)}
        </div>
    );
};