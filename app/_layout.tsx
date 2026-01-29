import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider } from "jotai";
import { StrictMode } from "react";
import "react-native-reanimated";
import { useAppDB } from "../hooks/useAppDB";

export const unstable_settings = {
  anchor: "(screens)",
};

const AppInitializer = () => {
  useAppDB();

  return (
    <Stack>
      <Stack.Screen name="(screens)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function RootLayout() {
  return (
    <StrictMode>
      <Provider>
        <ThemeProvider value={DefaultTheme}>
          <AppInitializer />
          <StatusBar style="auto" />
        </ThemeProvider>
      </Provider>
    </StrictMode>
  );
}
