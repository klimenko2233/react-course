import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

interface UserComponentProps {
    user: IUser
}

export const UserComponent:FC<UserComponentProps> = ({user}) => {
    return (
        <div>
            {user.id}. {user.firstName} {user.lastName} - {user.email}
        </div>
    );
};