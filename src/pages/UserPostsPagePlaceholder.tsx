import { type FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export const UserPostsPagePlaceholder: FC = () => {
    const { userId } = useParams();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [commentsMap, setCommentsMap] = useState<{ [postId: number]: IComment[] }>({});
    const [visibleComments, setVisibleComments] = useState<number | null>(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, [userId]);

    const toggleComments = async (postId: number) => {
        if (visibleComments === postId) {
            setVisibleComments(null);
        } else {
            if (!commentsMap[postId]) {
                const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
                const data = await res.json();
                setCommentsMap((prev) => ({ ...prev, [postId]: data }));
            }
            setVisibleComments(postId);
        }
    };

    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-semibold">Posts by User {userId}</h2>
            {posts.map((post) => (
                <div key={post.id} className="border rounded-xl p-4 bg-white shadow space-y-2">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="text-gray-700">{post.body}</p>
                    <button
                        onClick={() => toggleComments(post.id)}
                        className="mt-2 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition"
                    >
                        {visibleComments === post.id ? "Hide comments" : "Show comments"}
                    </button>

                    {visibleComments === post.id && (
                        <div className="mt-3 space-y-2 border-t pt-3">
                            {commentsMap[post.id]?.length ? (
                                commentsMap[post.id].map((comment) => (
                                    <div key={comment.id} className="bg-gray-50 p-3 rounded border">
                                        <p className="text-sm font-semibold">{comment.name}</p>
                                        <p className="text-sm text-gray-600">{comment.email}</p>
                                        <p className="text-sm mt-1">{comment.body}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm italic text-gray-500">Загрузка комментариев...</p>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};