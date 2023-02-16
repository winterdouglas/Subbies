import { timing } from "@theme"
import { useEffect, useState } from "react"
import { AccessibilityInfo } from "react-native"

export function useAnimationSpeed() {
  const [reduceMotionEnabled, setReduceMotionEnabled] = useState(false)

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

  return reduceMotionEnabled ? timing.disabled : timing.quick
}
