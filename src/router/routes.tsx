import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersPlaceholderPage} from "../pages/users/UsersPlaceholderPage.tsx";
import {UsersDummyPage} from "../pages/users/UsersDummyPage.tsx";
import {PostsPlaceholderPage} from "../pages/posts/PostsPlaceholderPage.tsx";
import {PostsDummyPage} from "../pages/posts/PostsDummyPage.tsx";
import {CommentsPlaceholderPage} from "../pages/comments/CommentsPlaceholderPage.tsx";
import {CommentsDummyPage} from "../pages/comments/CommentsDummyPage.tsx";
import {CommentsMenuPage} from "../pages/comments/CommentsMenuPage.tsx";
import {PostsMenuPage} from "../pages/posts/PostsMenuPage.tsx";
import {UsersMenuPage} from "../pages/users/UsersMenuPage.tsx";


export const routes = createBrowserRouter([
    {
        path: '/',element:<App/>,children:[
            {path:'users',children:[
                    {index:true,element:<UsersMenuPage/>},
                    {path:'placeholder',element:<UsersPlaceholderPage/>},
                    {path:'dummyjson',element:<UsersDummyPage/>},
                ]
            },
            {path:'posts',children:[
                    {index:true,element:<PostsMenuPage/>},
                    {path:'placeholder',element:<PostsPlaceholderPage/>},
                    {path:'dummyjson',element:<PostsDummyPage/>}
                ]},
            {path:'comments',children:[
                    {index:true,element:<CommentsMenuPage/>},
                    {path:'placeholder',element:<CommentsPlaceholderPage/>},
                    {path:'dummyjson',element:<CommentsDummyPage/>},
                ]}
        ]
    }
])