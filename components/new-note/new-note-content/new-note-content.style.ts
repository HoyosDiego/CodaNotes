import { ColorOpacity, Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    rowGap: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
  },
  headerContainer: {
    flex: 0.8,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  inputTitle: {
    borderRadius: 12,
    borderColor: ColorOpacity(Colors.mainColor, 30),
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

  saveButton: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: Colors.mainColor,
    borderRadius: 35,
    columnGap: 10,
    flexDirection: "row",
    height: 55,
    justifyContent: "center",
    width: "80%",
  },
  saveButtonText: {
    color: Colors.whiteColor,
    fontSize: 24,
    fontWeight: "bold",
  },
  styleInputText: {
    fontWeight: "800",
    fontSize: 14,
  },
  textArea: {
    borderRadius: 12,
    flex: 1,
    borderColor: ColorOpacity(Colors.mainColor, 30),
    paddingTop: 12,
  },
});
