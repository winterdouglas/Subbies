import React, { useEffect } from "react";
import { Pressable, PressableProps, ViewStyle } from "react-native";
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useAnimationSpeed } from "@hooks/useAnimationSpeed";

export interface PressableOpacityProps extends PressableProps {
  activeOpacity?: number;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function PressableOpacity({ activeOpacity = 0.8, ...props }: PressableOpacityProps) {
  const [animatedStyle, animate] = useOpacityAnimationStyle(1);

  return (
    <AnimatedPressable
      {...props}
      onPressIn={(event) => {
        animate(activeOpacity);
        props.onPressIn?.(event);
      }}
      onPressOut={(event) => {
        animate(1);
        props.onPressOut?.(event);
      }}
      style={[props.style, animatedStyle]}>
      {props.children}
    </AnimatedPressable>
  );
}

function useOpacityAnimationStyle(initialValue: number): [ViewStyle, (to: number) => void] {
  const opacity = useSharedValue(initialValue);
  const [animationSpeed] = useAnimationSpeed();

  const animatedStyle = useAnimatedStyle((): ViewStyle => {
    return {
      opacity: opacity.value,
    };
  });

  function animate(to: number) {
    opacity.value = withTiming(to, {
      duration: animationSpeed,
    });
  }

  useEffect(() => {
    return () => cancelAnimation(opacity);
  }, []);

  return [animatedStyle, animate];
}
