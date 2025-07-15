import {useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import {loadPosts} from "../../service/api.service.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            const allPosts = await loadPosts();
            setPosts(allPosts);
        }
        fetchPosts();
    }, []);

    return (
        <div className="max-w-3xl mx-auto py-10 px-4 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">Posts List</h1>
            {posts.map((post) => (
                <PostComponent post={post} key={post.id} />
            ))}
        </div>
    );
};
