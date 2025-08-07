import {useEffect} from "react";
import {login} from "../services/api.service.ts";

export const LoginPage = () => {
    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMin: 1,
        })
    }, []);
    return (
        <>
            Login Page
        </>
    );
};