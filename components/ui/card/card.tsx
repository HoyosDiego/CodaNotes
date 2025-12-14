import React, { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface ICardProps {
  className?: StyleProp<ViewStyle>;
}

export const Card = ({
  className,
  children,
}: PropsWithChildren<ICardProps>) => { 
  return <View style={[{ ...styles.container }, className]}>{children}</View>;
};

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    borderRadius: 8,
  },
});
