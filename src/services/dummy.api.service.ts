import type {IUserResponse} from "../models/IUser.ts";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const UserService = {
    getAll: async (page:string):Promise<IUserResponse> => {
        const limit = 30;
        const skip = limit * (+page) - limit;
        return await fetch(`${baseUrl}/users?skip=`+skip).then(res => res.json());
    }
}