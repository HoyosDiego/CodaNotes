export const UPDATE_USER = `
    UPDATE users SET
        name = ?,
        lastname = ?,
        photo_uri = ?
    WHERE id = 1;
`;