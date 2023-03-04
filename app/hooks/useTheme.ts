import { useMemo, useState } from "react";
import { DefaultTheme } from "styled-components/native";
import { colors, Theme } from "@theme";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");

  return useMemo(
    (): DefaultTheme => ({
      theme,
      toggleTheme: () => {
        setTheme(theme === "light" ? "dark" : "light");
      },
      colors: theme === "light" ? colors : colors,
    }),
    [theme],
  );
};
