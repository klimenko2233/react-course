import {useEffect, useState} from "react";
import {getAll} from "../../services/general.api.service.ts";
import type {IPost, IPostResponse} from "../../models/PostsModel.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getAll<IPostResponse>('posts')
            .then(res => setPosts(res.posts))
    }, []);
    return (
        <div>
            {
                posts.map((post:IPost) => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};