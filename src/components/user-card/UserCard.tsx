import type {IUser} from "../../models/IUser.ts";
import {type FC} from "react";

interface Props {
    user:IUser;
    onSelect:()=>void;
}

export const UserCard: FC<Props> = ({ user, onSelect }) => {
    return (
        <div
            onClick={onSelect}
            className="cursor-pointer bg-white rounded-xl shadow-md p-4 transition hover:shadow-lg hover:scale-[1.02]"
        >
            <img
                src={user.image}
                alt={user.firstName}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl text-center font-semibold">
                {user.firstName} {user.lastName}
            </h2>
            <p className="text-center text-gray-500 text-sm">{user.email}</p>
            <p className="text-center text-sm">{user.gender}, {user.age} y.o.</p>
            <p className="text-center text-sm text-gray-700">{user.company.name}</p>
        </div>
    );
};
