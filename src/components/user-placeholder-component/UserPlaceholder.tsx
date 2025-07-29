import type {IUserPlaceholder} from "../../models/IUserPlaceHolder.ts";
import type {FC} from "react";

interface UserPlaceholderProps {
    user: IUserPlaceholder
}

export const UserPlaceholder: FC<UserPlaceholderProps> = ({ user }) => {
    return (
        <div className="shadow p-6 mb-4 border border-gray-200">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{user.name}</h2>
            <p className="text-gray-700"><span className="font-medium">Email:</span> {user.email}</p>
            <p className="text-gray-700"><span className="font-medium">Phone:</span> {user.phone}</p>
            <p className="text-gray-700"><span className="font-medium">Website:</span> {user.website}</p>
            <address className="mt-3 text-sm text-gray-600">
                <strong>Address:</strong><br />
                {user.address.street}, {user.address.suite},<br />
                {user.address.city}, {user.address.zipcode}
            </address>
        </div>
    );
};
