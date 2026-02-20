import { ColorOpacity, Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { flex: 1 },
    containerHome: {
        height: 160,
        paddingHorizontal: 30,
        marginBottom: 20,
    },
    containerNotes: {
        flexDirection: "column",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.whiteColor,
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: Colors.grayColor,
    },
    scrollContainer: {
        paddingTop: 15,
    },
    emptyStateContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
    },
    emptyStateText: {
        textAlign: 'center',
        color: '#797979',
        fontSize: 20,
        fontWeight: '900',
        marginTop: 20,
        paddingHorizontal: 30,
        lineHeight: 30,
    },
    textInputStyle: {
        borderRadius: 50,
        borderColor: ColorOpacity(Colors.mainColor, 50),
        marginHorizontal: 30,
    },

});
