import { User, UserInput } from "@/services";
import { selectedNoteAtom, userAtom } from "@/state";
import { useAtomValue, useSetAtom } from "jotai";
import { useCallback, useState } from "react";
import { useAppDB } from "./useAppDB";

export const useHome = () => {
    const { saveUserToDb, updatePhotoNoteToDb, updateUserToDb, } = useAppDB();
    const [userPhoto, setUserPhoto] = useState<string | null>(null); // Para guardar la foto tomada
    const setSelectedNote = useSetAtom(selectedNoteAtom);
    const selectedNote = useAtomValue(selectedNoteAtom);
    const setUser = useSetAtom(userAtom);
    const user = useAtomValue(userAtom);

    const [userInfo, setUserInfo] = useState<UserInput>({
        name: "",
        lastname: "",
        photo_uri: ""
    });

    const handleSaveData = useCallback(async () => {
        try {
            await saveUserToDb(userInfo);
        } catch (error) {
            console.error("Error al guardar:", error);
        }
    }, [userInfo, saveUserToDb]);

    const handleUpdateNote = useCallback(async () => {
        try {
            updatePhotoNoteToDb({ id: selectedNote?.id!, photo_uri: userPhoto! });

        } catch (error) {
            console.error("Error while start query for update photo note:", error);
        } finally {
        }
    }, [selectedNote, userPhoto, updatePhotoNoteToDb]);

    const handleUpdateUser = useCallback(async (userToUpdate: UserInput) => {
        try {
            await updateUserToDb(userToUpdate);
            setUser({ id: 1, ...userToUpdate as User });
        } catch (error) {
            console.error("Error al Actualizar:", error);
        }
    }, [saveUserToDb]);

    return {
        selectedNote,
        userInfo,
        setUserInfo,
        userPhoto,
        setUserPhoto,
        handleSaveData,
        handleUpdateNote,
        handleUpdateUser
    }
}