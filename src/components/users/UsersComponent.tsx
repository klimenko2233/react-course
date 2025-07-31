import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {UserService} from "../../services/dummy.api.service.ts";
import {UserComponent} from "../user/UserComponent.tsx";
import {useSearchParams} from "react-router-dom";

export const UsersComponent = () => {
    const [searchParams]=useSearchParams({page: '1'})
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        const currentPage =searchParams.get('page')||'1'
        UserService.getAll(currentPage).then((res) => setUsers(res.users))
    }, [searchParams]);
    return (
        <div>
            {users.map((user) => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};