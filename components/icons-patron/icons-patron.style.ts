import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerIcons: {

        alignSelf: 'center',
        marginVertical: 20,
        borderWidth: 2,
        borderRadius: 8,
        overflow: 'hidden',
    },
    container: {
        width: 282,
        height: 400,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "flex-start",
        overflow: "hidden",
        borderColor: Colors.mainColor,
    },
    image: {
        opacity: 0.2,
    }
});