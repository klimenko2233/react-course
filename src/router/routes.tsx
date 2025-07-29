import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersPlaceholder} from "../components/UsersPlaceholder.tsx";
import {UsersDummy} from "../components/UsersDummy.tsx";
import {PostsPlaceholder} from "../components/PostsPlaceholder.tsx";
import {PostsDummy} from "../components/PostsDummy.tsx";
import {CommentsPlaceholder} from "../components/CommentsPlaceholder.tsx";

export const routes = createBrowserRouter([
    {
        path: '/',element:<App/>,children:[
            {path:'users/jsonplaceholder',element:<UsersPlaceholder/>},
            {path:'users/dummyjson',element:<UsersDummy/>},
            {path:'posts/jsonplaceholder',element:<PostsPlaceholder/>},
            {path:'posts/dummyjson',element:<PostsDummy/>},
            {path:'comments/jsonplaceholder',element:<CommentsPlaceholder/>}
        ]
    }
])