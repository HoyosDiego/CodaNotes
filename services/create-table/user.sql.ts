export const CREATE_USERS_TABLE = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY DEFAULT 1, 
        name TEXT NOT NULL, 
        lastname TEXT NOT NULL
    );
`;