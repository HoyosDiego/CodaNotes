import { NoteInput } from "@/services";

export interface INewNoteContentProps {
  setNote: (input: NoteInput) => void;
  note: NoteInput;
  opacityButtonColor: string;
  onPress: () => void;
}