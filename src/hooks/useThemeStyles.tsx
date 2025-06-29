import { useMemo } from "react";
import { useTheme } from "react-native-paper";
import { AppTheme } from "../types/ThemeTypes";

function useThemeStyles<T extends (theme: AppTheme) => ReturnType<T>>(
  styleFactory: T
) {
  const theme: AppTheme = useTheme();
  return useMemo(() => styleFactory(theme), [theme]);
}

export default useThemeStyles;
