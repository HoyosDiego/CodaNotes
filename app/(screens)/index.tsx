import { CardUserInformation } from "@/components/card-user-information";
import ThemedScrollContainer from "@/components/themed-scroll-container";
import { InputText } from "@/components/ui";
import { ColorOpacity, Colors } from "@/constants";

import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const user = {
    name: "Diego",
    lastName: "Hoyos",
    points: 1500,
  };
  return (
    <ThemedScrollContainer style={styles.scrollContainer}>
      <View style={styles.containerHome}>
        <CardUserInformation user={user} />
        <InputText placeholder="Diego" containerStyle={styles.textInputStyle} />
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
