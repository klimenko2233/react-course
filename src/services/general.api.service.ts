import type {IUserResponse} from "../models/IUserModel.ts";
import type {ICartResponse} from "../models/ICartModel.ts";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const UserService = {
    getAllUsers: async ():Promise<IUserResponse> => {
        return await fetch(baseUrl + '/users').then(res => res.json())
    }
}

export const CartService = {
    getUserCarts: async (userId: string): Promise<ICartResponse> => {
        return await fetch(`${baseUrl}/carts/user/${userId}`).then(response => response.json());
    }
}