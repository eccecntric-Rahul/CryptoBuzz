import React from "react";
import {
  View,
  StyleSheet,
  Platform,
  ViewStyle,
  Switch as RNSwitch,
} from "react-native";
import { useTheme } from "react-native-paper";
import { AppTheme, CustomTheme } from "../types/ThemeTypes";

type CryptoToggleProps = {
  isEnabled: boolean;
  onChange: (value: boolean) => void;
  androidStylesContainer?: ViewStyle;
  disabled?: boolean;
};

const CryptoToggle: React.FC<CryptoToggleProps> = ({
  androidStylesContainer = {},
  isEnabled,
  onChange,
  disabled = false,
}) => {
  const { colors }:CustomTheme = useTheme();

  const androidContainerStyle: ViewStyle = {
    padding: 1,
    backgroundColor: isEnabled
      ? colors.primary
      : colors.background,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  };

  return (
    <View
      style={
        Platform.OS === "android"
          ? [androidContainerStyle, androidStylesContainer]
          : styles.container
      }
    >
      <RNSwitch
        value={isEnabled}
        onValueChange={onChange}
        disabled={disabled}
        trackColor={{false:colors.background,true:colors.primary}}
        thumbColor={
          isEnabled
            ? colors.background
            : Platform.OS==="android"?colors.border:"white"
        }
        ios_backgroundColor={
            isEnabled
            ? colors.primary
            : "white"
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default CryptoToggle;
