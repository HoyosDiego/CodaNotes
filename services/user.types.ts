export interface User {
    id?: number;
    name: string;
    lastname: string;
    photo_uri?: string;
}

export interface UserInput {
    name: string;
    lastname: string;
    photo_uri?: string | null;
}