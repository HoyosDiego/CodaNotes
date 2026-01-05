import React from "react";
import { Text } from "react-native";
import { Button } from "../ui/button/button";
import { styles } from "./add-new-note.styles";

interface AddNewNoteProps {
  onPress?: () => void;
}

export default function AddNewNote({ onPress }: AddNewNoteProps) {
  return (
    <Button style={styles.container} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </Button>
  );
}
