import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersComponent} from "../components/UsersComponent.tsx";
import {PostsComponent} from "../components/PostsComponent.tsx";
import {CommentsComponent} from "../components/CommentsComponent.tsx";
import {ProductsComponent} from "../components/ProductsComponent.tsx";

export const routes = createBrowserRouter([
    {
        path: '/',element:<App/>,children:[
            { index: true, element: <h2>Welcome! Select a menu item</h2> },
            {path:'users',element:<UsersComponent/>},
            {path:'posts',element:<PostsComponent/>},
            {path:'comments',element:<CommentsComponent/>},
            {path:'products',element:<ProductsComponent/>},
        ]
    }
])