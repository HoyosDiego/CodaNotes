import * as SQLite from "expo-sqlite";
import { ALL_CREATION_QUERIES } from "./create-table";
import { INote, NoteInput, User, UserInput } from "./note.types";
import {
  INSERT_REPLACE_NOTE,
  INSERT_REPLACE_USER,
  SELECT_ALL_NOTES,
  SELECT_USER_BY_ID,
} from "./queries";

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

export const fetchNotes = async (): Promise<INote[]> => {
  if (!db) throw new Error("Database not initialized. Call initDB first.");

  const notes = await db.getAllAsync<INote>(
    "SELECT * FROM notes ORDER BY timestamp DESC;",
  );

  return notes;
};

export const saveNote = async (note: NoteInput): Promise<number> => {
  if (!db) throw new Error("Database not initialized. Call initDB first.");

  const idToUse = note.id ?? null;

  const result = await db.runAsync(
    INSERT_REPLACE_NOTE,
    idToUse,
    note.title,
    note.content,
    Date.now(),
  );

  const finalId = result.lastInsertRowId || (note.id as number);

  return finalId;
};

export const saveUser = async (user: UserInput): Promise<void> => {
  if (!db) throw new Error("Database not initialized. Call initDB first.");

  await db.runAsync(INSERT_REPLACE_USER, user.name, user.lastname);
};

export const getUser = async (): Promise<User | null> => {
  if (!db) throw new Error("Database not initialized. Call initDB first.");

  const row = await db.getFirstAsync<User>(SELECT_USER_BY_ID);

  if (!row) return null;
  const userObject: User = {
    id: row.id,
    name: row.name,
    lastname: row.lastname,
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
    content: row.content,
    timestamp: row.timestamp,
  };

  return notesObject;
};

export const userDB = {
  saveUser,
  getUser,
};
