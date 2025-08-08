import {useContext} from "react";
import {MyContext} from "../context/MyContext.ts";

export const RBAComponent = () => {
    const {counterValue,increment} = useContext(MyContext)
    return (
        <div>
            <button onClick={() => increment(counterValue)}>Increment</button>
        </div>
    );
};