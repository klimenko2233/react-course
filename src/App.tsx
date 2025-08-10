import './App.css'
import {FirstComponent} from "./components/FirstComponent.tsx";
import {SecondComponent} from "./components/SecondComponent.tsx";
import {MyContext} from "./context/MyContext.tsx";
import {useState} from "react";


function App() {
    const [themeValue, setThemeValue] = useState<string>('light');
  return (
    <div>
        <MyContext.Provider value={
            {
                theme: themeValue,
                changeTheme: (newTheme: string) => setThemeValue(newTheme)
            }
        }>
            <FirstComponent />
            <SecondComponent />
        </MyContext.Provider>
    </div>
  )
}

export default App
