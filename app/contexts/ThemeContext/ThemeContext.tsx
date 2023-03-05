import React, { createContext, ReactNode, useMemo, useState } from "react";
import { colors, darkColors, ThemeMode } from "@theme";

const useThemeData = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  const theme = useMemo(
    () => ({
      mode: themeMode,
      toggleMode: () => {
        setThemeMode(themeMode === "dark" ? "light" : "dark");
      },
      theme: themeMode === "light" ? colors : darkColors, // TODO: Switch the theme
    }),
    [themeMode],
  );
  return theme;
};

export const ThemeContext = createContext<ReturnType<typeof useThemeData> | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeContext.Provider value={useThemeData()}>{children}</ThemeContext.Provider>;
};
