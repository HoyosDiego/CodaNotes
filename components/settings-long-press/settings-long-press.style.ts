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
    modalText: {
        fontSize: 16,
        fontWeight: '900',
        color: '#000',
        marginBottom: 20,
        textAlign: 'center',
    },

    saveButton: {
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