import { useContext } from "react";
import { ThemeContext } from "@contexts";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Theme not set, make sure to wrap the app with the ThemeProvider");
  }

  return context;
};
