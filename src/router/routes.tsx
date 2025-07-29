import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersPlaceholderPage} from "../pages/UsersPlaceholderPage.tsx";
import {UsersDummyPage} from "../pages/UsersDummyPage.tsx";
import {PostsPlaceholderPage} from "../pages/PostsPlaceholderPage.tsx";
import {PostsDummyPage} from "../pages/PostsDummyPage.tsx";
import {CommentsPlaceholderPage} from "../pages/CommentsPlaceholderPage.tsx";
import {CommentsDummyPage} from "../pages/CommentsDummyPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/',element:<App/>,children:[
            {path:'users/jsonplaceholder',element:<UsersPlaceholderPage/>},
            {path:'users/dummyjson',element:<UsersDummyPage/>},
            {path:'posts/jsonplaceholder',element:<PostsPlaceholderPage/>},
            {path:'posts/dummyjson',element:<PostsDummyPage/>},
            {path:'comments/jsonplaceholder',element:<CommentsPlaceholderPage/>},
            {path:'comments/dummyjson',element:<CommentsDummyPage/>}
        ]
    }
])