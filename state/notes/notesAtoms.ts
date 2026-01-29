import { INote } from '@/services';
import { atom } from 'jotai';

export const notesListAtom = atom<INote[]>([]);
export const totalNotesCountAtom = atom<number>(0);