import AddNewNote from "@/components/add-new-note/add-new-note";
import { CardUserInformation } from "@/components/card-user-information";
import DescriptionNote from "@/components/desciption-note/description-note";
import { UserModal } from "@/components/modal-register-user";
import ThemedScrollContainer from "@/components/themed-scroll-container";
import { InputText } from "@/components/ui";
import { ColorOpacity, Colors } from "@/constants";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useAppDB } from "@/hooks/useAppDB";
import { INote, UserInput } from "@/services";
import { notesListAtom, totalNotesCountAtom } from "@/state";
import { isDbLoadedAtom } from "@/state/ui/uiAtoms";
import { userAtom } from "@/state/user/userAtoms";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useAtomValue, useSetAtom } from "jotai";

import { useCallback, useMemo, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Atoms and modals components
import { ModalUI } from '@/components/ui/modal/modal';
import { selectedNoteAtom } from '@/state/ui/uiAtoms';

export default function HomeScreen() {
  const router = useRouter();

  const [searchText, setSearchText] = useState("");
  const user = useAtomValue(userAtom);
  const allNotes = useAtomValue(totalNotesCountAtom);
  const notes = useAtomValue(notesListAtom);
  const isLoaded = useAtomValue(isDbLoadedAtom);
  const insets = useSafeAreaInsets();
  const backgroundColor = useThemeColor({}, "background");
  const { saveUserToDb } = useAppDB();

  const setSelectedNote = useSetAtom(selectedNoteAtom);
  const selectedNote = useAtomValue(selectedNoteAtom);

  const [userInfo, setUser] = useState<UserInput>({
    name: "",
    lastname: "",
  });

  const quantityNotes = useMemo(() => allNotes, [allNotes]);

  const userResolved = useMemo(() => {
    return user ?? { id: 0, name: "Usuario", lastname: "no registrado" };
  }, [user]);

  const handleUserChange = useCallback((newInfo: UserInput) => {
    setUser(newInfo);
  }, []);

  const handleSaveData = useCallback(async () => {
    try {
      await saveUserToDb(userInfo);
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  }, [userInfo, saveUserToDb]);

  const handleGoToAddNotes = useCallback(() => {
    router.push("/add-notes-screen");
  }, [router]);

  const handleLongPressNote = useCallback((note: INote) => {
    setSelectedNote(note);
  }, [setSelectedNote]);


  if (!isLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.mainColor} />
        <Text style={styles.loadingText}>Consultando usuario y datos...</Text>
      </View>
    );
  }

  if (!user) {
    return (
      <UserModal
        userInformation={userInfo}
        onchangeUser={handleUserChange}
        onSave={handleSaveData}
      />
    );
  }

  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        styles.container,
      ]}
    >
      <View style={styles.containerHome}>
        <CardUserInformation user={userResolved} qtyNotes={quantityNotes} />

        <InputText
          placeholder="Buscar por nombre o descripción"
          containerStyle={styles.textInputStyle}
          onChangeText={setSearchText}
          rightIcon={
            <Ionicons
              name="search"
              size={19}
              color={ColorOpacity(Colors.icon, 70)}
            />
          }
        />
      </View>

      <ThemedScrollContainer style={styles.scrollContainer}>
        <View style={styles.containerNotes}>
          {notes.map((note, index) => (
            <DescriptionNote
              key={note.id}
              items={note}
              onLongPress={() => handleLongPressNote(note)}
            />
          ))}
        </View>
      </ThemedScrollContainer>
      <AddNewNote onPress={handleGoToAddNotes} />

      <ModalUI
        // The !!selectedNote is to convert the selectedNote to a boolean
        isOpen={!!selectedNote}
        onClose={() => setSelectedNote(null)}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Configuración de nota</Text>
            <Text style={styles.modalSubTitle}>Estas configurando la nota: {selectedNote?.title}</Text>
          </View>
          <View style={styles.emptyStateContainer}>
            <Ionicons
              name="camera"
              size={120}
              color="#E5E5E5"
            />
            <Text style={styles.emptyStateText}>
              Una vez seleccionada o tomada la foto tendrá una vista preliminar antes de guardar
            </Text>
          </View>
          <View style={styles.saveButton}>
            <Text style={styles.saveButtonText}>GUARDAR</Text>
          </View>
        </View>
      </ModalUI>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  containerHome: {
    flex: 0.4,
    flexDirection: "column",
    rowGap: 20,
    paddingHorizontal: 30,
  },
  containerNotes: {
    flexDirection: "column",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.whiteColor,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: Colors.grayColor,
  },
  scrollContainer: {
    paddingTop: 15,
  },
  textInputStyle: {
    borderRadius: 50,
    borderColor: ColorOpacity(Colors.mainColor, 50),
  },

  // Modal styles
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: 300,
  },
  modalHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  modalSubTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  emptyStateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  emptyStateText: {
    textAlign: 'center',
    color: '#808080',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    paddingHorizontal: 30,
    lineHeight: 22,
  },
  saveButton: {
    backgroundColor: '#FFAD42',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '100%',
    marginTop: 30,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
