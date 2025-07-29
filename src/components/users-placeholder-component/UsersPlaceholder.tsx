import {useEffect, useState} from "react";
import type {IUserPlaceholder} from "../../models/IUserPlaceHolder.ts";
import {UserService} from "../../services/jsonplaceholder.api.service.ts";
import {UserPlaceholder} from "../user-placeholder-component/UserPlaceholder.tsx";

export const UsersPlaceholder = () => {
    const [users, setUsers] = useState<IUserPlaceholder[]>([])
    useEffect(() => {
        UserService.getAll().then((res:IUserPlaceholder[])=> setUsers(res))
    }, []);
    return (
        <div>
            {
                users.map((user:IUserPlaceholder) => <UserPlaceholder key={user.id} user={user}/>)
            }
        </div>
    );
};