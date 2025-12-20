import { useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { NewNote, NewNoteContent } from "@/components/new-note";
import { ColorsContent } from "@/components/new-note/colors-content";
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
    <NewNote>
      <NewNoteContent setNote={setNote} note={note} onPress={handleSave} />

      <ColorsContent note={note}>
        {DATA_COLORS.map((color, index) => (
          <Button
            key={`${color}-${index}`}
            onPress={() => toggleChangeColor(color)}
            style={{
              width: 35,
              height: 35,
              borderRadius: 25,
              backgroundColor: ColorOpacity(color, 80),
            }}
          />
        ))}
      </ColorsContent>
    </NewNote>
  );
}
