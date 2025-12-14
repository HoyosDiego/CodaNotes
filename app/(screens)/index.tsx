import { CardUserInformation } from "@/components/card-user-information";
import ThemedScrollContainer from "@/components/themed-scroll-container";
import { InputText } from "@/components/ui";
import { ColorOpacity, Colors } from "@/constants";
import { useDebouncedSearch } from "@/hooks/useDebouncedSearch";
import { useCallback, useState } from "react";

import { StyleSheet, View } from "react-native";

const user = {
  name: "Diego",
  lastName: "Hoyossssssssss",
  points: 1500,
};

export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");

  const executeSearch = useCallback(() => {
    console.log("DEBOUNCED SEARCH EXECUTED for: ", searchText);
  }, [searchText]);

  useDebouncedSearch(executeSearch, 500, searchText);

  return (
    <ThemedScrollContainer style={styles.scrollContainer}>
      <View style={styles.containerHome}>
        <CardUserInformation user={user} />
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
  scrollContainer: {
    paddingHorizontal: 10,
  },
  textInputStyle: {
    borderRadius: 50,
    borderColor: ColorOpacity(Colors.mainColor, 50),
  },
});
