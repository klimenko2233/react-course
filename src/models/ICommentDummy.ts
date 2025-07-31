export interface IUser {
    id: number;
    username: string;
    fullName: string;
}

export interface ICommentDummy {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: IUser;
}

export interface ICommentDummyResponse {
    comments: ICommentDummy[];
    total: number;
    skip: number;
    limit: number;
}