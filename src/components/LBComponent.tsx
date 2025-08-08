import {LBAComponent} from "./LBAComponent.tsx";
import {useMemo} from "react";

export const LBComponent = () => {
    const memox =useMemo(() => {
        for( let i = 0; i < 100; i++) {
            console.log("LBComponent iteration: " + i);
        }
        return null;
    }, []);
    return (
        <div>
            <h2>Left Branch</h2>
            <LBAComponent />
        </div>
    );
};