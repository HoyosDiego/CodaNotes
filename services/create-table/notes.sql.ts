export const CREATE_NOTES_TABLE = `
    CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY,         
        title TEXT NOT NULL, 
        content TEXT NOT NULL, 
        timestamp INTEGER NOT NULL
    );
`;