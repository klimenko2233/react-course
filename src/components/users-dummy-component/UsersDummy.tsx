import {useEffect, useState} from "react";
import type {IUserDummy, IUserDummyResponse} from "../../models/IUserDummy.ts";
import {UserDummyService} from "../../services/dummyjson.api.service.ts";
import {UserDummy} from "../user-dummy-component/UserDummy.tsx";

export const UsersDummy = () => {
    const [users, setUsers] = useState<IUserDummy[]>([])
    useEffect(() => {
        UserDummyService.getAll().then((data:IUserDummyResponse)=> setUsers(data.users))
    }, []);
    return (
        <div>
            {users.map(user=> <UserDummy key={user.id} user={user}/>)}
        </div>
    );
};