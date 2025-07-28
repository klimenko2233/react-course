import type {IUser} from "../../models/UserModel.ts";
import type {FC} from "react";

interface UserComponentProps {
    user: IUser
}

export const UserComponent:FC<UserComponentProps> = ({user}) => {
    return (
        <div>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>Email: {user.email}</p>
            <hr/>
        </div>
    );
};