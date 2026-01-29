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
  bgcolor: string;
  timestamp?: Date | number; 
}

export interface NoteInput {
  id?: number | null; 
  title: string;
  bgcolor: string;
  content: string;
  timestamp?: Date | number; 
}