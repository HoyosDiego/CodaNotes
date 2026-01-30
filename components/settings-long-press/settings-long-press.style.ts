import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    // Modal styles
    modalContent: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    modalHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
    modalSubTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
        marginBottom: 20,
        textAlign: 'center',
    },
    modalText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
        textAlign: 'center',
    },
    emptyStateContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
    },
    emptyStateText: {
        textAlign: 'center',
        color: '#808080',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 20,
        paddingHorizontal: 30,
        lineHeight: 22,
    },
    saveButton: {
        backgroundColor: Colors.mainColor,
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
    strongText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});