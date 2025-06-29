// ToastProvider.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import { CustomTheme } from "../types/ThemeTypes";
import { useTheme } from "react-native-paper";
import AlphaText from "./CryptoText";
import Icons from "../icons/Icons";

export const toastConfig = (theme: CustomTheme) => ({
  /*
   * Failed Toast (Red)
   */
  error: ({ text1, text2 }: { text1: string; text2?: string }) => {
    return (
      <View
        style={[
          styles.toastContainer,
          { backgroundColor: theme.colors.text },
        ]}
      >
        <View style={{ paddingTop: 4, marginRight: 8 }}>
          <Icons name="ERROR-ICON" />
        </View>
        <View style={styles.content}>
          <AlphaText
            type="B2"
            style={{ color: theme.colors.text}}
          >
            {text1}
          </AlphaText>
          {text2 && (
            <AlphaText
              type="B2"
              style={{ color: theme.colors.border }}
            >
              {text2}
            </AlphaText>
          )}
        </View>
      </View>
    );
  },

  /*
   * Loading Toast (Blue)
   */
  loading: ({ text1, text2 }: { text1: string; text2?: string }) => (
    <View
      style={[
        styles.toastContainer,
        { backgroundColor: theme.colors.text },
      ]}
    >
      <View style={{ paddingTop: 4, marginRight: 8 }}>
        <Icons name="LOADING-ICON" />
      </View>
      <View style={styles.content}>
        <AlphaText
          type="B2"
          style={{ color: theme.colors.text}}
        >
          {text1}
        </AlphaText>
        {text2 && (
          <AlphaText
            type="B2"
            style={{ color: theme.colors.border }}
          >
            {text2}
          </AlphaText>
        )}
      </View>
    </View>
  ),

  /*
   * Success Toast (Green)
   */
  success: ({ text1, text2 }: { text1: string; text2?: string }) => (
    <View
      style={[
        styles.toastContainer,
        { backgroundColor: theme.colors.text },
      ]}
    >
      <View style={{ paddingTop: 4, marginRight: 8 }}>
        <Icons name="SUCCESS-ICON" />
      </View>
      <View style={styles.content}>
        <AlphaText
          type="B2"
          style={{ color: theme.colors.text}}
        >
          {text1}
        </AlphaText>
        {text2 && (
          <AlphaText
            type="B2"
            style={{ color: theme.colors.border }}
          >
            {text2}
          </AlphaText>
        )}
      </View>
    </View>
  ),

  /*
   * Info Toast (Blue)
   */
  info: ({ text1, text2 }: { text1: string; text2?: string }) => (
    <View
      style={[
        styles.toastContainer,
        { backgroundColor: theme.colors.text },
      ]}
    >
      <View style={{ paddingTop: 4, marginRight: 8 }}>
        <Icons name="INFO-ICON" />
      </View>
      <View style={styles.content}>
        <AlphaText
          type="B2"
          style={{ color: theme.colors.text}}
        >
          {text1}
        </AlphaText>
        {text2 && (
          <AlphaText
            type="B2"
            style={{ color: theme.colors.border }}
          >
            {text2}
          </AlphaText>
        )}
      </View>
    </View>
  ),

  /*
   * Warning Toast (Orange)
   */
  warning: ({ text1, text2 }: { text1: string; text2?: string }) => (
    <View
      style={[
        styles.toastContainer,
        { backgroundColor: theme.colors.text },
      ]}
    >
      <View style={{ paddingTop: 4, marginRight: 8 }}>
        <Icons name="ERROR-ICON" />
      </View>
      <View style={styles.content}>
        <AlphaText
          type="B2"
          style={{ color: theme.colors.text}}
        >
          {text1}
        </AlphaText>
        {text2 && (
          <AlphaText
            type="B2"
            style={{ color: theme.colors.border }}
          >
            {text2}
          </AlphaText>
        )}
      </View>
    </View>
  ),
});

const styles = StyleSheet.create({
  toastContainer: {
    width: "90%",
    borderRadius: 10,
    padding: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  content: {
    flex: 1,
    alignItems: "flex-start",
  },
  loader: {
    marginRight: 12,
  },
});

// Helper function to show toasts
export const showToast = (type: string, title: string, message?: string) => {
  Toast.show({
    type,
    text1: title,
    text2: message,
    visibilityTime: 3000,
    position: "top",
  });
};

// Wrap your app with this provider
export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const theme: CustomTheme = useTheme();
  return (
    <>
      {children}
      <Toast config={toastConfig(theme)} />
    </>
  );
};

type ToastType = "success" | "error" | "info" | "warning" | "loading";

const useToast = () => {
  const showToast = (
    type: ToastType,
    title: string,
    message?: string,
    options?: {
      visibilityTime?: number;
      position?: "top" | "bottom";
    }
  ) => {
    Toast.show({
      type,
      text1: title,
      text2: message,
      visibilityTime: options?.visibilityTime || 3000,
      position: options?.position || "top",
    });
  };

  const hideToast = () => {
    Toast.hide();
  };

  return { showToast, hideToast };
};

export default useToast;
