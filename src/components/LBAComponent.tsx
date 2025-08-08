import {useContext} from "react";
import {MyContext} from "../context/MyContext.ts";

export const LBAComponent = () => {
    const {counterValue} = useContext(MyContext)
    return (
        <div>
            <p> Current counter value is {counterValue} </p>
        </div>
    );
};