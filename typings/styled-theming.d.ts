import { ThemeSet, ThemeValue } from "styled-theming";
import { DefaultTheme } from "styled-components/native";

declare module "styled-theming" {
  declare function theme<TKey extends keyof DefaultTheme>(
    name: TKey,
    values: Record<DefaultTheme[TKey], ThemeValue>,
  ): ThemeSet;

  export default theme;
}
