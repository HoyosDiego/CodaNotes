import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Card, InputText } from "@/components/ui";
import { Button } from "@/components/ui/button/button";
import { ColorOpacity, Colors } from "@/constants";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useAppDB } from "@/hooks/useAppDB";
import { NoteInput } from "@/services";

export default function AddNotesScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const { saveNoteToDb } = useAppDB();

  const [note, setNote] = useState<NoteInput>({
    title: "",
    content: "",
    bgcolor: Colors.mainColor,
  });

  const DATA_COLORS = [
    Colors.greenColor,
    Colors.blueColor,
    Colors.lightRedColor,
    Colors.lightBlueColor,
    Colors.lightGreenColor,
    Colors.pinkColor,
    Colors.secondaryGreenColor,
    Colors.purpleColor,
    Colors.redColor,
    Colors.secondaryLightGreenColor,
  ];

  const handleSave = useCallback(() => {
    if (!note.title.trim()) return;

    saveNoteToDb({
      title: note.title,
      content: note.content,
      bgcolor: note.bgcolor,
    });

    router.back();
  }, [note, router, saveNoteToDb]);

  const toggleChangeColor = useCallback(
    (color: string) => {
      setNote((prevNote) => ({
        ...prevNote,
        bgcolor: color,
      }));
    },
    [setNote],
  );

  return (
    <View
      style={[styles.container, { backgroundColor, paddingTop: insets.top }]}
    >
      {/* Header Personalizado */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={textColor} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: textColor }]}>
            Nueva Nota
          </Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView contentContainerStyle={styles.formContainer}>
          {/* Input de Título */}
          <Text style={[styles.label]}>Título</Text>
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

          {/* Text Area para Descripción */}
          <Text style={[styles.label]}>Descripción</Text>
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

          {/* Botón Guardar */}
          <Button
            style={{ ...styles.saveButton, backgroundColor: note.bgcolor }}
            onPress={handleSave}
            disabled={!note.title.trim() && !note.content.trim()}
          >
            <Text style={styles.saveButtonText}>GUARDAR NOTA</Text>
          </Button>
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
        <Card
          className={[
            styles.cardColor,
            { backgroundColor: ColorOpacity(note.bgcolor, 40) },
          ]}
        >
          {DATA_COLORS.map((color, index) => (
            <Button
              key={`${color + index}`}
              onPress={() => toggleChangeColor(color)}
              style={{
                width: 45,
                height: 45,
                borderRadius: 25,
                backgroundColor: ColorOpacity(color, 80),
              }}
            />
          ))}
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardColor: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: Colors.mainColor,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
    justifyContent: "center",
    maxHeight: 128,
    paddingHorizontal: 15,
    width: "100%",
  },
  cardColorText: {
    fontSize: 14,
    fontWeight: "600",
  },
  container: { flex: 1, paddingHorizontal: 30 },
  footerContainer: {
    flex: 0.2,
  },
  formContainer: {
    flex: 1,
    rowGap: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 60,
  },
  headerContainer: {
    flex: 0.8,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  inputTitle: {
    borderRadius: 12,
    borderColor: ColorOpacity(Colors.mainColor, 30),
  },
  label: {
    backgroundColor: Colors.mainColor,
    borderRadius: 10,
    color: Colors.whiteColor,
    fontSize: 14,
    fontWeight: "700",
    height: 22,
    lineHeight: 22,
    marginBottom: -20,
    marginLeft: 5,
    maxWidth: 125,
    paddingLeft: 12,
    textAlignVertical: "center",
    zIndex: 1,
  },

  saveButton: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: Colors.mainColor,
    borderRadius: 15,
    columnGap: 10,
    elevation: 4,
    flexDirection: "row",
    height: 55,
    justifyContent: "center",
    shadowColor: Colors.blackColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: "80%",
  },
  saveButtonText: {
    color: Colors.whiteColor,
    fontSize: 24,
    fontWeight: "bold",
  },
  textArea: {
    borderRadius: 12,
    flex: 1,
    borderColor: ColorOpacity(Colors.mainColor, 30),
    paddingTop: 12,
  },
});
