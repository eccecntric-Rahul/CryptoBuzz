import {
  configureFonts,
  MD3LightTheme as PaperLightTheme,
  MD3DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import { typographyToken } from "./tokens/Typography";
import { darkThemeColorToken, lightThemeColorToken } from "./tokens/Colors";
import { shadowToken } from "./tokens/Shadow";
import { CustomTheme } from "../types/ThemeTypes";

const fontConfig:any = {
    default: {
      displayLarge: {
        fontFamily: typographyToken.fontFamilies.bold,
        fontWeight: '700' as const,
        fontSize: typographyToken.fontSizes.H1,
        lineHeight: typographyToken.lineHeights.H1,
        letterSpacing: 0,
      },
      displayMedium: {
        fontFamily: typographyToken.fontFamilies.bold,
        fontWeight: '700' as const,
        fontSize: typographyToken.fontSizes.H2,
        lineHeight: typographyToken.lineHeights.H2,
        letterSpacing: 0,
      },
      displaySmall: {
        fontFamily: typographyToken.fontFamilies.bold,
        fontWeight: '700' as const,
        fontSize: typographyToken.fontSizes.H3,
        lineHeight: typographyToken.lineHeights.H3,
        letterSpacing: 0,
      },
      headlineLarge: {
        fontFamily: typographyToken.fontFamilies.medium,
        fontWeight: '500' as const,
        fontSize: typographyToken.fontSizes.B1,
        lineHeight: typographyToken.lineHeights.B1,
        letterSpacing: 0,
      },
      headlineMedium: {
        fontFamily: typographyToken.fontFamilies.medium,
        fontWeight: '500' as const,
        fontSize: typographyToken.fontSizes.B2,
        lineHeight: typographyToken.lineHeights.B2,
        letterSpacing: 0,
      },
      headlineSmall: {
        fontFamily: typographyToken.fontFamilies.regular,
        fontWeight: '400' as const,
        fontSize: typographyToken.fontSizes.B3,
        lineHeight: typographyToken.lineHeights.B3,
        letterSpacing: 0,
      },
      bodyLarge: {
        fontFamily: typographyToken.fontFamilies.regular,
        fontWeight: '400' as const,
        fontSize: typographyToken.fontSizes.B3,
        lineHeight: typographyToken.lineHeights.B3,
        letterSpacing: 0,
      },
      bodyMedium: {
        fontFamily: typographyToken.fontFamilies.regular,
        fontWeight: '400' as const,
        fontSize: typographyToken.fontSizes.B4,
        lineHeight: typographyToken.lineHeights.B4,
        letterSpacing: 0,
      },
      bodySmall: {
        fontFamily: typographyToken.fontFamilies.regular,
        fontWeight: '400' as const,
        fontSize: typographyToken.fontSizes.B4,
        lineHeight: typographyToken.lineHeights.B4,
        letterSpacing: 0,
      },
      labelLarge: {
        fontFamily: typographyToken.fontFamilies.medium,
        fontWeight: '500' as const,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
      },
      labelMedium: {
        fontFamily: typographyToken.fontFamilies.medium,
        fontWeight: '500' as const,
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.5,
      },
      labelSmall: {
        fontFamily: typographyToken.fontFamilies.medium,
        fontWeight: '500' as const,
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 0.5,
      },
      titleLarge: {
        fontFamily: typographyToken.fontFamilies.medium,
        fontWeight: '500' as const,
        fontSize: 22,
        lineHeight: 28,
        letterSpacing: 0,
      },
      titleMedium: {
        fontFamily: typographyToken.fontFamilies.medium,
        fontWeight: '500' as const,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.15,
      },
      titleSmall: {
        fontFamily: typographyToken.fontFamilies.medium,
        fontWeight: '500' as const,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
      },
    },
  };

export const LightTheme: CustomTheme = {
  ...PaperLightTheme,
  colors: {
    ...PaperLightTheme.colors,
    ...lightThemeColorToken
  },
  fonts: configureFonts({ config: fontConfig, isV3: true }),
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    xlarge: 32,
  },
  shadows: shadowToken,
};

export const DarkTheme: CustomTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
   ...darkThemeColorToken
  },
  fonts: configureFonts({ config: fontConfig, isV3: true }),
  spacing: LightTheme.spacing,
  shadows: shadowToken,
};
