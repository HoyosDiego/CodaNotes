import { ColorOpacity } from "@/constants";
import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { InputText } from "../../ui";
import { Button } from "../../ui/button/button";
import { HeaderNewNote } from "../header-new-note";
import { styles } from "./new-note-content.style";
import { INewNoteContentProps } from "./new-note-content.types";

export function NewNoteContent({ setNote, note, opacityButtonColor, onPress }: INewNoteContentProps) {

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.headerContainer}>
          <HeaderNewNote />
          <ScrollView
            contentContainerStyle={styles.formContainer}
            keyboardShouldPersistTaps="handled" >
            <Text style={[styles.label, { backgroundColor: note.bgcolor }]}>Título</Text>
            <InputText
              placeholder="Dale un nombre a tu nota..."
              value={note.title}
              onChangeText={(text) => setNote({ ...note, title: text })}
              containerStyle={{
                ...styles.inputTitle,
                borderColor: ColorOpacity(note.bgcolor, 80),
              }}
              style={styles.styleInputText}
              maxLength={20}
            />

            <Text style={[styles.label, { backgroundColor: note.bgcolor }]}>Descripción</Text>
            <InputText
              placeholder="Escribe aquí tus ideas..."
              value={note.content}
              onChangeText={(text) => setNote({ ...note, content: text })}
              multiline
              containerStyle={{
                ...styles.textArea,
                borderColor: ColorOpacity(note.bgcolor, 80),
              }}
              style={styles.styleInputText}
              textAlignVertical="top"
            />

            <Button
              style={{ ...styles.saveButton, backgroundColor: opacityButtonColor }}
              onPress={onPress}
            >
              <Text style={styles.saveButtonText}>GUARDAR NOTA</Text>
            </Button>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}