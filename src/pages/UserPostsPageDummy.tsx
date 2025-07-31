import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type {IPost} from "../models/IPostPlaceholder.ts";

export const UserPostsPageDummy = () => {
    const { userId, api } = useParams();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId || !api) return;

        const url =
            api === 'dummyjson'
                ? `https://dummyjson.com/posts/user/${userId}`
                : `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPosts(api === 'dummyjson' ? data.posts : data);
                setLoading(false);
            });
    }, [userId, api]);

    if (loading) return <p>Loading posts...</p>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Posts by User {userId}</h2>
            <ul className="space-y-3">
                {posts.map(post => (
                    <li key={post.id} className="bg-white p-4 rounded shadow">
                        <h3 className="font-semibold">{post.title}</h3>
                        <p>{post.body}</p>
                        <Link
                            to={`/users/${api}/${userId}/posts/${post.id}/comments`}
                            className="mt-2 inline-block text-blue-600 hover:underline"
                        >
                            View Comments
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
