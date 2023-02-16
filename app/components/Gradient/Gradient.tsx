import React from "react"
import { ColorValue } from "react-native"
import Svg, { SvgProps, Defs, LinearGradient, Stop, Rect } from "react-native-svg"

interface GradientProps extends SvgProps {
  colors: ColorValue[]
}

export const Gradient = ({ colors = [], ...props }: GradientProps) => {
  return colors.length ? (
    <Svg height="100%" width="100%" preserveAspectRatio="xMinYMin slice" {...props}>
      <Defs>
        <LinearGradient id="gradient" x1={0} y1={0.5} x2={1} y2={0.5}>
          {colors.map((color, index, array) => {
            const offset = (array.length > 1 ? index / (array.length - 1) : 0).toFixed(2)
            return <Stop key={`${index}-${color.toString()}`} offset={offset} stopColor={color} />
          })}
        </LinearGradient>
      </Defs>
      <Rect fill="url(#gradient)" height="100%" width="100%" />
    </Svg>
  ) : null
}
