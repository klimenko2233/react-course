import {useEffect, useState} from "react";
import type {IUser, IUserResponse} from "../../models/UserModel.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {userService} from "../../services/api.service.ts";
export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getAllUsers()
            .then((data: IUserResponse) => {
                setUsers(data.users);
            })

    }, []);
    return (
        <div className="gap-6 p-4">
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};