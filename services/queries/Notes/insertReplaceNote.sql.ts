export const INSERT_REPLACE_NOTE = `
    INSERT OR REPLACE INTO notes (id, title, content, timestamp) VALUES (?, ?, ?, ?);
`;