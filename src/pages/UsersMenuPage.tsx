import {Link} from "react-router-dom";

export const UsersMenuPage = () => {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Choose API</h2>
            <ul className="flex flex-col gap-3">
                <li>
                    <Link to="placeholder" className="inline-block px-4 py-2 bg-blue-200 text-blue-800 rounded hover:bg-blue-300">
                        JSONPlaceholder
                    </Link>
                </li>
                <li>
                    <Link to="dummyjson" className="inline-block px-4 py-2 bg-green-200 text-green-800 rounded hover:bg-green-300">
                        DummyJSON
                    </Link>
                </li>
            </ul>
        </div>
    );
};