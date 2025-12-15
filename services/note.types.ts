export interface User {
  id: number;
  name: string;
  lastname: string;
}

export interface UserInput {
  name: string;
  lastname: string;
}


export interface INote {
  id: number; 
  title: string;
  content: string;
  timestamp: number; 
}

export interface NoteInput {
  id?: number | null; 
  title: string;
  content: string;
}