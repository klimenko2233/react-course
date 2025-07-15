import type {IComment} from "../models/IComment.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL + '/comments';

export const getComments = async (): Promise<IComment[]> => {
    return await fetch(endpoint).then(res => res.json());
}