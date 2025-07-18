import type { IUserResponse } from "../models/IUser.ts";

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL + '/users?limit=1000';

export const getUsers = async (): Promise<IUserResponse> => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.status}`);
    }
    return await response.json();
};

