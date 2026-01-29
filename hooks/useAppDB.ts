import { countAllNotes, fetchNotes, getUser, initDB, INote, NoteInput, saveNote, saveUser, User, UserInput } from '@/services';
import { isDbLoadedAtom, notesListAtom, totalNotesCountAtom, userAtom } from '@/state';
import { useSetAtom } from 'jotai';
import { useCallback, useEffect } from 'react';

export const useAppDB = () => {
    const setNotesList = useSetAtom(notesListAtom);
    const setCountNotes = useSetAtom(totalNotesCountAtom);
    const setUser = useSetAtom(userAtom);
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

                const [user] = await Promise.all([
                    getUser(),
                ]);

                actionAllNotes();
                setUser(user);

            } catch (error) {
                console.error("Error while start query for user:", error);
            } finally {
                setIsDbLoaded(true);
            }
        };

        loadInitialData();
    }, [setNotesList, setUser, setIsDbLoaded]);



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


    return {
        saveUserToDb,
        saveNoteToDb,
    };
};