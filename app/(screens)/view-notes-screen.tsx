import { IconsPatron } from "@/components/icons-patron";
import { HeaderNewNote } from "@/components/new-note";
import { selectedNoteAtom } from "@/state";
import { useAtomValue } from "jotai";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ViewNotesScreen() {
    const selectedNote = useAtomValue(selectedNoteAtom);
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 30 }}>
            <HeaderNewNote titleNote={selectedNote?.title || 'Nota'} />
            <IconsPatron uri={selectedNote?.photo_uri || ''}
                stylesContent={{ flex: 1, width: '100%' }} >
                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>
                    {selectedNote?.content}
                </Text>
            </IconsPatron>
        </SafeAreaView>
    );
}