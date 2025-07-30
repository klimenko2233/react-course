import type {IUserPlaceholder} from "../../models/IUserPlaceHolder.ts";
import type {FC} from "react";

interface UserPlaceholderProps {
    user: IUserPlaceholder
}

export const UserPlaceholder: FC<UserPlaceholderProps> = ({ user }) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 text-gray-800 max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">{user.name}</h2>

            <div className="space-y-1 text-sm">
                <p>
                    <span className="font-medium text-gray-600">Email:</span> {user.email}
                </p>
                <p>
                    <span className="font-medium text-gray-600">Phone:</span> {user.phone}
                </p>
                <p>
                    <span className="font-medium text-gray-600">Website:</span> {user.website}
                </p>
            </div>

            <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium mb-1">Address:</p>
                <p>{user.address.street}, {user.address.suite}</p>
                <p>{user.address.city}, {user.address.zipcode}</p>
            </div>
        </div>
    );
};