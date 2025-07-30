import type {FC} from "react";
import type {IUserDummy} from "../../models/IUserDummy.ts";

interface UserDummyProps {
    user: IUserDummy;
}

export const UserDummy: FC<UserDummyProps> = ({ user }) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 text-gray-800 max-w-md mx-auto">
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="w-24 h-24 rounded-full object-cover border border-gray-300"
                />
                <div>
                    <h3 className="text-xl font-semibold text-blue-700">
                        {user.firstName} {user.lastName}
                    </h3>
                    <p className="text-sm text-gray-500">{user.username}</p>
                </div>
            </div>

            <div className="space-y-1 text-sm">
                <p><span className="font-medium text-gray-600">Email:</span> {user.email}</p>
                <p><span className="font-medium text-gray-600">Phone:</span> {user.phone}</p>
                <p><span className="font-medium text-gray-600">Age:</span> {user.age}</p>
                <p><span className="font-medium text-gray-600">University:</span> {user.university}</p>
                <p>
                    <span className="font-medium text-gray-600">Address:</span> {user.address?.address}, {user.address?.city}, {user.address?.state}, {user.address?.country}
                </p>
                <p>
                    <span className="font-medium text-gray-600">Company:</span> {user.company?.name}
                </p>
                <p>
                    <span className="font-medium text-gray-600">Bank:</span> {user.bank?.cardNumber} <span className="text-gray-400">({user.bank?.cardType})</span>
                </p>
            </div>
        </div>
    );
};
