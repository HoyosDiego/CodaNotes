import { ColorOpacity, Colors } from "@/constants";
import React, { forwardRef, memo, ReactNode } from "react";
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import styles from "./input-text.styles";

interface ITextInputProps extends TextInputProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onRightIconPress?: () => void;
  onLeftIconPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export const InputText = forwardRef<TextInput, ITextInputProps>(
  (
    {
      containerStyle,
      leftIcon,
      rightIcon,
      onRightIconPress,
      onLeftIconPress,
      style,
      ...rest
    },
    ref,
  ) => {
    const renderIcon = (icon: ReactNode, onPress?: () => void) => {
      if (!icon) return null;

      return (
        <TouchableOpacity
          disabled={!onPress}
          style={styles.iconContainer}
          onPress={onPress}
        >
          {icon}
        </TouchableOpacity>
      );
    };

    return (
      <View style={[styles.container, containerStyle]}>
        {renderIcon(leftIcon, onLeftIconPress)}

        <TextInput
          ref={ref}
          style={[styles.input, style]}
          placeholderTextColor={ColorOpacity(Colors.blackColor, 50)}
          autoCapitalize="none"
          {...rest}
        />

        {renderIcon(rightIcon, onRightIconPress)}
      </View>
    );
  },
);

// --- SOLUCIÓN AL ERROR DE ESLINT ---
InputText.displayName = "InputText";

export default memo(InputText);
