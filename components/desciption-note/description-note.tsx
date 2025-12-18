import { ColorOpacity, Colors } from "@/constants";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "../ui";

export default function DescriptionNote() {
  return (
    <>
      <Card className={styles.containerTitle}>
        <Text style={styles.titleText}>Nota #</Text>
      </Card>
      <Card className={styles.containerDescription}>
        <Text>DescriptionNote</Text>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  containerTitle: {
    backgroundColor: Colors.mainColor,
    borderRadius: 10,
    height: 18,
    justifyContent: "center",
    left: 12,
    paddingLeft: 10,
    top: 4,
    width: 134,
  },
  containerDescription: {
    backgroundColor: ColorOpacity(Colors.mainColor, 50),
    borderRadius: 15,
    height: 42,
    justifyContent: "center",
    marginBottom: 15,
    padding: 10,
  },
  titleText: {
    color: Colors.whiteColor,
    fontSize: 10,
    fontWeight: "800",
  },
});
