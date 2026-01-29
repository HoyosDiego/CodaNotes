import { NewNote, NewNoteContent } from "@/components/new-note";
import { ColorsContent } from "@/components/new-note/colors-content";
import { Button } from "@/components/ui/button/button";
import { ColorOpacity, Colors } from "@/constants";
import { useAppDB } from "@/hooks/useAppDB";
import { NoteInput } from "@/services";
import { useRouter } from "expo-router";
import React, { useCallback, useMemo, useState } from "react";

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

export default function AddNotesScreen() {
  const router = useRouter();
  const { saveNoteToDb } = useAppDB();

  const [note, setNote] = useState<NoteInput>({
    title: "",
    content: "",
    bgcolor: Colors.mainColor,
  });

  const handleSave = useCallback(() => {
    if (!note.title.trim() || !note.content.trim()) return;

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

  const opacityButtonColor = useMemo(() => {
    if (!note.title.trim() || !note.content.trim()) {

      return ColorOpacity(note.bgcolor, 80);
    }
    return note.bgcolor
  }, [note.bgcolor]);

  return (
    <NewNote>
      <NewNoteContent setNote={setNote} note={note} opacityButtonColor={opacityButtonColor} onPress={handleSave} />

      <ColorsContent note={note}>
        {DATA_COLORS.map((color, index) => (
          <Button
            key={`${color}-${index}`}
            onPress={() => toggleChangeColor(color)}
            style={{
              width: 35,
              height: 35,
              borderRadius: 25,
              backgroundColor: color
            }}
          />
        ))}
      </ColorsContent>
    </NewNote>
  );
}
