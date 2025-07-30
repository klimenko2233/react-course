import type {IUserPlaceholder} from "../models/IUserPlaceHolder.ts";
import type {IPost} from "../models/IPostPlaceholder.ts";
import type {ICommentPlaceholder} from "../models/ICommentPlaceholder.ts";

const baseUrl:string = import.meta.env.VITE_API_JSONPLACEHOLDER;

export const UserPlaceholderService = {
    getAll: async ():Promise<IUserPlaceholder[]> => {
        return await fetch(`${baseUrl}/users`).then(res => res.json())
    }
}
export const PostPlaceholderService = {
    getAll: async ():Promise<IPost[]> => {
        return await fetch(`${baseUrl}/posts?limit=1000`).then(res => res.json())
    }
}
export const CommentPlaceholderService = {
    getAll: async ():Promise<ICommentPlaceholder[]> => {
        return await fetch(`${baseUrl}/comments?limit=1000}`).then(res => res.json())
    }
}