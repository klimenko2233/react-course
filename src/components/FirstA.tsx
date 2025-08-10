import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const FirstA = () => {
    const {theme} = useContext(MyContext)
    return (
        <div className={theme}>
            <h2>The theme will change in this component.</h2>
        </div>
    )
};