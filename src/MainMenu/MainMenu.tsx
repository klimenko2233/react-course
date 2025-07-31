import {Link} from "react-router-dom";
import './MainMenu.css';

export const MainMenu = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/posts">Posts</Link>
            </li>
            <li>
                <Link to="/comments">Comments</Link>
            </li>
        </ul>
    );
};