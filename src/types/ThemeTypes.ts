import { lightThemeColorToken } from '../theme/tokens/Colors';
import { shadowToken } from '../theme/tokens/Shadow';
import { fontConfig } from './../../node_modules/react-native-paper/src/styles/fonts';
import { MD3Theme, Theme as RNPTheme } from 'react-native-paper';

export type ColorThemeTokenType = {
  primary: string;
  secondary: string;
  heading: string;
  body: string;
  error: string;
  warning: string;
  success: string;
  border: string;
  background: string;
  neutral: string;
};

export type CustomTheme = MD3Theme & {
  spacing: {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
  };
  shadows: typeof shadowToken;
  colors: MD3Theme['colors'] & {
    secondary: string;
    primary: string;
    background: string;
    surface: string;
    text: string;
    muted: string;
    border: string;
    error: string;
    success: string;
    disabled: string;
    card: string;
    placeholder: string;
    accent: string;
  };
};

declare module 'react-native-paper' {
  interface ThemeColors {
    custom: ColorThemeTokenType;
  }

  interface Theme {
    colors: ThemeColors;
    spacing: {
      small: number;
      medium: number;
      large: number;
      xlarge: number;
    };
    shadows: {
      small: Shadow;
      medium: Shadow;
      large: Shadow;
    };
  }
}

export interface Shadow {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export type ColorScale = {
  10: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700?: string;
  800?: string;
  900?: string;
  1000?: string;
};

export type TextVariant =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'B1'
  | 'B2'
  | 'B3'
  | 'B4'
  | 'regular'
  | 'medium'
  | 'bold';

export interface FontStyle {
  fontFamily: string;
  fontSize?: number;
  lineHeight?: number;
}

export type FontConfig = {
  [key in TextVariant]: FontStyle;
};

export type AppTheme = RNPTheme;
