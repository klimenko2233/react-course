import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {postActions} from "../redux/slices/PostSlice.ts";

export const PostsPage = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.postStoreSlice.posts);
    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, [dispatch]);

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
            {posts.map(post => (
                <div
                    key={post.id}
                    className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
                >
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">{post.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{post.body}</p>
                </div>
            ))}
        </div>

    );
};