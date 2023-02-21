import React from "react"
import { ColorValue } from "react-native"
import Svg, {
  SvgProps,
  Defs,
  LinearGradient as RNSvgLinearGradient,
  Stop,
  Rect,
} from "react-native-svg"

interface Point {
  x: number
  y: number
}

export interface LinearGradientProps extends SvgProps {
  colors: ColorValue[]
  start?: Point
  end?: Point
}

export const LinearGradient = ({
  colors = [],
  start = { x: 0, y: 0.5 },
  end = { x: 1, y: 0.5 },
  ...props
}: LinearGradientProps) => {
  return colors.length ? (
    <Svg height="100%" width="100%" preserveAspectRatio="xMinYMin slice" {...props}>
      <Defs>
        <RNSvgLinearGradient id="gradient" x1={start.x} y1={start.y} x2={end.x} y2={end.y}>
          {colors.map((color, index, array) => {
            const offset = (array.length > 1 ? index / (array.length - 1) : 0).toFixed(2)
            return <Stop key={`${index}-${color.toString()}`} offset={offset} stopColor={color} />
          })}
        </RNSvgLinearGradient>
      </Defs>
      <Rect fill="url(#gradient)" height="100%" width="100%" />
    </Svg>
  ) : null
}
