import { Button } from "@/components/ui/button/button";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./header-new-note.style";

export function HeaderNewNote() {
  const router = useRouter();
  const textColor = useThemeColor({}, "text");

  return (
    <View style={styles.header}>
      <Button
        onPress={() => router.back()}
        variant="ghost"
        style={styles.button}
      >
        <Ionicons name="arrow-back" size={24} color={textColor} />
      </Button>
      <Text style={[styles.headerTitle, { color: textColor }]}>Nueva Nota</Text>
      <View style={{ width: 24 }} />
    </View>
  );
}
