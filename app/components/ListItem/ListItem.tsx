import React, { ComponentType, ReactElement } from "react"
import { PressableProps, StyleProp, TextStyle, View, ViewProps, ViewStyle } from "react-native"
import { colors, spacing } from "@theme"
import { Icon, IconTypes } from "../Icon"
import { Text, TextProps } from "../Text"
import { PressableOpacity } from "../PressableOpacity"

export interface ListItemProps<
  TPressableProps extends PressableProps,
  TBackgroundProps extends ViewProps,
> {
  /**
   * How tall the list item should be.
   * Default: 56
   */
  height?: number
  /**
   * Whether to show the top separator.
   * Default: false
   */
  topSeparator?: boolean
  /**
   * Whether to show the bottom separator.
   * Default: false
   */
  bottomSeparator?: boolean
  /**
   * Text to display if not using `tx` or nested components.
   */
  text?: TextProps["text"]
  /**
   * Text which is looked up via i18n.
   */
  tx?: TextProps["tx"]
  /**
   * Whether the list item is round or not
   */
  round?: boolean
  /**
   * Children components.
   */
  children?: TextProps["children"]
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: TextProps["txOptions"]
  /**
   * Optional text style override.
   */
  textStyle?: StyleProp<TextStyle>
  /**
   * Pass any additional props directly to the Text component.
   */
  TextProps?: TextProps
  /**
   * Optional View container style override.
   */
  containerStyle?: StyleProp<ViewStyle>
  /**
   * Optional PressableOpacity style override.
   */
  style?: StyleProp<ViewStyle>
  /**
   * Icon that should appear on the left.
   */
  leftIcon?: IconTypes
  /**
   * An optional tint color for the left icon
   */
  leftIconColor?: string
  /**
   * Icon that should appear on the right.
   */
  rightIcon?: IconTypes
  /**
   * An optional tint color for the right icon
   */
  rightIconColor?: string
  /**
   * Right action custom ReactElement.
   * Overrides `rightIcon`.
   */
  RightComponent?: ReactElement
  /**
   * Left action custom ReactElement.
   * Overrides `leftIcon`.
   */
  LeftComponent?: ReactElement
  /**
   * Custom background view
   */
  BackgroundComponent?: ComponentType<TBackgroundProps>
  /**
   * Custom background view props
   */
  backgroundProps?: TBackgroundProps
  /**
   * Custom pressable
   */
  PressableComponent?: ComponentType<TPressableProps>
  /**
   * Custom pressable props
   */
  pressableProps?: TPressableProps
}

interface ListItemActionProps {
  icon: IconTypes
  iconColor?: string
  Component?: ReactElement
  size: number
  side: "left" | "right"
}

/**
 * A styled row component that can be used in FlatList, SectionList, or by itself.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-ListItem.md)
 */
export function ListItem<
  TPressableProps extends PressableProps,
  TBackgroundProps extends ViewProps,
>({
  bottomSeparator,
  children,
  height = 56,
  LeftComponent,
  leftIcon,
  leftIconColor,
  RightComponent,
  rightIcon,
  rightIconColor,
  style,
  text,
  TextProps,
  topSeparator,
  tx,
  txOptions,
  BackgroundComponent,
  backgroundProps,
  round,
  textStyle: $textStyleOverride,
  containerStyle: $containerStyleOverride,
  PressableComponent,
  pressableProps,
}: ListItemProps<TPressableProps, TBackgroundProps>) {
  const $textStyles = [$textStyle, $textStyleOverride, TextProps?.style]

  const $containerStyles = [
    topSeparator && $separatorTop,
    bottomSeparator && $separatorBottom,
    $containerStyleOverride,
  ]

  const $pressableStyles = [$pressableStyle, round && $roundStyle, { minHeight: height }, style]

  const $backgroundStyles = [$backgroundStyle, backgroundProps?.style]

  const Pressable = PressableComponent || PressableOpacity

  return (
    <View style={$containerStyles}>
      <Pressable {...pressableProps} style={$pressableStyles}>
        {BackgroundComponent && (
          <BackgroundComponent style={$backgroundStyles} {...backgroundProps} />
        )}

        <ListItemAction
          side="left"
          size={height}
          icon={leftIcon}
          iconColor={leftIconColor}
          Component={LeftComponent}
        />

        <Text {...TextProps} tx={tx} text={text} txOptions={txOptions} style={$textStyles}>
          {children}
        </Text>

        <ListItemAction
          side="right"
          size={height}
          icon={rightIcon}
          iconColor={rightIconColor}
          Component={RightComponent}
        />
      </Pressable>
    </View>
  )
}

function ListItemAction(props: ListItemActionProps) {
  const { icon, Component, iconColor, size, side } = props

  const $iconContainerStyles = [$iconContainer]

  if (Component) return Component

  if (icon) {
    return (
      <Icon
        size={24}
        icon={icon}
        color={iconColor}
        containerStyle={[
          $iconContainerStyles,
          side === "left" && $iconContainerLeft,
          side === "right" && $iconContainerRight,
          { height: size },
        ]}
      />
    )
  }

  return null
}

const $separatorTop: ViewStyle = {
  borderTopWidth: 1,
  borderTopColor: colors.separator,
}

const $separatorBottom: ViewStyle = {
  borderBottomWidth: 1,
  borderBottomColor: colors.separator,
}

const $roundStyle: ViewStyle = {
  borderRadius: 8,
  overflow: "hidden",
}

const $textStyle: TextStyle = {
  paddingVertical: spacing.extraSmall,
  alignSelf: "center",
  flexGrow: 1,
  flexShrink: 1,
  marginHorizontal: spacing.medium,
}

const $pressableStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "flex-start",
}

const $iconContainer: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 0,
}

const $iconContainerLeft: ViewStyle = {
  marginStart: spacing.medium,
}

const $iconContainerRight: ViewStyle = {
  marginEnd: spacing.medium,
}

const $backgroundStyle: ViewStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
}
