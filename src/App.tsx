import './App.css'
import {LBComponent} from "./components/LBComponent.tsx";
import {RBComponent} from "./components/RBComponent.tsx";
import {init, MyContext} from "./context/MyContext.ts";
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState<number>(init.counterValue);
  return (
    <div>
      <h1>Counter</h1>
        <MyContext.Provider value={{
            counterValue: counter,
            increment: (obj: number) => {
                setCounter(++obj);
            }
        }}>
            <LBComponent />
            <RBComponent />
        </MyContext.Provider>
    </div>
  )
}

export default App
