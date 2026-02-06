export interface INote {
  id: number;
  title: string;
  content: string;
  bgcolor: string;
  timestamp?: Date | number;
  photo_uri?: string | null;
}

export interface NoteInput {
  id?: number | null;
  title: string;
  bgcolor: string;
  content: string;
  timestamp?: Date | number;
  photo_uri?: string | null;
}