import type { PropsWithChildren } from "react";
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from "react-native";

import { useThemeColor } from "../hooks/use-theme-color";
import { ThemedView } from "./themed-view";

type Props = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

export default function ThemedScrollContainer({ children, style }: Props) {
  const backgroundColor = useThemeColor({}, "background");

  return (
    <ScrollView
      style={[
        {
          flex: 1,
          backgroundColor,
        },
        style,
      ]}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
    >
      <ThemedView style={styles.content}>{children}</ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 30,
    flex: 1,
  },
});
