import { INote } from "@/services";

export interface DescriptionNoteProps {
    items?: INote;
    onLongPress?: () => void;
}