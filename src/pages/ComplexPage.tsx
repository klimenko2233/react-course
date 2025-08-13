import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../redux/slices/UserSlice.ts";
import {postActions} from "../redux/slices/PostSlice.ts";
import {commentActions} from "../redux/slices/CommentSlice.ts";

export const ComplexPage = () => {
    const dispatch = useAppDispatch();
    const {userStoreSlice: {users}, postStoreSlice: {posts}, commentStoreSlice: {comments}} =
        useAppSelector(state => state);

    useEffect(() => {
        if (users.length === 0) dispatch(userActions.loadUsers());
        if (posts.length === 0) dispatch(postActions.loadPosts());
        if (comments.length === 0) dispatch(commentActions.loadComments());
    }, [users.length, posts.length, comments.length]);

    const postsByUser = posts.reduce((acc, post) => {
        if (!acc[post.userId]) acc[post.userId] = [];
        acc[post.userId].push(post);
        return acc;
    }, {} as Record<number, typeof posts>);

    const commentsByPost = comments.reduce((acc, comment) => {
        if (!acc[comment.postId]) acc[comment.postId] = [];
        acc[comment.postId].push(comment);
        return acc;
    }, {} as Record<number, typeof comments>);

    return (
        <div className="space-y-8 p-6">
            {users.map(user => (
                <div
                    key={user.id}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                >
                    {/* Пользователь */}
                    <h2 className="text-xl font-bold text-gray-800 mb-2">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-600">{user.phone}</p>
                    <p className="text-gray-600">{user.website}</p>

                    <div className="mt-4 space-y-4">
                        {postsByUser[user.id]?.map(post => (
                            <div
                                key={post.id}
                                className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                            >
                                <h3 className="font-semibold text-gray-800">{post.title}</h3>
                                <p className="text-gray-600 mt-1">{post.body}</p>

                                <div className="mt-3 space-y-2">
                                    {commentsByPost[post.id]?.map(comment => (
                                        <div
                                            key={comment.id}
                                            className="bg-white p-3 rounded-md border border-gray-100"
                                        >
                                            <strong className="block text-gray-800">{comment.name}</strong>
                                            <p className="text-gray-600 text-sm mt-1">{comment.body}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

    );
};

