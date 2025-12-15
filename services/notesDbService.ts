import * as SQLite from "expo-sqlite";
import { User, UserInput } from "./note.types";

let db: SQLite.SQLiteDatabase | null = null;

export const initDB = async (): Promise<void> => {
  try {
    db = await SQLite.openDatabaseAsync("coda_notes");

    await db.execAsync(`
            PRAGMA journal_mode = WAL;
            
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY DEFAULT 1, 
                name TEXT NOT NULL, 
                lastname TEXT NOT NULL
            );
        `);
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error);
    throw error;
  }
};

export const saveUser = async (user: UserInput): Promise<void> => {
  if (!db) throw new Error("Database not initialized. Call initDB first.");

  await db.runAsync(
    `INSERT OR REPLACE INTO users (id, name, lastname) VALUES (1, ?, ?);`,
    user.name,
    user.lastname,
  );
};

export const getUser = async (): Promise<User | null> => {
  if (!db) throw new Error("Database not initialized. Call initDB first.");

  const row = await db.getFirstAsync<User>("SELECT * FROM users WHERE id = 1;");

  if (!row) return null;
  const userObject: User = {
    id: row.id,
    name: row.name,
    lastname: row.lastname,
  };

  return userObject;
};

export const userDB = {
  saveUser,
  getUser,
};
