import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StrictMode } from "react";
import "react-native-reanimated";

export const unstable_settings = {
  anchor: "(screens)",
};

export default function RootLayout() {
  return (
    <StrictMode>
      <ThemeProvider value={DefaultTheme}>
        <Stack>
          <Stack.Screen name="(screens)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </StrictMode>
  );
}
