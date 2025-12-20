import { useThemeColor } from "@/hooks/use-theme-color";
import React, { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function NewNote({ children }: PropsWithChildren) {
  const insets = useSafeAreaInsets();
  const backgroundColor = useThemeColor({}, "background");

  return (
    <View
      style={[styles.container, { backgroundColor, paddingTop: insets.top }]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 30 },
});
