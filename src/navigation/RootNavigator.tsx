import React from "react";
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { linking } from "../utils/linking";
import MainStack from "./MainStack";
import { useThemeStore } from "../redux/useThemeStore";
import merge from "deepmerge";

function RootNavigator() {
  const { isDark, theme } = useThemeStore();

  const navigationTheme = isDark
    ? merge(NavigationDarkTheme, theme)
    : merge(NavigationDefaultTheme, theme);

  return (
    <NavigationContainer linking={linking} theme={navigationTheme}>
      <MainStack />
    </NavigationContainer>
  );
}

export default RootNavigator;
