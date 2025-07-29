import {useEffect, useState} from "react";
import type {IUser, IUserResponse} from "../../models/IUserModel.ts";
import {UserService} from "../../services/general.api.service.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        UserService.getAllUsers().then((data:IUserResponse) => setUsers(data.users))
    }, [])
    return (
        <div>
            <h2>Users Component</h2>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};