import { countAllNotes, fetchNotes, getUser, initDB, INote, IUpdatePhotoNotes, NoteInput, saveNote, saveUser, selectNotesByFilter, updatePhotoNote, updateUser, User, UserInput } from '@/services';
import { isDbLoadedAtom, notesListAtom, totalNotesCountAtom, userAtom } from '@/state';
import { useAtomValue, useSetAtom } from 'jotai';
import { useCallback, useEffect } from 'react';

export const useAppDB = () => {
    const setNotesList = useSetAtom(notesListAtom);
    const setCountNotes = useSetAtom(totalNotesCountAtom);
    const setUser = useSetAtom(userAtom);
    const user = useAtomValue(userAtom);
    const setIsDbLoaded = useSetAtom(isDbLoadedAtom);

    const actionAllNotes = useCallback(async () => {
        const [allNotes, notes] = await Promise.all([
            countAllNotes(),
            fetchNotes(),
        ]);
        setCountNotes(allNotes);
        setNotesList(notes);
    }, [setNotesList, setCountNotes]);

    useEffect(() => {
        const loadInitialData = async () => {
            try {
                await initDB();

                const [userData] = await Promise.all([
                    getUser(),
                ]);

                actionAllNotes();
                setUser(userData);
            } catch (error) {
                console.error("Error while start query for user:", error);
            } finally {
                setIsDbLoaded(true);
            }
        };

        if (!user) {
            loadInitialData();
        }
    }, [setUser, setIsDbLoaded]);

    const saveUserToDb = useCallback(async (userInput: UserInput) => {
        await saveUser(userInput);

        const updatedUser: User = {
            id: 1,
            ...userInput
        } as User;

        setUser(updatedUser);
        return updatedUser;

    }, [setUser]);


    const saveNoteToDb = useCallback(async (noteObject: NoteInput): Promise<INote> => {
        const finalId = await saveNote(noteObject);

        const updatedNote: INote = {
            ...noteObject,
            id: finalId,
            timestamp: Date.now()
        } as INote;

        setNotesList(prevNotes => {
            const existingIndex = prevNotes.findIndex(n => n.id === finalId);

            if (existingIndex > -1) {
                const newNotes = [...prevNotes];
                newNotes[existingIndex] = updatedNote;
                return newNotes;
            } else {
                return [updatedNote, ...prevNotes];
            }
        });

        actionAllNotes();

        return updatedNote;
    }, [setNotesList]);

    const updatePhotoNoteToDb = useCallback(async (noteObject: IUpdatePhotoNotes): Promise<IUpdatePhotoNotes> => {

        const finalId = await updatePhotoNote(noteObject);

        const updatedNote: IUpdatePhotoNotes = {
            id: finalId!,
            photo_uri: noteObject.photo_uri
        } as IUpdatePhotoNotes;

        setNotesList(prevNotes => {
            const existingIndex = prevNotes.findIndex(n => n.id === finalId);

            if (existingIndex > -1) {
                prevNotes[existingIndex].photo_uri = updatedNote.photo_uri;
                return prevNotes;
            } else {
                return [updatedNote, ...prevNotes];
            }
        });
        actionAllNotes();
        return updatedNote
    }, [setNotesList]);

    const updateUserToDb = async (user: UserInput) => {
        await updateUser(user);
    };

    const selectNotesByFilterTodb = async (searchText: string) => {
        const notes = await selectNotesByFilter(searchText);
        setNotesList(notes);
    };

    return {
        saveUserToDb,
        saveNoteToDb,
        updatePhotoNoteToDb,
        updateUserToDb,
        selectNotesByFilterTodb
    };
};