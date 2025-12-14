import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerCard: {
    alignSelf: "center",
    backgroundColor: Colors.mainColor,
    borderRadius: 8,
    elevation: 8,
    flex: 1,
    height: 180,
    opacity: 0.8,
    paddingHorizontal: 20,
    shadowColor: Colors.grayColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 6,

    width: "100%",
  },
  containerCards: {
    flex: 1,
    flexDirection: "column",
    rowGap: 20,
  },
  contentCard: {
    flexDirection: "row",
  },
  firstContainer: {
    flex: 0.8,
    marginVertical: 20,
  },
  imageContainer: {
    backgroundColor: Colors.whiteColor,
    borderColor: Colors.greenColor,
    borderRadius: 50,
    borderWidth: 2,
    height: 60,
    justifyContent: "center",
    lineHeight: 60,
    width: 60,
  },
  imageStyles: {
    height: 60,
    width: 60,
  },
  nameStyle: {
    fontSize: 24,
    color: Colors.whiteColor,
    fontWeight: "800",
    width: "80%",
  },
  points: {
    color: Colors.whiteColor,
    fontSize: 16,
    fontWeight: "700",
  },
  pointsContainer: {
    marginTop: 40,
  },
  pointsText: {
    color: Colors.whiteColor,
    fontSize: 11,
    fontWeight: "700",
  },
  secondContainer: {
    flex: 0.2,
    alignItems: "flex-end",
  },
});
