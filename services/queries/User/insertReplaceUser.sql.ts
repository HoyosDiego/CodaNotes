export const INSERT_REPLACE_USER = `
    INSERT OR REPLACE INTO users (id, name, lastname, photo_uri) VALUES (1, ?, ?, ?);
`;