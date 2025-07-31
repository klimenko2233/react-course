import {Link} from "react-router-dom";

export const MainMenu = () => {
    return (
        <nav className="p-4 bg-blue-100 shadow-sm">
            <ul className="flex gap-4 text-blue-800 font-medium">
                <li>
                    <Link to="/users" className="hover:underline hover:text-blue-600 transition">
                        Users
                    </Link>
                </li>
            </ul>
        </nav>
    );
};