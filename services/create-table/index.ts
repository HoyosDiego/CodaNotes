import { CREATE_NOTES_TABLE } from "./notes.sql";
import { CREATE_USERS_TABLE } from "./user.sql";

export const ALL_CREATION_QUERIES: string[] = [
    CREATE_USERS_TABLE,
    CREATE_NOTES_TABLE,
];