import type {IUserDummyResponse} from "../models/IUserDummy.ts";
import type {IPostDummyResponse} from "../models/IPostDummy.ts";
import type {ICommentDummyResponse} from "../models/ICommentDummy.ts";

const baseUrl = import.meta.env.VITE_API_DUMMYJSON;

export const UserDummyService = {
    getAll: async (): Promise<IUserDummyResponse> => {
        return await fetch(`${baseUrl}/users?limit=1000`).then(res => res.json());
    }
}

export const PostDummyService = {
    getAll: async (): Promise<IPostDummyResponse> => {
        return await fetch(`${baseUrl}/posts?limit=1000`).then(res => res.json());
    }
}

export const CommentDummyService = {
    getAll: async (): Promise<ICommentDummyResponse> => {
        return await fetch(`${baseUrl}/comments?limit=1000`).then(res => res.json());
    }
}