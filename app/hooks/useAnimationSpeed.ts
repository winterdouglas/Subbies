import { useEffect, useState } from "react"
import { AccessibilityInfo } from "react-native"
import { timing } from "@theme"

/**
 * A hook that provides the the animation speed, respecting whether the user preferred reduced motion.
 * @returns An array with the animation speed and whether reduce motion is enabled or not.
 */
export function useAnimationSpeed(): [number, boolean] {
  const [reduceMotionEnabled, setReduceMotionEnabled] = useState(false)
  const animationSpeed = reduceMotionEnabled ? timing.disabled : timing.quick

  useEffect(() => {
    const reduceMotionChangedSubscription = AccessibilityInfo.addEventListener(
      "reduceMotionChanged",
      (isReduceMotionEnabled) => setReduceMotionEnabled(isReduceMotionEnabled),
    )

    AccessibilityInfo.isReduceMotionEnabled().then((isReduceMotionEnabled) => {
      setReduceMotionEnabled(isReduceMotionEnabled)
    })

    return () => {
      reduceMotionChangedSubscription.remove()
    }
  }, [])

  return [animationSpeed, reduceMotionEnabled]
}
