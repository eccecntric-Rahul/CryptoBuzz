// components/CryptoText.tsx
import React from "react";
import { Text, TextProps } from "react-native-paper";
import { fontConfig } from "../theme/tokens/Typography";
import { TextVariant } from "../types/ThemeTypes";


type CryptoTextProps = TextProps<Text> & {
  type?: TextVariant;
  children: React.ReactNode;
};

const CryptoText: React.FC<CryptoTextProps> = ({
  type = "B1",
  children,
  style,
  ...props
}) => {
  
  const variantStyle = fontConfig[type as TextVariant];
  const textStyle = [variantStyle, style];

  return (
    <Text style={textStyle} {...props}>
      {children}
    </Text>
  );
};

export default CryptoText;
