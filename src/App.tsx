import './App.css'
import {Outlet} from "react-router-dom";
import {Menu} from "./components/menu/Menu.tsx";

function App() {
  return (
    <div>
      <Menu/>
      <h1>This is App component</h1>
      <Outlet/>
    </div>
  )
}

export default App
