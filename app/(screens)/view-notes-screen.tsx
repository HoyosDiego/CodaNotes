import { IconsPatron } from "@/components/icons-patron";
import { HeaderNewNote } from "@/components/new-note";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ViewNotesScreen() {

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 30 }}>
            <HeaderNewNote />
            <IconsPatron uri={'file:///data/user/0/com.dfhoyos29gmail.com.codanotes/cache/Camera/02f326f6-9277-422f-9e37-accce281f793.jpg'}
                stylesContent={{ flex: 1, width: '100%' }} />
        </SafeAreaView>
    );
}