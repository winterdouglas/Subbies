import React, { useEffect } from "react"
import { Pressable, PressableProps, ViewStyle } from "react-native"
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated"
import { useAnimationSpeed } from "@hooks"

export interface PressableScaleProps extends PressableProps {
  activeScale?: number
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export function PressableScale({ activeScale = 0.96, ...props }: PressableScaleProps) {
  const [animatedStyle, animate] = useScaleAnimationStyle(1)

  return (
    <AnimatedPressable
      {...props}
      onPressIn={(event) => {
        animate(activeScale)
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

function useScaleAnimationStyle(initialValue: number): [ViewStyle, (to: number) => void] {
  const scale = useSharedValue(initialValue)
  const [_animationSpeed, reduceMotion] = useAnimationSpeed()

  const animatedStyle = useAnimatedStyle((): ViewStyle => {
    return {
      transform: [{ scale: scale.value }],
    }
  })

  function animate(to: number) {
    if (reduceMotion) return

    scale.value = withSpring(to, {
      mass: 0.1,
      stiffness: 90,
    })
  }

  useEffect(() => {
    return () => cancelAnimation(scale)
  }, [])

  return [animatedStyle, animate]
}
