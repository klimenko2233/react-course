import type {IUserResponse} from "../models/UserModel.ts";
import type {ICartResponse} from "../models/CartsModel.ts";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
export const userService = {
    getAllUsers: async ():Promise<IUserResponse> => {
       return await fetch(baseUrl + '/users')
            .then(response => response.json())
    }
};
export const cartService = {
    getUserCarts: async (userId: string): Promise<ICartResponse> => {
        return await fetch(`${baseUrl}/carts/user/${userId}`)
            .then(response => response.json());
    }
}