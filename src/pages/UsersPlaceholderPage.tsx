import {type FC, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import type {IUserPlaceholder} from "../models/IUserPlaceholder.ts";



export const UsersPlaceholderPage: FC = () => {
    const [users, setUsers] = useState<IUserPlaceholder[]>([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res):Promise<IUserPlaceholder[]> => res.json())
            .then((data:IUserPlaceholder[]) => {setUsers(data);});
    }, []);

    return (
        <div className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Users from Placeholder</h2>
            <ul className="space-y-4">
                {users.map((user) => (
                    <li key={user.id} className="p-4 bg-white rounded-xl shadow flex flex-col gap-2 border">
                        <div>
                            <p className="font-bold">{user.name}</p>
                            <p className="text-sm text-gray-600">@{user.username}</p>
                            <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                        <Link to={`/users/placeholder/${user.id}/posts`} className="self-start px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition">
                            User Posts
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
