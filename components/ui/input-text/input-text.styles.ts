import { ColorOpacity, Colors } from "@/constants";
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.background,
    borderColor: Colors.tabIconDefault,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: "row",
    // 30 en iOS, 36 en Android para evitar que se corte la letra
    height: Platform.OS === 'ios' ? 30 : 36, 
    overflow: 'hidden', 
  },
  input: {
    backgroundColor: "transparent",
    color: ColorOpacity(Colors.blackColor, 80),
    flex: 1,
    fontSize: 11,
    height: '100%',
    paddingHorizontal: 10, // Padding balanceado
    paddingVertical: 0,
    textAlignVertical: "center", // Centrado vertical en Android
  },
  iconContainer: {
    height: "100%",
    aspectRatio: 1, // Hace que el contenedor del icono sea cuadrado perfecto
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;