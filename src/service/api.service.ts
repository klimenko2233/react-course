import type {IProductResponse} from "../models/IProduct";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProducts = async (): Promise<IProductResponse> => {
    return await fetch(BASE_URL+ '/products?limit=194').then(res => res.json());
};
