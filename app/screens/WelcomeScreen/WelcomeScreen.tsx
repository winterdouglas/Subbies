import React from "react"
import { List, Screen } from "@components"
import { AppStackScreenProps } from "@navigators"
import { useHeader } from "@hooks"
import { hexToHSL, toHSLString } from "@utils/colorUtils"
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/dist/glyphmaps/Ionicons.json';

type IoniconsIconNames = keyof typeof Ionicons;

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

const items = [
  { title: "Whatever", color: "#FF9800" },
  { title: "Another cool item", color: "#F44336" },
]

export const WelcomeScreen = function WelcomeScreen(_props: WelcomeScreenProps) {
  useHeader({
    title: "Subbies",
  })

  return (
    <Screen preset="fixed" safeAreaEdges={["bottom"]}>
      <List
        preset="gradient"
        data={items}
        keyExtractor={(item) => item.title}
        getGradientProps={(item) => {
          const color = hexToHSL(item.color)
          const gradientStart = toHSLString(color)
          const gradientEnd = toHSLString({ ...color, l: Math.min(color.l + color.l * 0.2, 100) })

          return {
            colors: [gradientStart, gradientEnd],
          }
        }}
        getItemProps={(item) => {
          return {
            text: item.title,
            leftIcon: "github",
            rightIcon: "caretRight",
          }
        }}
      />
    </Screen>
  )
}
