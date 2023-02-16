import { ViewStyle } from "react-native"
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { useAnimationSpeed } from "./useAnimationSpeed"

export function useOpacityAnimationStyle(initialValue: number): [ViewStyle, (to: number) => void] {
  const opacity = useSharedValue(initialValue)
  const animationSpeed = useAnimationSpeed()

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    }
  })

  function animate(to: number) {
    opacity.value = withTiming(to, {
      duration: animationSpeed,
    })
  }

  return [animatedStyle, animate]
}
