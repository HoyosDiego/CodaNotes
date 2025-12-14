import { Colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    StyleProp,
    StyleSheet,
    TextInput,
    TextInputProps,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native";

interface ITextInputProps extends TextInputProps {
  showIconSearch?: boolean;
  onSearchPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export function InputText({
  containerStyle,
  onSearchPress,
  showIconSearch = true,
  style,
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

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.background,
    borderColor: Colors.tabIconDefault,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    height: 50,
  },
  input: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderRadius: 8,
    borderWidth: 0,
    color: Colors.text,
    fontSize: 16,
    paddingHorizontal: 16,
  },
  inputWithIconPadding: {
    flex: 1,
  },
  iconContainer: {
    height: "100%",
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
