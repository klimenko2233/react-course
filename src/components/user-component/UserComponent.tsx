import type {IUser} from "../../models/IUserModel.ts";
import type {FC} from "react";
import {useNavigate} from "react-router-dom";

interface UserComponentProps {
    user: IUser
}

export const UserComponent:FC<UserComponentProps> = ({user}) => {
    const navigations = useNavigate();
    const onButtonClickNavigate = () => {
        navigations(user.id + '/carts');
    };

    return (
        <div className="bg-white rounded-lg shadow p-4 border border-gray-200 text-gray-800 flex items-center gap-4">
            <div>
                <span className="text-sm text-gray-500">User:</span>{" "}
                <strong className="text-base text-blue-600">{user.username}</strong>
            </div>
            <button
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1.5 px-4 rounded-lg transition-all duration-200"
                onClick={onButtonClickNavigate}>
                View Carts
            </button>
        </div>
    );
};