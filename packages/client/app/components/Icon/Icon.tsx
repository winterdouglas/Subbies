import * as React from "react";
import { ComponentType } from "react";
import { ColorValue, StyleProp, View, ViewStyle } from "react-native";
import { PressableOpacity, PressableOpacityProps } from "../PressableOpacity";
import Ionicon from "react-native-vector-icons/Ionicons";
import IoniconIconNames from "react-native-vector-icons/dist/glyphmaps/Ionicons.json";
import { useTheme } from "@hooks/useTheme";

export type IconTypes = keyof typeof IoniconIconNames;

interface IconProps extends PressableOpacityProps {
  /**
   * The name of the icon
   */
  icon: IconTypes;

  /**
   * An optional tint color for the icon
   */
  color?: ColorValue;

  /**
   * An optional size for the icon.
   * Default: 24
   */
  size?: number;

  /**
   * Style overrides for the icon
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: PressableOpacityProps["onPress"];
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <PressableOpacity /> if `onPress` is provided, otherwise a <View />.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md)
 */
export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size = 24,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props;
  const { theme } = useTheme();

  const isPressable = !!WrapperProps.onPress;
  const Wrapper: ComponentType<PressableOpacityProps> = WrapperProps?.onPress
    ? PressableOpacity
    : View;

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}>
      <Ionicon
        style={$imageStyleOverride}
        name={icon}
        size={size}
        color={color || theme["text-basic-color"]}
      />
    </Wrapper>
  );
}
