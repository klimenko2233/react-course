import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {UserPage} from "../pages/UserPage.tsx";

export const routes = createBrowserRouter([
    {
        path:'/', element:<App/>,children:[
            {path:'users', element:<UsersPage/>},
            {path:'posts', element:<PostsPage/>},
            {path:'comments', element:<CommentsPage/>},
            {path:'user/:id', element:<UserPage/>},
        ]
    }
])