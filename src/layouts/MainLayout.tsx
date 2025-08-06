import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import type { IUserWithTokens } from '../models/IUserWithTokens';
import type {Dispatch, FC, SetStateAction} from "react";

interface MainLayoutProps {
    user: IUserWithTokens | null;
    setUser: Dispatch<SetStateAction<IUserWithTokens | null>>;
}

export const MainLayout: FC<MainLayoutProps> = ({ user, setUser }) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    };

    return (
        <div>
            <nav className="flex gap-4 bg-gray-100 p-4 items-center justify-between">
                <div className="flex gap-4">
                    <NavLink to="/auth/products" className={({ isActive }) => (isActive ? 'font-bold text-blue-600' : '')}>
                        Products
                    </NavLink>
                    <NavLink to="/auth/users" className={({ isActive }) => (isActive ? 'font-bold text-blue-600' : '')}>
                        Users
                    </NavLink>
                </div>

                {user && (
                    <button
                        onClick={logout}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                )}
            </nav>

            <main className="p-4">
                <Outlet />
            </main>
        </div>
    );
};

