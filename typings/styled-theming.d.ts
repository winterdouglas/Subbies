import "styled-theming";
import { DefaultTheme } from "styled-components/native";

declare module "styled-theming" {
  function theme<TKey extends keyof TTheme, TTheme extends DefaultTheme = DefaultTheme>(
    name: TKey,
    values: theme.ThemeMap<TKey, TTheme>,
  ): ThemeSet;

  namespace theme {
    type ThemeMap<TKey extends keyof TTheme, TTheme extends DefaultTheme> = Record<
      TTheme[TKey],
      ThemeValue
    >;

    type VariantMap<
      TProps = unknown,
      TVariant extends keyof TProps,
      TTheme extends DefaultTheme,
    > = Record<TProps[TVariant], ThemeMap<keyof TTheme, TTheme>>;

    function variants<
      TProps = unknown,
      TVariant extends keyof TProps,
      TTheme extends DefaultTheme = DefaultTheme,
    >(
      name: keyof TTheme,
      prop: TVariant,
      values: VariantMap<TProps, TVariant, TTheme>,
    ): VariantSet<TVariant, string>; // TODO: Why this string?
  }

  export default theme;
}
