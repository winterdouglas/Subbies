import "./lib/i18n";
import "./utils/ignoreWarnings";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";
import * as Linking from "expo-linking";
import { AppNavigator, useNavigationPersistence } from "./navigators";
import { ErrorBoundary } from "@screens/ErrorScreen/ErrorBoundary";
import { storage } from "@lib/storage";
import { customFontsToLoad, Theme } from "@theme";
import { Config } from "@config";
import { ThemeProvider } from "styled-components";

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE";

// Web linking configuration
const prefix = Linking.createURL("/");
const config = {
  screens: {
    Login: {
      path: "",
    },
    Welcome: "welcome",
    Demo: {
      screens: {
        DemoShowroom: {
          path: "showroom/:queryIndex?/:itemIndex?",
        },
        DemoDebug: "debug",
        DemoPodcastList: "podcast",
        DemoCommunity: "community",
      },
    },
  },
};

interface AppProps {
  hideSplashScreen: () => Promise<void>;
}

/**
 * This is the root component of our app.
 */
function App({ hideSplashScreen }: AppProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  const [areFontsLoaded] = useFonts(customFontsToLoad);

  useEffect(() => {
    if (areFontsLoaded) {
      hideSplashScreen();
    }
  }, [areFontsLoaded]);

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color.
  // In iOS: application:didFinishLaunchingWithOptions:
  // In Android: https://stackoverflow.com/a/45838109/204044
  // You can replace with your own loading component if you wish.
  if (!isNavigationStateRestored || !areFontsLoaded) return null;

  const linking = {
    prefixes: [prefix],
    config,
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // otherwise, we're ready to render the app
  return (
    <ThemeProvider theme={{ toggleTheme, theme }}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ErrorBoundary catchErrors={Config.catchErrors}>
          <AppNavigator
            linking={linking}
            initialState={initialNavigationState}
            onStateChange={onNavigationStateChange}
          />
        </ErrorBoundary>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
