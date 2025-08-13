import {useParams} from "react-router";
import {useEffect} from "react";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {loadUser} from "../redux/slices/user-slice/userSlice.ts";

export const UserPage = () => {
    const {id} = useParams();
    const user = useAppSelector(({userSlice}) => userSlice.user);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(id) dispatch(loadUser(id));
    }, [id]);

    return (
        <div>
            {user && <div>{user.id}.{user.username} --- {user.email}</div>}
        </div>
    );
};