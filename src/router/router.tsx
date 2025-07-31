import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersMenuPage} from "../pages/UsersMenuPage.tsx";
import {UsersPlaceholderPage} from "../pages/UsersPlaceholderPage.tsx";
import {UserPostsPagePlaceholder} from "../pages/UserPostsPagePlaceholder.tsx";
import {UsersDummyPage} from "../pages/UsersDummyPage.tsx";
import {UserPostsPageDummy} from "../pages/UserPostsPageDummy.tsx";
import {PostCommentsPage} from "../pages/PostCommentsPage.tsx";



export const routes = createBrowserRouter([
    {
        path:'/',element:<App/>,children:[
            {path:'users',children:[
                    {index:true,element: <UsersMenuPage/>},
                    {path: 'placeholder', children: [
                            { index: true, element: <UsersPlaceholderPage /> },
                            { path: ':userId/posts', element: <UserPostsPagePlaceholder /> },
                        ],
                    },
                    {path: 'dummyjson', children: [
                            { index: true, element: <UsersDummyPage /> },
                            { path: ':userId/posts', element: <UserPostsPageDummy /> },
                        ],
                    },
                    { path: ':api/:userId/posts/:postId/comments', element: <PostCommentsPage/>}
                ]}
        ]
    }
])