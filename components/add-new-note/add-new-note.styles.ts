import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.mainColor,
    borderRadius: 25,
    bottom: 80,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    right: 30,
    width: 50,
    zIndex: 1,
  },
  text: {
    color: Colors.whiteColor,
    fontSize: 40,
    lineHeight: 30,
    marginTop: 10,
  },
});