import { ColorOpacity } from "@/constants";
import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { InputText } from "../../ui";
import { Button } from "../../ui/button/button";
import { HeaderNewNote } from "../header-new-note";
import { styles } from "./new-note-content.style";
import { INewNoteContentProps } from "./new-note-content.types";

export function NewNoteContent({ setNote, note, onPress }: INewNoteContentProps) {
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
              textAlignVertical="top"
            />

            <Button
              style={{ ...styles.saveButton, backgroundColor: note.bgcolor }}
              onPress={onPress}
              disabled={!note.title.trim() || !note.content.trim()}
            >
              <Text style={styles.saveButtonText}>GUARDAR NOTA</Text>
            </Button>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}