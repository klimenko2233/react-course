import type {IPost} from "../models/IPost.ts";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';
export const loadPosts = async () : Promise<IPost[]> => {
    return await fetch(endpointPosts).then(res => res.json());
}