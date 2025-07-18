import type {IUser} from "../../models/IUser.ts";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service.ts";
import {UserDetails} from "../user-details/UserDetails.tsx";
import {UserCard} from "../user-card/UserCard.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

    useEffect(() => {
        getUsers().then(res=>setUsers(res.users));
    }, []);
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Users</h1>
            {selectedUser ? (
                <div>
                    <button
                        onClick={() => setSelectedUser(null)}
                        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Back to all Users
                    </button>
                    <UserDetails user={selectedUser} />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {users.map((user) => (
                        <UserCard key={user.id} user={user} onSelect={() => setSelectedUser(user)} />
                    ))}
                </div>
            )}
        </div>

    );
};