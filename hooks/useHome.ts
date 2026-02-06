import { UserInput } from "@/services";
import { selectedNoteAtom } from "@/state";
import { useAtomValue, useSetAtom } from "jotai";
import { useCallback, useState } from "react";
import { useAppDB } from "./useAppDB";

export const useHome = () => {
    const { saveUserToDb } = useAppDB();
    const [userPhoto, setUserPhoto] = useState<string | null>(null); // Para guardar la foto tomada
    const setSelectedNote = useSetAtom(selectedNoteAtom);
    const selectedNote = useAtomValue(selectedNoteAtom);

    const [userInfo, setUser] = useState<UserInput>({
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

    return {
        selectedNote,
        userInfo,
        setUser,
        userPhoto,
        setUserPhoto,
        handleSaveData,
    }
}