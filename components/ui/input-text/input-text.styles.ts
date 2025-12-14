import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.background,
    borderColor: Colors.tabIconDefault,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    height: 50,
  },
  input: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderRadius: 8,
    borderWidth: 0,
    color: Colors.text,
    fontSize: 16,
    paddingHorizontal: 16,
  },
  inputWithIconPadding: {
    flex: 1,
  },
  iconContainer: {
    height: "100%",
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
