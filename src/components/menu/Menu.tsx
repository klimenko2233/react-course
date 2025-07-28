import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li>
                <Link to={'users'}><strong>Users</strong></Link>
            </li>
            <li>
                <Link to={'posts'}><strong>Posts</strong></Link>
            </li>

        </ul>
    );
};