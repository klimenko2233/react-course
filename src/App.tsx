import './App.css'
import {Outlet} from "react-router-dom";
import {MainMenu} from "./MainMenu/MainMenu.tsx";
function App() {
  return (
    <div>
        <MainMenu/>
        <Outlet/>
        You can see information about users, posts and comments from jsonplaceholder and dummyjson here)

    </div>
  )
}

export default App
