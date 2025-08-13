import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {userActions} from "../redux/slices/UserSlice.ts";
import type {IUser} from "../models/IUser.ts";

export const UsersPage = () => {
    const dispatch = useAppDispatch()
    const users:IUser[] = useAppSelector(state => state.userStoreSlice.users)

    useEffect(() => {
        dispatch(userActions.loadUsers())
    }, [dispatch]);
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-6">
            {users.map(user => (
                <div
                    key={user.id}
                    className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
                >
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
                    <p className="text-gray-600"><span className="font-medium">Email:</span> {user.email}</p>
                    <p className="text-gray-600"><span className="font-medium">Phone:</span> {user.phone}</p>
                    <p className="text-gray-600"><span className="font-medium">Website:</span> {user.website}</p>
                </div>
            ))}
        </div>
    );
};