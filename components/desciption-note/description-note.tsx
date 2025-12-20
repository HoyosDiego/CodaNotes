import { ColorOpacity, Colors } from "@/constants";
import { INote } from "@/services";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "../ui";

export default function DescriptionNote({ items }: { items?: INote }) {
  return (
    <>
      <Card
        className={[styles.containerTitle, { backgroundColor: items?.bgcolor }]}
      >
        <Text style={styles.titleText} numberOfLines={1}>
          {items?.title}
        </Text>
      </Card>
      <Card
        className={[
          styles.containerDescription,
          {
            backgroundColor: ColorOpacity(
              items?.bgcolor || Colors.mainColor,
              20,
            ),
          },
        ]}
      >
        <Text>{items?.content}</Text>
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
