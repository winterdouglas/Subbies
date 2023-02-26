import React from "react";
import i18n from "i18n-js";
import { StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native";

import theme from "styled-theming";
import styled, { css } from "styled-components/native";

import { isRTL, translate, TxKeyPath } from "@lib/i18n";
import { colors, typography } from "@theme";
import { FlattenSimpleInterpolation } from "styled-components";

type Sizes = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
type Weights = keyof typeof typography.primary;
type Presets = keyof typeof $presets;

export interface TextProps extends RNTextProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath;
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: i18n.TranslateOptions;
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>;
  /**
   * One of the different types of text presets.
   */
  preset?: Presets;
  /**
   * Text weight modifier.
   */
  weight?: Weights;
  /**
   * Text size modifier.
   */
  size?: Sizes;
  /**
   * Children components.
   */
  children?: React.ReactNode;
}

const $textColor = theme("mode", {
  light: colors.palette.neutral800,
  dark: colors.palette.neutral100,
});

const $textStyles = {
  xxl: css`
    font-size: 36px;
    line-height: 44px;
  `,
  xl: css`
    font-size: 24px;
    line-height: 34px;
  `,
  lg: css`
    font-size: 20px;
    line-height: 32px;
  `,
  md: css`
    font-size: 18px;
    line-height: 26px;
  `,
  sm: css`
    font-ize: 16px;
    line-height: 24px;
  `,
  xs: css`
    font-size: 14px;
    line-height: 21px;
  `,
  xxs: css`
    font-size: 12px;
    lineheight: 18px;
  `,
};

const $fontWeightStyles = Object.entries(typography.primary).reduce((acc, [weight, fontFamily]) => {
  return {
    ...acc,
    [weight]: css`
      font-family: ${fontFamily};
    `,
  };
}, {}) as Record<Weights, FlattenSimpleInterpolation>;

const $presets = {
  default: css``,

  bold: css`
    ${$fontWeightStyles.bold};
  `,

  heading: css`
    ${$textStyles.xxl};
    ${$fontWeightStyles.bold};
  `,

  subheading: css`
    ${$textStyles.lg};
    ${$fontWeightStyles.medium};
  `,

  formLabel: css`
    ${$fontWeightStyles.medium};
  `,

  formHelper: css`
    ${$fontWeightStyles.normal};
  `,
};

const $baseStyle = css`
  ${$textStyles.sm};
  ${$fontWeightStyles.normal};
  color: ${$textColor};
`;

const TextComponent = (props: TextProps) => {
  const { tx, txOptions, text, children, style, ...rest } = props;

  const $style = [$rtlStyle, style];
  const i18nText = tx && translate(tx, txOptions);
  const content = i18nText || text || children;

  return (
    <RNText style={$style} {...rest}>
      {content}
    </RNText>
  );
};

export const Text = styled(TextComponent)`
  ${$baseStyle};
  ${(props) => $presets[props.preset || "default"]};
  ${(props) => $fontWeightStyles[props.weight]};
  ${(props) => $textStyles[props.size]};
`;

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Text.md)
 */
// export function Text(props: TextProps) {
//   const { weight, size, tx, txOptions, text, children, style: $styleOverride, ...rest } = props;

//   const i18nText = tx && translate(tx, txOptions);
//   const content = i18nText || text || children;

//   const preset: Presets = $presets[props.preset] ? props.preset : "default";
//   const $styles = [
//     $rtlStyle,
//     $presets[preset],
//     $fontWeightStyles[weight],
//     $sizeStyles[size],
//     $styleOverride,
//   ];

//   return (
//     <RNText {...rest} style={$styles}>
//       {content}
//     </RNText>
//   );
// }

// const $sizeStyles = {
//   xxl: { fontSize: 36, lineHeight: 44 } as TextStyle,
//   xl: { fontSize: 24, lineHeight: 34 } as TextStyle,
//   lg: { fontSize: 20, lineHeight: 32 } as TextStyle,
//   md: { fontSize: 18, lineHeight: 26 } as TextStyle,
//   sm: { fontSize: 16, lineHeight: 24 } as TextStyle,
//   xs: { fontSize: 14, lineHeight: 21 } as TextStyle,
//   xxs: { fontSize: 12, lineHeight: 18 } as TextStyle,
// };

// const $fontWeightStyles = Object.entries(typography.primary).reduce((acc, [weight, fontFamily]) => {
//   return { ...acc, [weight]: { fontFamily } };
// }, {}) as Record<Weights, TextStyle>;

// const $baseStyle: StyleProp<TextStyle> = [
//   $sizeStyles.sm,
//   $fontWeightStyles.normal,
//   { color: colors.text },
// ];

// const $presets = {
//   default: $baseStyle,

//   bold: [$baseStyle, $fontWeightStyles.bold] as StyleProp<TextStyle>,

//   heading: [$baseStyle, $sizeStyles.xxl, $fontWeightStyles.bold] as StyleProp<TextStyle>,

//   subheading: [$baseStyle, $sizeStyles.lg, $fontWeightStyles.medium] as StyleProp<TextStyle>,

//   formLabel: [$baseStyle, $fontWeightStyles.medium] as StyleProp<TextStyle>,

//   formHelper: [$baseStyle, $sizeStyles.sm, $fontWeightStyles.normal] as StyleProp<TextStyle>,
// };

const $rtlStyle: TextStyle = isRTL ? { writingDirection: "rtl" } : {};
