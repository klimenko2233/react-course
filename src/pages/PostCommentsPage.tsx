import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type {ICommentPlaceholder} from "../models/ICommentPlaceholder.ts";
import type {ICommentDummy, ICommentDummyResponse} from "../models/ICommentDummy.ts";

export const PostCommentsPage = () => {
    const { postId, api } = useParams();
    const [comments, setComments] = useState<(ICommentPlaceholder | ICommentDummy)[]>([]);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (!postId || !api) return;

        const url =
            api === 'dummyjson'
                ? `https://dummyjson.com/comments/post/${postId}`
                : `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                const result = api === 'dummyjson' ? (data as ICommentDummyResponse).comments : data;
                setComments(result);
            });
    }, [postId, api]);

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-2">Comments for Post {postId}</h2>
            <button
                onClick={() => setVisible(!visible)}
                className="mb-4 bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
            >
                {visible ? 'Hide' : 'Show'} Comments
            </button>

            {visible && (
                <ul className="space-y-2">
                    {comments.map(comment => (
                        <li key={comment.id} className="bg-gray-100 p-3 rounded shadow">
                            <p className="text-sm italic">
                                {api === 'dummyjson' ? (comment as ICommentDummy).user.username : (comment as ICommentPlaceholder).email}
                            </p>
                            <p>{comment.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
