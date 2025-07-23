import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UsersComponent} from "./components/UsersComponent.tsx";
import {CommentsComponent} from "./components/CommentsComponent.tsx";
import {PostsComponent} from "./components/PostsComponent.tsx";
import {ProductsComponent} from "./components/ProductsComponent.tsx";
import App from "./App.tsx";


createRoot(document.getElementById('root')!)
    .render(<BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App/>}>
                <Route path={'users'} element={<UsersComponent/>}/>
                <Route path={'posts'} element={<PostsComponent/>}/>
                <Route path={'comments'} element={<CommentsComponent/>}/>
                <Route path={'products'} element={<ProductsComponent/>}/>
            </Route>
        </Routes>
    </BrowserRouter>)
