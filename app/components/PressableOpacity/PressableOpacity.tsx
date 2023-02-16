import { useOpacityAnimationStyle } from "@hooks"
import React from "react"
import { Pressable, PressableProps } from "react-native"
import Animated from "react-native-reanimated"

export interface PressableOpacityProps extends PressableProps {
  activeOpacity?: number
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export function PressableOpacity({ activeOpacity = 0.2, ...props }: PressableOpacityProps) {
  const [animatedStyle, animate] = useOpacityAnimationStyle(1)

  return (
    <AnimatedPressable
      {...props}
      onPressIn={(event) => {
        animate(activeOpacity)
        props.onPressIn?.(event)
      }}
      onPressOut={(event) => {
        animate(1)
        props.onPressOut?.(event)
      }}
      style={[props.style, animatedStyle]}
    >
      {props.children}
    </AnimatedPressable>
  )
}
