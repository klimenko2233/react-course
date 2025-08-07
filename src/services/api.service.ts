import axios, { AxiosError } from 'axios';
import type { IUserWithTokens } from "../models/IUserWithTokens.ts";
import type { IProduct, IProductsResponse } from "../models/IProduct.ts";
import { retriveLocalStorage } from "./helpers.ts";
import type { ITokenPair } from "../models/ITokenPair.ts";

type LoginData = {
    username: string;
    password: string;
    expiresInMin: number;
}

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

axiosInstance.interceptors.request.use((request) => {
    if (request.method?.toUpperCase() === 'GET') {
        const user = retriveLocalStorage<IUserWithTokens>('user');
        if (user?.accessToken) {
            request.headers.Authorization = 'Bearer ' + user.accessToken;
        }
    }
    return request;
});

let isRefreshing = false;

axiosInstance.interceptors.response.use(
    response => response,
    async (error: AxiosError) => {
        if (error.response?.status === 401 && !isRefreshing) {
            isRefreshing = true;

            try {
                await refresh();
                isRefreshing = false;


                const originalRequest = error.config!;
                const user = retriveLocalStorage<IUserWithTokens>('user');

                if (originalRequest.headers && typeof originalRequest.headers.set === 'function') {
                    originalRequest.headers.set('Authorization', 'Bearer ' + user.accessToken);
                }

                return axiosInstance(originalRequest);
            } catch (refreshError) {
                isRefreshing = false;
                localStorage.removeItem('user');
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);


export const login = async ({ username, password, expiresInMin }: LoginData): Promise<IUserWithTokens> => {
    const { data: userWithToken } = await axiosInstance.post<IUserWithTokens>('/login', {
        username,
        password,
        expiresInMin
    });

    localStorage.setItem('user', JSON.stringify(userWithToken));
    return userWithToken;
};


export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const { data } = await axiosInstance.get<IProductsResponse>('/products');
    return data.products;
};


export const refresh = async () => {
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const { data: { accessToken, refreshToken } } = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin: 1
    });

    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;

    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
};
