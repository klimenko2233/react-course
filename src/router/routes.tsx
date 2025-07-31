import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";

export const routes = createBrowserRouter([
    {path:"/", element: <App/>,children: [
        {path:"users",element:<UsersPage/>}]
    }
]);