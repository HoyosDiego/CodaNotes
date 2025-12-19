import { ColorOpacity, Colors } from "@/constants";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    body: {
        gap: 16,
    },
    btn: {
        height: 56,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    btnSave: {
        backgroundColor: ColorOpacity(Colors.mainColor, 90),
        elevation: 10,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        shadowColor: Colors.blackColor,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.35,
        shadowRadius: 12,
    },
    btnTextSave: {
        color: Colors.whiteColor,
        fontWeight: "700",
        fontSize: 16,
        textTransform: "uppercase",
        letterSpacing: 1.2,
    },
    buttonContainer: {
        marginTop: 10,
    },
    card: {
        backgroundColor: Colors.whiteColor,
        borderRadius: 28,
        elevation: 12,
        maxWidth: 400,
        padding: 24,
        shadowColor: Colors.blackColor,
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 0.15,
        shadowRadius: 20,
        width: "100%",
    },
    customInputContainer: {
        backgroundColor: ColorOpacity(Colors.mainColor, 70),
        borderRadius: 16,
        borderWidth: 0,
        height: 56,
        marginVertical: 10,
        paddingHorizontal: 16,
    },

    customInputText: {
        fontSize: 16,
        color: Colors.whiteColor,
        fontWeight: "500",
        height: "100%",
    },
    header: {
        alignItems: "center",
    },
    keyboardAvoiding: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(30, 41, 59, 0.6)",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    subtitle: {
        fontSize: 14,
        color: Colors.grayColor,
        marginTop: 4,
    },
    title: {
        fontSize: 22,
        fontWeight: "800",
        color: Colors.blackColor,
    },
    topBar: {
        width: 40,
        height: 4,
        backgroundColor: Colors.whiteColor,
        borderRadius: 2,
        marginBottom: 20,
    },
});
