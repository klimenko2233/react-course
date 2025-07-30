import {useEffect, useState} from "react";
import type {IPostDummy, IPostDummyResponse} from "../../models/IPostDummy.ts";
import {PostDummyService} from "../../services/dummyjson.api.service.ts";
import {PostDummy} from "../post-dummy-component/PostDummy.tsx";

export const PostsDummy = () => {
    const [posts, setPosts] = useState<IPostDummy[]>([])
    useEffect(() => {
        PostDummyService.getAll().then((data:IPostDummyResponse)=>setPosts(data.posts))
    }, []);
    return (
        <div>
            {posts.map((post: IPostDummy) => <PostDummy key={post.id} post={post}/>)}
        </div>
    );
};