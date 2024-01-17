export {}

export interface User {
    address: object;
    company: object;
    email: string;
    id: number;
    name: string;
    phone: number;
    username: string;
    website: string;
}

export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export interface Routers {
    name: string;
    href: string;
    ruName: string;
    active: boolean;
}
