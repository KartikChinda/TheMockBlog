export interface Post {
    id: number;
    title: string;
    body: string;
    userId: string;
    author: User;
    comments?: Comments[];
}

export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    website: string;
}

export interface Comments {
    postId: string;
    id: string;
    name: string;
    email: string;
    body: string;
}