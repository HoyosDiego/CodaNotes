import { ColorOpacity, Colors } from "@/constants";
import React, { forwardRef } from "react";
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";

interface ButtonProps {
  label?: string;
  onPress?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  isLoading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button = forwardRef<View, ButtonProps>(
  (
    {
      label,
      onPress,
      leftIcon,
      rightIcon,
      children,
      variant = "primary",
      isLoading = false,
      disabled = false,
      style,
      textStyle,
    },
    ref,
  ) => {
    const getVariantStyle = () => {
      switch (variant) {
        case "secondary":
          return { backgroundColor: ColorOpacity(Colors.mainColor, 15) };
        case "outline":
          return {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: Colors.mainColor,
          };
        case "ghost":
          return { backgroundColor: "transparent" };
        default:
          return { backgroundColor: Colors.mainColor };
      }
    };

    const getTextColor = () => {
      if (variant === "primary") return Colors.whiteColor;
      return Colors.mainColor;
    };

    return (
      <TouchableOpacity
        ref={ref}
        onPress={onPress}
        disabled={disabled || isLoading}
        activeOpacity={0.7}
        style={[
          styles.base,
          getVariantStyle(),
          disabled && styles.disabled,
          style,
        ]}
      >
        {isLoading ? (
          <ActivityIndicator color={getTextColor()} />
        ) : (
          <View style={styles.content}>
            {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
            {children || (
              <Text style={[styles.text, { color: getTextColor() }, textStyle]}>
                {label}
              </Text>
            )}
            {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
          </View>
        )}
      </TouchableOpacity>
    );
  },
);

Button.displayName = "Button";

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    borderRadius: 16,
    height: 52,
    justifyContent: "center",
    width: "100%",
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    opacity: 0.5,
  },
  iconLeft: { marginRight: 10 },
  iconRight: { marginLeft: 10 },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
