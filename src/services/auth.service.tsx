import axios from 'axios';
import type { IUserWithTokens } from '../models/IUserWithTokens';

interface LoginData {
    username: string;
    password: string;
    expiresInMins: number;
}

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
});

export const login = async ({ username, password, expiresInMins }: LoginData): Promise<IUserWithTokens> => {
    const { data } = await axiosInstance.post<IUserWithTokens>('/login', { username, password, expiresInMins });
    return data;
};
