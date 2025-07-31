export interface IReactions {
    likes: number;
    dislikes: number;
}

export interface IPostDummy {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IReactions;
    views: number;
    userId: number;
}

export interface IPostDummyResponse {
    posts: IPostDummy[];
    total: number;
    skip: number;
    limit: number;
}