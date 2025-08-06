import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {FC} from "react";

interface HomePageProps {
    user: IUserWithTokens | null;
}

export const HomePage: FC<HomePageProps> = ({ user }) => {
    return (
        <div className="p-4">
            {user ? (
                <div className="bg-green-50 border border-green-300 p-6 rounded shadow">
                    <h2 className="text-xl font-bold mb-2">Hi, {user.firstName} 👋</h2>
                    <p className="mb-2">Now you can</p>
                    <ul className="list-disc pl-6">
                        <li>View list of users</li>
                        <li>View list of products</li>
                    </ul>
                </div>
            ) : (
                <p>Please log in to see more features.</p>
            )}
        </div>
    );
};
