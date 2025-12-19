import { Colors } from "@/constants";
import { UserInput } from "@/services";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { InputText } from "../ui";
import { styles } from "./modal-register-user.styles";
import { UserModalProps } from "./modal-register.types";


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
