import "styled-components/native";
import { Theme, ThemeData } from "@theme";

declare module "styled-components/native" {
  export interface DefaultTheme {
    theme: Theme;
    toggleTheme: () => void;
    colors: ThemeData;
  }
}
