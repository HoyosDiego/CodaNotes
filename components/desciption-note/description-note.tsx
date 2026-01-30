import { ColorOpacity, Colors } from "@/constants";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Card } from "../ui";
import { DescriptionNoteProps } from "./description-note.type";

export default function DescriptionNote({
  items,
  onLongPress
}:
  DescriptionNoteProps
) {
  return (
    <>
      <Pressable onLongPress={onLongPress} >
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
      </Pressable>
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
