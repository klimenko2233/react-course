import {createContext} from "react";

interface ContextValueType {
    theme: string;
    changeTheme: (theme: string) => void;
}

export const MyContext = createContext<ContextValueType>({
    theme: 'light',
    changeTheme: (theme: string) => {
        console.log(theme);
    }
});