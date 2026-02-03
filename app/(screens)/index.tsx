import AddNewNote from "@/components/add-new-note/add-new-note";
import { CardUserInformation } from "@/components/card-user-information";
import DescriptionNote from "@/components/desciption-note/description-note";
import { UserModal } from "@/components/modal-register-user";
import ThemedScrollContainer from "@/components/themed-scroll-container";
import { ColorOpacity, Colors } from "@/constants";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useAppDB } from "@/hooks/useAppDB";
import { INote, UserInput } from "@/services";
import { notesListAtom, totalNotesCountAtom } from "@/state";
import { isDbLoadedAtom } from "@/state/ui/uiAtoms";
import { userAtom } from "@/state/user/userAtoms";
import { useRouter } from "expo-router";
import { useAtomValue, useSetAtom } from "jotai";

import { useCallback, useMemo, useState } from "react";
import { ActivityIndicator, Image, Modal, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Atoms and modals components
import { CameraComponent } from "@/components/camera/camera";
import { IconsPatron } from "@/components/icons-patron";
import { SettingsLongPressComponent } from "@/components/settings-long-press";
import { Button } from "@/components/ui/button";
import { ModalUI } from '@/components/ui/modal/modal';
import { selectedNoteAtom } from '@/state/ui/uiAtoms';
import { Ionicons } from "@expo/vector-icons";

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
  const [showCamera, setShowCamera] = useState(false);
  const [userPhoto, setUserPhoto] = useState<string | null>(null); // Para guardar la foto tomada

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

  const isOpenModal = useMemo(() => !!selectedNote, [selectedNote]);
  const handleCloseModal = useCallback(() => setSelectedNote(null), [setSelectedNote]);

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

  const CameraAction = useMemo(() => (
    <Button
      style={{ backgroundColor: 'transparent' }}
      onPress={() => setShowCamera(true)}
    >
      {userPhoto ? (
        <Image source={{ uri: userPhoto }}
          style={{ width: 65, height: 65, borderRadius: 50 }}
        />
      ) : (
        <Ionicons
          name="camera-sharp"
          color={'#D9D9D9'}
          size={55}
        />
      )}
    </Button>
  ), [userPhoto, setShowCamera]);

  const ModalCamera = useMemo(() => (
    showCamera && (
      <Modal visible={showCamera} animationType="slide" transparent={false}>
        <CameraComponent
          onClose={() => setShowCamera(false)}
          onPhotoTaken={(uri) => {
            setUserPhoto(uri);
            setShowCamera(false);
          }}
        />
      </Modal>
    )
  ), [showCamera, setShowCamera, setUserPhoto]);

  const ModalSettings = useMemo(() => (
    showCamera ? ModalCamera : CameraAction
  ), [showCamera]);

  const ModalContent = useMemo(() => (
    userPhoto ? (
      <View style={styles.containerIcons}>
        <IconsPatron uri={userPhoto} />
      </View>
    ) : (
      <View style={styles.emptyStateContainer}>
        <Text style={styles.emptyStateText}>
          Una vez seleccionada o tomada la foto tendrá una vista preliminar antes de guardar
        </Text>
      </View>
    )
  ), [userPhoto]);

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
        <CardUserInformation user={userResolved} qtyNotes={selectedNote ? 0 : quantityNotes}
          hasOpacity={!!selectedNote}
        />
      </View>

      <ThemedScrollContainer style={styles.scrollContainer}>
        <View style={styles.containerNotes}>
          {notes.map((note) => (
            <DescriptionNote
              key={note.id}
              items={note}
              onLongPress={() => handleLongPressNote(note)}
            />
          ))}
        </View>
      </ThemedScrollContainer>
      <AddNewNote onPress={handleGoToAddNotes} isDisabled={!!selectedNote} />

      <ModalUI
        // The !!selectedNote is to convert the selectedNote to a boolean
        isOpen={isOpenModal}
        onClose={handleCloseModal}
      >
        <SettingsLongPressComponent
          title={selectedNote?.title || ""}
          cameraAction={ModalSettings}
          content={ModalContent}
        />
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
  emptyStateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  emptyStateText: {
    textAlign: 'center',
    color: '#797979',
    fontSize: 20,
    fontWeight: '900',
    marginTop: 20,
    paddingHorizontal: 30,
    lineHeight: 30,
  },
  textInputStyle: {
    borderRadius: 50,
    borderColor: ColorOpacity(Colors.mainColor, 50),
  },
  containerIcons: {
    width: '80%',
    aspectRatio: 1,
    alignSelf: 'center',
    marginVertical: 20,
    borderWidth: 2,
    borderColor: Colors.mainColor,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
