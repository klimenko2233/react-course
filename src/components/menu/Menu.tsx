import {Link} from "react-router";

export const Menu = () => {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='users'>Users</Link></li>
            <li><Link to='posts'>Posts</Link></li>
            <li><Link to='comments'>Comments</Link></li>
            <li><Link to='complex'>Complex</Link></li>
        </ul>
    );
};