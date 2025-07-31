import './App.css'
import {MainMenu} from "./components/MainMenu.tsx";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div>
      <MainMenu/>
      <Outlet/>
    </div>
  )
}

export default App
