import { Colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React, { memo } from "react";
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
  showIconSearch?: boolean;
  onSearchPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  onChangeText?: (text: string) => void;
}

export function InputText({
  containerStyle,
  onSearchPress,
  showIconSearch = true,
  style,
  onChangeText,
  ...rest
}: ITextInputProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[
          styles.input,
          style,
          showIconSearch && styles.inputWithIconPadding,
        ]}
        placeholderTextColor={Colors.icon}
        autoCapitalize="none"
        placeholder="Buscar"
        onChangeText={onChangeText}
        {...rest}
      />
      {showIconSearch && (
        <TouchableOpacity style={styles.iconContainer} onPress={onSearchPress}>
          <Ionicons name="search" size={24} color={Colors.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default memo(InputText);
