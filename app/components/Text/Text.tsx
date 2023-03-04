import React from "react";
import i18n from "i18n-js";
import { StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native";

import styled, { css } from "styled-components/native";
import { FlattenSimpleInterpolation } from "styled-components";

import { isRTL, translate, TxKeyPath } from "@lib/i18n";
import { typography } from "@theme";

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
    font-size: 16px;
    line-height: 24px;
  `,
  xs: css`
    font-size: 14px;
    line-height: 21px;
  `,
  xxs: css`
    font-size: 12px;
    line-height: 18px;
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

const $rtlStyle: TextStyle = isRTL ? { writingDirection: "rtl" } : {};

const TextComponent = ({ tx, txOptions, text, children, style, ...rest }: TextProps) => {
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
  ${$textStyles.sm};
  ${$fontWeightStyles.normal};
  ${(props) => props.theme.colors["text-basic-color"]}
  ${(props) => $presets[props.preset || "default"]};
  ${(props) => $fontWeightStyles[props.weight]};
  ${(props) => $textStyles[props.size]};
`;
