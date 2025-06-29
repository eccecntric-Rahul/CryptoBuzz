// src/providers/ThemeProvider.tsx
import { Provider as PaperProvider } from "react-native-paper";
import { useColorScheme } from "react-native";
import { useEffect } from "react";
import { useThemeStore } from "../redux/useThemeStore";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme }:any = useThemeStore((state) => state);
  const colorScheme = useColorScheme();

  // Sync with system theme changes
  useEffect(() => {
    setTheme(colorScheme === "dark");
  }, [colorScheme, setTheme]);

  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};
