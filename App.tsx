import React from "react";
import { StatusBar } from "react-native";
import RootNavigator from "./src/navigation/RootNavigator";
import { ThemeProvider } from "./src/theme/ThemeProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ToastProvider } from "./src/styleguide/ToastProvider";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();


function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
    <QueryClientProvider client={queryClient}>
       <ThemeProvider>
        <StatusBar barStyle="dark-content" />
        <ToastProvider>
          <RootNavigator />
        </ToastProvider>
      </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
