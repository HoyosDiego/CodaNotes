import { CardUserInformation } from "@/components/card-user-information";
import ThemedScrollContainer from "@/components/themed-scroll-container";
import { InputText } from "@/components/ui";
import { ColorOpacity, Colors } from "@/constants";
import { notesListAtom } from "@/state";

import { isDbLoadedAtom } from "@/state/ui/uiAtoms";
import { userAtom } from "@/state/user/userAtoms";
import { useAtomValue } from "jotai";

import { useMemo, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");

  const user = useAtomValue(userAtom);
  const notes = useAtomValue(notesListAtom);
  const isLoaded = useAtomValue(isDbLoadedAtom);

  const quantityNotes = useMemo(() => {
    return notes.length ?? 0;
  }, [notes]);

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
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>
          ⚠️ Error: No se pudo encontrar el usuario. Verifica la DB o la función
          getUser.
        </Text>
      </View>
    );
  }

  return (
    <ThemedScrollContainer style={styles.scrollContainer}>
      <View style={styles.containerHome}>
        <CardUserInformation user={user} qtyNotes={quantityNotes} />

        <InputText
          placeholder="Buscar por nombre o descripción"
          containerStyle={styles.textInputStyle}
          onChangeText={setSearchText}
        />
      </View>
    </ThemedScrollContainer>
  );
}

const styles = StyleSheet.create({
  containerHome: {
    flexDirection: "column",
    rowGap: 20,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    padding: 20,
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
    paddingHorizontal: 10,
  },
  textInputStyle: {
    borderRadius: 50,
    borderColor: ColorOpacity(Colors.mainColor, 50),
  },
});
