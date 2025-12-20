import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./add-new-note.styles";

interface AddNewNoteProps {
  onPress?: () => void;
}

export default function AddNewNote({ onPress }: AddNewNoteProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </Pressable>
  );
}
