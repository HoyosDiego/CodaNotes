import { INote } from '@/services';
import { atom } from 'jotai';

export const isDbLoadedAtom = atom<boolean>(false);
export const selectedNoteAtom = atom<INote | null>(null);