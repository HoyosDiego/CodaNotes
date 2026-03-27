import { KeyboardAvoidingView, Platform, View } from "react-native";
import { HeaderNewNote } from "../new-note";

export default function ViewNotes() {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <HeaderNewNote />
            <View>

            </View>
        </KeyboardAvoidingView>
    );
}