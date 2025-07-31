import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type {IUser} from "../models/ICommentDummy.ts";

export const UsersDummyPage = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data.users);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading users...</p>;

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Dummy Users</h2>
            <ul className="space-y-2">
                {users.map(user => (
                    <li key={user.id} className="flex justify-between items-center bg-gray-100 p-2 rounded shadow">
                        <span>{user.fullName} ({user.username})</span>
                        <Link
                            to={`/users/dummyjson/${user.id}/posts`}
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        >
                            View Posts
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
