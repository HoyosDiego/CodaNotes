import { User } from '@/services';
import { atom } from 'jotai';

export const userAtom = atom<User | null>(null);

export const userFullNameAtom = atom((get) => {
    const user = get(userAtom);
    if (!user) return 'Invitado';
    return `${user.name} ${user.lastname}`;
});