import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul className="flex space-x-4 bg-gray-100 p-4 rounded-xl shadow-md mb-6">
            <li>
                <Link
                    to="cars"
                    className="text-blue-600 hover:text-blue-800 font-semibold transition"
                >
                    Cars
                </Link>
            </li>
            <li>
                <Link
                    to="cars/create"
                    className="text-blue-600 hover:text-blue-800 font-semibold transition"
                >
                    Create Car
                </Link>
            </li>
        </ul>
    );
};
