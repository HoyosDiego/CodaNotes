import { INote, UserInput } from "@/services";
import { useRouter } from "expo-router";

const router = useRouter();

export const handleGoToAddNotes = () => {
    router.push("/add-notes-screen");
};

export const handleGoToViewNote = () => {
    router.push("/view-notes-screen");
};

export const handleLongPressNote = (note: INote) => {
    return note;
};

export const handleUserChange = (newInfo: UserInput, userPhoto: string | undefined) => {
    return { ...newInfo, photo_uri: userPhoto || '' }
};
