import { ColorOpacity, Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
    },
    containerContent: {
        padding: 16,
        alignItems: 'center',
    },
    closeIcon: {
        position: 'relative',
        top: 20,
        left: 8,
        alignSelf: 'flex-end',
        zIndex: 1,
    },
    modalView: {
        borderWidth: 4,
        borderColor: ColorOpacity(Colors.mainColor, 80),
        backgroundColor: Colors.whiteColor,
        maxHeight: '70%',
        minWidth: '100%',
        borderRadius: 16,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
});