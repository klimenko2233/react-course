import {useEffect, useState} from "react";
import {getAll} from "../../services/general.api.service.ts";
import type {IUser, IUserResponse} from "../../models/UserModel.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";


export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getAll<IUserResponse>('users')
            .then(res => setUsers(res.users))
    }, []);
    return (
        <div>
            {
                users.map((user:IUser) => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};