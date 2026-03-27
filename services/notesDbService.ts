import * as SQLite from "expo-sqlite";
import { ALL_CREATION_QUERIES } from "./create-table";
import { INote, IUpdatePhotoNotes, NoteInput, } from "./note.types";
import {
  INSERT_REPLACE_NOTE,
  INSERT_REPLACE_USER,
  SELECT_ALL_NOTES,
  SELECT_USER_BY_ID,
  UPDATE_PHOTO_NOTE,
} from "./queries";
import { SELECT_NOTES_BY_FILTER } from "./queries/Notes/selectNotesByFilter.sql";
import { UPDATE_USER } from "./queries/User/updateUser.sql";
import { User, UserInput } from "./user.types";

let db: SQLite.SQLiteDatabase | null = null;

export const initDB = async (): Promise<void> => {
  try {
    db = await SQLite.openDatabaseAsync("coda_notes");
    const creationSql = ALL_CREATION_QUERIES.join("\n");

    await db.execAsync(`
        PRAGMA journal_mode = WAL;
        ${creationSql} 
    `);
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error);
    throw error;
  }
};

export const fetchNotes = async (limit: number = 1000, offset: number = 0): Promise<INote[]> => {
  if (!db) throw new Error("Database not initialized. Call initDB first.");

  const notes = await db.getAllAsync<INote>(
    "SELECT * FROM notes ORDER BY timestamp ASC LIMIT ? OFFSET ?;",
    [limit, offset]
  );

  return notes;
};

export const countAllNotes = async (): Promise<number> => {
  if (!db) throw new Error("Database not initialized. Call initDB first.");

  const result = await db.getAllAsync<{ "COUNT(*)": number }>(
    "SELECT COUNT(*) FROM notes;"
  );

  const allNotes = result[0]["COUNT(*)"] || 0

  return allNotes;
};


export const saveNote = async (note: NoteInput): Promise<number> => {
  if (!db) throw new Error("Database not initialized. Call initDB first.");

  const idToUse = note.id ?? null;

  const result = await db.runAsync(
    INSERT_REPLACE_NOTE,
    idToUse,
    note.title,
    note.content,
    note.bgcolor,
    Date.now(),
  );

  const finalId = result.lastInsertRowId || (note.id as number);

  return finalId;
};

export const saveUser = async (user: UserInput): Promise<void> => {
  if (!db) throw new Error("Database not initialized. Call initDB first.");

  const { name, lastname, photo_uri } = user;

  await db.runAsync(INSERT_REPLACE_USER, name, lastname, photo_uri ?? '');
};

export const getUser = async (): Promise<User | null> => {
  if (!db) throw new Error("Database not initialized. Call initDB first.");

  const row = await db.getFirstAsync<User>(SELECT_USER_BY_ID);

  if (!row) return null;
  const userObject: User = {
    id: row.id,
    name: row.name,
    lastname: row.lastname,
    photo_uri: row.photo_uri
  };

  return userObject;
};

export const getNotes = async (): Promise<INote | null> => {
  if (!db) throw new Error("Database not initialized. Call initDB first.");

  const row = await db.getFirstAsync<INote>(SELECT_ALL_NOTES);

  if (!row) return null;
  const notesObject: INote = {
    id: row.id,
    title: row.title,
    bgcolor: row.bgcolor,
    content: row.content,
    photo_uri: row?.photo_uri || '',
  };

  return notesObject;
};

export const updatePhotoNote = async (note: IUpdatePhotoNotes): Promise<number> => {
  if (!db) throw new Error("Database not initialized. Call initDB first.");

  const { id, photo_uri } = note;

  const result = await db.runAsync(UPDATE_PHOTO_NOTE, photo_uri ?? '', id);

  const finalId = result.lastInsertRowId || (note.id as number);

  return finalId;
};

export const updateUser = async (user: UserInput): Promise<void> => {
  if (!db) throw new Error("Database not initialized. Call initDB first.");

  const { name, lastname, photo_uri } = user;

  await db.runAsync(UPDATE_USER, name, lastname, photo_uri ?? '');
};

export const selectNotesByFilter = async (searchText: string): Promise<INote[]> => {
  if (!db) throw new Error("Database not initialized. Call initDB first.");

  const notes = await db.getAllAsync<INote>(SELECT_NOTES_BY_FILTER, [searchText]);

  return notes;
};

export const userDB = {
  saveUser,
  getUser,
  updatePhotoNote,
  selectNotesByFilter
};
