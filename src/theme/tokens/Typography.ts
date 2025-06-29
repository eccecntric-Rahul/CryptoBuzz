import { FontConfig } from "../../types/ThemeTypes";

export const typographyToken = {
  fontFamilies: {
    regular: "PlusJakartaSans-Regular",
    medium: "PlusJakartaSans-Medium",
    bold: "PlusJakartaSans-Bold",
  },
  fontSizes: {
    H1: 28,
    H2: 20,
    H3: 18,
    B1: 16,
    B2: 14,
    B3: 12,
    B4: 10,
  },
  lineHeights: {
    H1: 40,
    H2: 28,
    H3: 28,
    B1: 24,
    B2: 20,
    B3: 16,
    B4: 16,
  },
  letterSpacings: {
    default: 0,
  },
};


export const fontConfig:FontConfig = {
      regular: {
        fontFamily: typographyToken.fontFamilies.regular,
      },
      medium: {
        fontFamily: typographyToken.fontFamilies.medium,
      },
      bold: {
        fontFamily: typographyToken.fontFamilies.bold,
      },
      H1: {
        fontFamily: typographyToken.fontFamilies.bold,
        fontSize: typographyToken.fontSizes.H1,
        lineHeight: typographyToken.lineHeights.H1,
      },
      H2: {
        fontFamily: typographyToken.fontFamilies.bold,
        fontSize: typographyToken.fontSizes.H2,
        lineHeight: typographyToken.lineHeights.H2,
      },
      H3: {
        fontFamily: typographyToken.fontFamilies.bold,
        fontSize: typographyToken.fontSizes.H3,
        lineHeight: typographyToken.lineHeights.H3,
      },
      B1: {
        fontFamily: typographyToken.fontFamilies.medium,
        fontSize: typographyToken.fontSizes.B1,
        lineHeight: typographyToken.lineHeights.B1,
      },
      B2: {
        fontFamily: typographyToken.fontFamilies.medium,
        fontSize: typographyToken.fontSizes.B2,
        lineHeight: typographyToken.lineHeights.B2,
      },
      B3: {
        fontFamily: typographyToken.fontFamilies.regular,
        fontSize: typographyToken.fontSizes.B3,
        lineHeight: typographyToken.lineHeights.B3,
      },
      B4: {
        fontFamily: typographyToken.fontFamilies.regular,
        fontSize: typographyToken.fontSizes.B4,
        lineHeight: typographyToken.lineHeights.B4,
      },
  };