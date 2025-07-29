import type {IUserPlaceholder} from "../models/IUserPlaceHolder.ts";

const baseUrl:string = import.meta.env.VITE_API_JSONPLACEHOLDER;

export const UserService = {
    getAll: async ():Promise<IUserPlaceholder[]> => {
        return await fetch(`${baseUrl}/users`).then(res => res.json())
    }
}