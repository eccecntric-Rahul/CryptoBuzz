import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { AppTheme, CustomTheme } from '../types/ThemeTypes';
import AlphaText from './CryptoText';
import { useThemeStore } from '../redux/useThemeStore';

type Variant = 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
type Size = 'small' | 'medium' | 'large';
type ColorType = 'default' | 'primary' | 'warning' | 'danger' | 'info';

interface CryptoButtonProps {
  title: string;
  onPress: () => void;
  variant?: Variant;
  size?: Size;
  color?: ColorType;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  style?: ViewStyle;
}

const getColor = (theme: CustomTheme, type: ColorType, isBorder?: boolean) => {
  switch (type) {
    case 'primary':
      return theme.colors.primary;
    case 'warning':
      return theme.colors.accent;
    case 'danger':
      return theme.colors.error;
    case 'info':
      return theme.colors.secondary;
    default:
      return isBorder ? theme.colors.border : theme.colors.primary;
  }
};

const CryptoButton: React.FC<CryptoButtonProps> = ({
  title,
  onPress,
  variant = 'contained',
  size = 'medium',
  color = 'default',
  leftIcon,
  rightIcon,
  disabled,
  style,
}) => {
  const theme: CustomTheme = useTheme();
  const { isDark } = useThemeStore();

  const borderColor = variant === 'outlined' ? getColor(theme, color, true) : 'transparent';
  const backgroundColor =
    variant === 'outlined' || variant === 'text' ? 'transparent' : getColor(theme, color);

  const textColor =
    variant === 'outlined' || variant === 'text'
      ? getColor(theme, color)
      : isDark
      ? theme.colors.text
      : '#FFFFFF';

  const textType = size === 'large' ? 'H3' : size === 'medium' ? 'B1' : 'B2';

  return (
    <Button
      mode={variant}
      onPress={onPress}
      disabled={disabled}
      icon={leftIcon as any}
      style={[
        {
          borderRadius: 10,
          borderColor,
          borderWidth: variant === 'outlined' ? 1 : 0,
          overflow: 'hidden',
          backgroundColor,
        },
        style,
      ]}
      contentStyle={
        size === 'large' ? styles.large : size === 'medium' ? styles.medium : styles.small
      }
      labelStyle={{
        padding: 0,
        minHeight: 0,
        marginVertical: 0,
        marginHorizontal: 0,
      }}
    >
      <AlphaText type={textType} style={{ color: textColor }}>
        {title}
      </AlphaText>
      {rightIcon && <View style={{ marginLeft: 8 }}>{rightIcon}</View>}
    </Button>
  );
};

export default CryptoButton;

const styles = StyleSheet.create({
  small: {
    height: 32,
    paddingHorizontal: 16,
    paddingVertical: 0,
    padding: 0,
    minHeight: undefined,
    borderRadius: 10,
  },
  medium: {
    height: 44,
    paddingHorizontal: 16,
    paddingVertical: 0,
    minHeight: undefined,
    borderRadius: 10,
  },
  large: {
    height: 52,
    paddingHorizontal: 16,
    paddingVertical: 0,
    minHeight: undefined,
    borderRadius: 10,
  },
});
