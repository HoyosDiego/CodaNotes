

import { ColorOpacity, Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // Modal styles
    modalContent: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        width: '100%',
    },
    modalHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalSubTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
        marginBottom: 20,
        textAlign: 'center',
    },
    saveButton: {
        backgroundColor: Colors.redColor,
        borderRadius: 30,
        width: 253,
        height: 51,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    customInputText: {
        fontSize: 16,
        color: Colors.blackColor,
        fontWeight: "600",
        height: "100%",
    },
    customInputContainer: {
        borderColor: ColorOpacity(Colors.mainColor, 70),
        borderRadius: 50,
        borderWidth: 1,
        width: '90%',
        height: 46,
        marginVertical: 10,
        paddingHorizontal: 16,
    },
    label: {
        backgroundColor: Colors.mainColor,
        borderRadius: 10,
        color: Colors.whiteColor,
        fontSize: 14,
        fontWeight: "800",
        height: 22,
        lineHeight: 22,
        marginBottom: -20,
        marginLeft: 5,
        maxWidth: 125,
        paddingLeft: 12,
        textAlignVertical: "center",
        zIndex: 1,
    },
    labelPhoto: {
        width: 90,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    }
});