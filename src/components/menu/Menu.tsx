import {Link} from "react-router-dom";
import "./Menu.css";

export const Menu = () => {
    return (
        <ul>
            <li>
                <Link to={'users/jsonplaceholder'}>Users from JSONPlaceholder</Link>
            </li>
            <li>
                <Link to={'/users/dummyjson'}>Users from DummyJSON</Link>

            </li>
            <li>
                <Link to={'/posts/jsonplaceholder'}>Posts from JSONPlaceholder</Link>
            </li>
            <li>
                <Link to={'/posts/dummyjson'}>Posts from DummyJSON</Link>
            </li>
            <li>
                <Link to={'/comments/jsonplaceholder'}>Comments from JSONPlaceholder</Link>
            </li>
            <li>
                <Link to={'comments/dummyjson'}>Comments from DummyJSON</Link>
            </li>
        </ul>
    );
};