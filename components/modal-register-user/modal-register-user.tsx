import { ColorOpacity, Colors } from "@/constants";
import { UserInput } from "@/services";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { InputText } from "../ui";

interface UserModalProps {
  userInformation: UserInput;
  onchangeUser: (user: UserInput) => void;
  onSave: () => void;
}

export const UserModal: React.FC<UserModalProps> = ({
  userInformation,
  onchangeUser,
  onSave,
}) => {
  const { name, lastname } = userInformation;
  const lastnameRef = useRef<TextInput>(null);
  const handleTextChange = (field: keyof UserInput, value: string) => {
    onchangeUser({
      ...userInformation,
      [field]: value,
    });
  };

  return (
    <Modal animationType="slide" transparent={true} statusBarTranslucent>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoiding}
      >
        <Pressable style={styles.overlay}>
          <Pressable style={styles.card} onPress={(e) => e.stopPropagation()}>
            <View style={styles.header}>
              <View style={styles.topBar} />
              <Text style={styles.title}>Registro de Usuario</Text>
              <Text style={styles.subtitle}>
                Ingresa la información requerida
              </Text>
            </View>

            <InputText
              returnKeyType="next"
              onSubmitEditing={() => lastnameRef.current?.focus()}
              containerStyle={styles.customInputContainer}
              leftIcon={
                <Ionicons
                  name="person-outline"
                  size={20}
                  color={Colors.whiteColor}
                />
              }
              placeholder="Nombre"
              defaultValue={name}
              blurOnSubmit={false}
              onChangeText={(val) => handleTextChange("name", val)}
              placeholderTextColor={Colors.whiteColor}
              style={styles.customInputText}
            />

            <InputText
              containerStyle={styles.customInputContainer}
              leftIcon={
                <Ionicons
                  name="id-card-outline"
                  size={20}
                  color={Colors.whiteColor}
                />
              }
              placeholder="Apellido"
              defaultValue={lastname}
              onChangeText={(val) => handleTextChange("lastname", val)}
              placeholderTextColor={Colors.whiteColor}
              style={styles.customInputText}
              ref={lastnameRef}
              returnKeyType="done"
            />

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.btn, styles.btnSave]}
                onPress={onSave}
              >
                <Text style={styles.btnTextSave}>Guardar Datos</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  body: {
    gap: 16,
  },
  btn: {
    height: 56,
    borderRadius: 16,
    backgroundColor: 'transparent',
    justifyContent: "center",
    alignItems: "center",
  },
  btnSave: {
    backgroundColor: ColorOpacity(Colors.mainColor, 90),
    overflow: "visible",
    shadowColor: Colors.blackColor,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,
  },
  btnTextSave: {
    color: Colors.whiteColor,
    fontWeight: "700",
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  buttonContainer: {
    marginTop: 10,
  },
  card: {
    backgroundColor: Colors.whiteColor,
    borderRadius: 28,
    elevation: 12,
    maxWidth: 400,
    padding: 24,
    shadowColor: Colors.blackColor,
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    width: "100%",
  },
  customInputContainer: {
    backgroundColor: ColorOpacity(Colors.mainColor, 70),
    borderRadius: 16,
    borderWidth: 0,
    height: 56,
    marginVertical: 10,
    paddingHorizontal: 16,
  },

  customInputText: {
    fontSize: 16,
    color: Colors.whiteColor,
    fontWeight: "500",
    height: "100%",
  },
  header: {
    alignItems: "center",
  },
  keyboardAvoiding: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(30, 41, 59, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.grayColor,
    marginTop: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: Colors.blackColor,
  },
  topBar: {
    width: 40,
    height: 4,
    backgroundColor: Colors.whiteColor,
    borderRadius: 2,
    marginBottom: 20,
  },
});
