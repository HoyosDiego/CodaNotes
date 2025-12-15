import { INote } from '@/services';
import { atom } from 'jotai';

export const notesListAtom = atom<INote[]>([]);