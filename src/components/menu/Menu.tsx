import {Link} from "react-router";

export const Menu = () => {
    return (
        <ul className="flex justify-between bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md">
            <li><Link className="hover:text-yellow-400 transition" to='/'>Home</Link></li>
            <li><Link className="hover:text-yellow-400 transition" to='users'>Users</Link></li>
            <li><Link className="hover:text-yellow-400 transition" to='posts'>Posts</Link></li>
            <li><Link className="hover:text-yellow-400 transition" to='comments'>Comments</Link></li>
            <li><Link className="hover:text-yellow-400 transition" to='complex'>Complex</Link></li>
        </ul>
    );
};
