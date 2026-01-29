import React, { PropsWithChildren } from "react";
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

/* Props for activate onPress or onLongPress functions */
interface ICardProps {
  className?: StyleProp<ViewStyle>;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const Card = ({
  className,
  children,
  onPress,
  onLongPress,
}: PropsWithChildren<ICardProps>) => {

  /* If onPress or onLongPress props are provided, use Pressable component */
  const Container = onPress || onLongPress ? Pressable : View;

  return <Container
    style={[{ ...styles.container }, className]}
    onPress={onPress}
    onLongPress={onLongPress}
  >
    {children}
  </Container>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
  },
});
