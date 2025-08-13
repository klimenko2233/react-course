import {useEffect} from "react";
import {userSliceActions} from "../redux/slices/user-slice/userSlice.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";

export const UsersPage = () => {
    const {users} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
    }, []);
    return(
        <div>
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    )
};