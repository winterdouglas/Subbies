import React, { ComponentType } from "react";
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { spacing, typography } from "@theme";
import { Text, TextProps } from "../Text";
import { useTheme } from "@hooks/useTheme";

export interface ButtonAccessoryProps {
  style: StyleProp<any>;
  pressableState: PressableStateCallbackType;
}

export interface ButtonProps extends PressableProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TextProps["tx"];
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: TextProps["text"];
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: TextProps["txOptions"];
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * An optional style override for the "pressed" state.
   */
  pressedStyle?: StyleProp<ViewStyle>;
  /**
   * An optional style override for the button text.
   */
  textStyle?: StyleProp<TextStyle>;
  /**
   * An optional style override for the button text when in the "pressed" state.
   */
  pressedTextStyle?: StyleProp<TextStyle>;

  appearance?: "primary" | "success" | "info" | "warning" | "danger" | "basic";
  /**
   * An optional component to render on the right side of the text.
   * Example: `RightAccessory={(props) => <View {...props} />}`
   */
  RightAccessory?: ComponentType<ButtonAccessoryProps>;
  /**
   * An optional component to render on the left side of the text.
   * Example: `LeftAccessory={(props) => <View {...props} />}`
   */
  LeftAccessory?: ComponentType<ButtonAccessoryProps>;
  /**
   * Children components.
   */
  children?: React.ReactNode;
}

/**
 * A component that allows users to take actions and make choices.
 * Wraps the Text component with a Pressable component.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Button.md)
 */
export function Button(props: ButtonProps) {
  const {
    tx,
    text,
    txOptions,
    style: $viewStyleOverride,
    pressedStyle: $pressedViewStyleOverride,
    textStyle: $textStyleOverride,
    pressedTextStyle: $pressedTextStyleOverride,
    appearance = "basic",
    children,
    RightAccessory,
    LeftAccessory,
    ...rest
  } = props;

  const { mode, theme } = useTheme();
  const isDark = mode === "dark";

  function $viewStyle({ pressed }: PressableStateCallbackType): StyleProp<ViewStyle> {
    return [
      $baseViewStyle,
      {
        borderColor: theme[`color-${appearance}-default-border`],
        backgroundColor: theme[`color-${appearance}-default`],
      },
      $viewStyleOverride,
      !!pressed && [
        {
          borderColor: theme[`color-${appearance}-active-border`],
          backgroundColor: theme[`color-${appearance}-active`],
        },
        $pressedViewStyleOverride,
      ],
    ];
  }

  function $textStyle({ pressed }: PressableStateCallbackType): StyleProp<TextStyle> {
    return [
      $baseTextStyle,
      {
        color:
          appearance === "basic"
            ? theme[`text-${isDark ? "alternate" : "basic"}-color`]
            : theme["text-control-color"],
      },
      $textStyleOverride,
      !!pressed && $pressedTextStyleOverride,
    ];
  }

  return (
    <Pressable style={$viewStyle} accessibilityRole="button" {...rest}>
      {(state) => (
        <>
          {!!LeftAccessory && <LeftAccessory style={$leftAccessoryStyle} pressableState={state} />}

          <Text tx={tx} text={text} txOptions={txOptions} style={$textStyle(state)}>
            {children}
          </Text>

          {!!RightAccessory && (
            <RightAccessory style={$rightAccessoryStyle} pressableState={state} />
          )}
        </>
      )}
    </Pressable>
  );
}

const $baseViewStyle: ViewStyle = {
  minHeight: 56,
  borderWidth: 1,
  borderRadius: 4,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  paddingVertical: spacing.small,
  paddingHorizontal: spacing.small,
  overflow: "hidden",
  gap: 10,
};

const $baseTextStyle: TextStyle = {
  fontSize: 16,
  lineHeight: 20,
  fontFamily: typography.primary.medium,
  textAlign: "center",
  flexShrink: 1,
  flexGrow: 0,
  zIndex: 2,
};

const $rightAccessoryStyle: ViewStyle = { marginStart: spacing.extraSmall, zIndex: 1 };
const $leftAccessoryStyle: ViewStyle = { marginEnd: spacing.extraSmall, zIndex: 1 };
