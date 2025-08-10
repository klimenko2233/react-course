import {MyContext} from "../context/MyContext.tsx";
import {useContext} from "react";

export const SecondA = () => {
    const {theme,changeTheme} = useContext(MyContext);

    const LightHandler = () => {
        changeTheme('light');
        console.log(`Theme changed to: ${theme}`);
    };
    const DarkHandler = () => {
        changeTheme('dark');
        console.log(`Theme changed to: ${theme}`);
    };
    return (
        <div>
            <button onClick={LightHandler}>Change theme to light</button>
            <button onClick={DarkHandler}>Change theme to dark</button>
        </div>
    );
};