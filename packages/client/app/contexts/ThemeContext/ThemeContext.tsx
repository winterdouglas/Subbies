import React, { createContext, type ReactNode, useMemo, useState } from "react";
import { lightColors, darkColors, type ThemeMode } from "@theme";

const useThemeData = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  const theme = useMemo(
    () => ({
      mode: themeMode,
      toggleMode: () => {
        setThemeMode(themeMode === "dark" ? "light" : "dark");
      },
      theme: themeMode === "light" ? lightColors : darkColors,
    }),
    [themeMode],
  );
  return theme;
};

export type ThemeContextType = ReturnType<typeof useThemeData>;

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeContext.Provider value={useThemeData()}>{children}</ThemeContext.Provider>;
};
