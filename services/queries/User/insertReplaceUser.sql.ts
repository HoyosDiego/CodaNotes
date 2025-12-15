export const INSERT_REPLACE_USER = `
    INSERT OR REPLACE INTO users (id, name, lastname) VALUES (1, ?, ?);
`;