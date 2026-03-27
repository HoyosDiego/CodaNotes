import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        width: 282,
        height: 341,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "flex-start",
        overflow: "hidden",
        borderColor: Colors.mainColor,
        borderWidth: 2,
        borderRadius: 8,
        marginVertical: 20,
    },
    image: {
        opacity: 0.2,
    }
});