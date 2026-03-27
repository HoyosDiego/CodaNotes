import React from "react";
import { Text } from "react-native";
import { Button } from "../ui/button/button";
import { styles } from "./add-new-note.styles";

interface AddNewNoteProps {
  isDisabled?: boolean;
  onPress?: () => void;
}

export default function AddNewNote({ onPress, isDisabled }: AddNewNoteProps) {
  return (
    <Button style={{
      ...styles.container, opacity: isDisabled ? 0.5 : 1
    }} onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </Button>
  );
}
