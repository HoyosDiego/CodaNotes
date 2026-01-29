import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerCard: {
    alignSelf: "center",
    backgroundColor: Colors.mainColor,
    borderRadius: 8,
    elevation: 8,
    flex: 1,
    flexDirection: "row",
    height: 180,
    opacity: 0.8,
    paddingHorizontal: 14,
    shadowColor: Colors.grayColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    width: "100%",
  },
  checkmark: {
    marginBottom: 2,
  },
  containerCards: {
    flex: 1,
    rowGap: 20,
  },
  firstContainer: {
    flex: 0.8,
  },
  imageContainer: {
    backgroundColor: Colors.whiteColor,
    borderColor: Colors.greenColor,
    borderRadius: 50,
    borderWidth: 2,
    height: 60,
    marginTop: 10,
    width: 60,
  },
  nameStyle: {
    flex: 0.2,
    fontSize: 24,
    color: Colors.whiteColor,
    fontWeight: "800",
    marginTop: 10,
  },
  notesContainer: {
    flex: 0.8,
    justifyContent: "flex-end",
    marginBottom: 14,
  },
  notesText: {
    color: Colors.whiteColor,
    fontSize: 11,
    fontWeight: "700",
  },
  photoStyle: {
    height: 55,
    width: "100%",
    borderRadius: 50,
    resizeMode: "cover"
  },
  qtyNotes: {
    color: Colors.whiteColor,
    fontSize: 16,
    fontWeight: "700",
  },
  qtyNotesContainer: {
    alignItems: "flex-end",
    flexDirection: "row",
    columnGap: 4,
  },
  separatorSettings: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  settingsContainer: {
    flex: 0.2,
    alignItems: "flex-end",
    flexDirection: "column",
  },
  settingsIcon: {
    alignItems: "flex-end",
    marginBottom: 10,
  }
});
