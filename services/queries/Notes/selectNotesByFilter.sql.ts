export const SELECT_NOTES_BY_FILTER = `
    SELECT id, title, content, bgcolor, photo_uri FROM notes WHERE title LIKE '%' || $1 || '%';
`;