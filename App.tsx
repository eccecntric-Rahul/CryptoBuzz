import React, { useEffect } from "react";
import { StatusBar, Button, View, ScrollView, SafeAreaView, PermissionsAndroid, Platform } from "react-native";
import RootNavigator from "./src/navigation/RootNavigator";
import { ThemeProvider } from "./src/theme/ThemeProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ToastProvider } from "./src/styleguide/ToastProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { configureNotifications } from './src/utils/notificationService';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  useEffect(() => {
    configureNotifications();
  }, []);
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ flex: 1 }}>
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <RootNavigator />
              </ScrollView>
            </SafeAreaView>
          </ToastProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;