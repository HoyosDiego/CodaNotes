import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardColor: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: Colors.mainColor,
    borderRadius: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 25,
    justifyContent: "center",
    maxHeight: 128,
    paddingHorizontal: 25,
    width: "100%",
  },
  cardColorText: {
    fontSize: 14,
    fontWeight: "600",
  },
  footerContainer: {
    height: 128,
    marginBottom: 22
  },
});
