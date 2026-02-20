import AddNewNote from "@/components/add-new-note/add-new-note";
import { CardUserInformation } from "@/components/card-user-information";
import DescriptionNote from "@/components/desciption-note/description-note";
import { UserModal } from "@/components/modal-register-user";
import ThemedScrollContainer from "@/components/themed-scroll-container";
import { ColorOpacity, Colors } from "@/constants";
import { notesListAtom, totalNotesCountAtom } from "@/state";
import { isDbLoadedAtom, selectedNoteAtom } from "@/state/ui/uiAtoms";
import { userAtom } from "@/state/user/userAtoms";
import { useAtomValue, useSetAtom } from "jotai";

import { useCallback, useMemo, useState } from "react";
import { ActivityIndicator, Image, Modal, Text, View } from "react-native";

// Atoms and modals components
import { CameraComponent } from "@/components/camera/camera";
import { styles } from "@/components/container-home";
import ContainerHomeComponent from "@/components/container-home/container-home.component";
import { IconsPatron } from "@/components/icons-patron";
import { SettingsLongPressComponent } from "@/components/settings-long-press";
import { SettingsProfile } from "@/components/settings-profile";
import { InputText } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { ModalUI } from '@/components/ui/modal/modal';
import { useHome } from "@/hooks";
import { useAppDB } from "@/hooks/useAppDB";
import { handleGoToAddNotes, handleGoToViewNote, handleLongPressNote, handleUserChange } from "@/state/util";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");
  const user = useAtomValue(userAtom);
  const allNotes = useAtomValue(totalNotesCountAtom);
  const notes = useAtomValue(notesListAtom);
  const isLoaded = useAtomValue(isDbLoadedAtom);
  const [showCamera, setShowCamera] = useState(false);
  const [openModalSetting, setOpenModalSettings] = useState<boolean>(false);
  const setSelectedNote = useSetAtom(selectedNoteAtom);
  const selectedNote = useAtomValue(selectedNoteAtom);
  const [openModalByProfile, setOpenModalByProfile] = useState<boolean>(false);
  const { userInfo, setUserInfo,
    handleSaveData, userPhoto, setUserPhoto, handleUpdateNote,
    handleUpdateUser } = useHome();
  const { selectNotesByFilterTodb } = useAppDB();
  const [updateName, setUpdateName] = useState<string | undefined>('');
  const [updateLastname, setUpdateLastname] = useState<string | undefined>('');
  const quantityNotes = useMemo(() => allNotes, [allNotes]);

  const userResolved = useMemo(() => {
    return user ?? { id: 0, name: "Usuario", lastname: "no registrado" };
  }, [user]);

  const isOpenModal = useMemo(() => openModalSetting, [openModalSetting]);

  const handleCloseModal = () => {
    setUserPhoto(null);
    setSelectedNote(null)
    setOpenModalSettings(false);
  }

  const handleUpdateNoteById = () => {
    if (selectedNote && userPhoto) {
      handleUpdateNote();
      handleCloseModal();
    }
  };

  const filterNotes = useCallback((searchText: string) => {
    const handler = setTimeout(() => {
      selectNotesByFilterTodb(searchText)
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [selectNotesByFilterTodb]);

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
        onchangeUser={() => setUserInfo(handleUserChange(userInfo, userPhoto || undefined))}
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
        <View style={{ width: 90, height: 90, borderRadius: 50, marginTop: 10 }}>
          <Image source={{ uri: userPhoto }}
            style={{ flex: 1, borderRadius: 50 }}
          />
          <Ionicons
            name="camera-sharp"
            color={'#D9D9D9'}
            size={60}
            style={{ position: 'absolute', top: 14, right: 0, bottom: 0, left: 16, opacity: 0.3 }}
          />
        </View>
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
      <IconsPatron uri={userPhoto} />
    ) : (
      <View style={styles.emptyStateContainer}>
        <Text style={styles.emptyStateText}>
          Una vez seleccionada o tomada la foto tendrá una vista preliminar antes de guardar
        </Text>
      </View>
    )
  ), [userPhoto]);

  const isValidEditProfile = useMemo(() => {
    return userPhoto || (userResolved.name && userResolved.lastname)
  }, [userPhoto, userResolved])

  const handleClickUpdateProfile = () => {
    const userUpdated = {
      name: updateName ?? userResolved.name,
      lastname: updateLastname ?? userResolved.lastname,
      photo_uri: userPhoto
    };

    handleUpdateUser(userUpdated);
    setOpenModalSettings(false);
  };

  const handleUpdatePhotoUser = (uri: string) => {
    const userUpdated = {
      name: userResolved.name,
      lastname: userResolved.lastname,
      photo_uri: uri
    };

    handleUpdateUser(userUpdated);
  };

  return (
    <ContainerHomeComponent>
      <View style={styles.containerHome}>
        <CardUserInformation
          user={userResolved}
          qtyNotes={quantityNotes}
          handleSettings={() => {
            setOpenModalByProfile(true)
            setOpenModalSettings(true)
          }}
          onUpdatePhotoUser={handleUpdatePhotoUser}
          hasOpacity={isOpenModal}
        />
      </View>
      <InputText
        placeholder="Buscar por nombre o descripción"
        containerStyle={styles.textInputStyle}
        onChangeText={filterNotes}
        rightIcon={
          <Ionicons
            name="search"
            size={19}
            color={ColorOpacity(Colors.icon, 70)}
          />
        }
      />

      <ThemedScrollContainer style={styles.scrollContainer}>
        <View style={styles.containerNotes}>
          {notes.map((note) => (
            <DescriptionNote
              key={note.id}
              items={note}
              onLongPress={() => {
                setOpenModalByProfile(false)
                setOpenModalSettings(true);
                setSelectedNote(handleLongPressNote(note))
              }}
              onPress={() => {
                setSelectedNote(note);
                handleGoToViewNote()
              }}
            />
          ))}
        </View>
      </ThemedScrollContainer>
      <AddNewNote onPress={() => handleGoToAddNotes()} isDisabled={isOpenModal} />

      <ModalUI
        isOpen={isOpenModal}
        onClose={handleCloseModal}
      >
        {openModalByProfile ?
          <SettingsProfile
            hasOpacity={!isValidEditProfile}
            name={userResolved.name || ''}
            lastname={userResolved?.lastname || ''}
            cameraAction={ModalSettings}
            onUpdateName={setUpdateName}
            onUpdateLastname={setUpdateLastname}
            onClickUpdateUser={handleClickUpdateProfile}
          />
          : <SettingsLongPressComponent
            title={selectedNote?.title || ""}
            cameraAction={ModalSettings}
            content={ModalContent}
            hasOpacity={!userPhoto}
            onUpdatePhotoNote={handleUpdateNoteById}
          />}
      </ModalUI>
    </ContainerHomeComponent>
  );
}
