import React from "react"
import { View, ViewStyle } from "react-native"
import { LinearGradient, ListItem, Screen } from "@components"
import { FlashList } from "@shopify/flash-list"
import { spacing } from "@theme"
import { AppStackScreenProps } from "@navigators"
import { hexToHSL, toHSLString } from "@utils/colorUtils"
import * as icons from "simple-icons"
import { SvgXml } from "react-native-svg"

const allIcons = Object.values(icons)

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen = function WelcomeScreen(_props: WelcomeScreenProps) {
  return (
    <Screen preset="fixed" safeAreaEdges={["top", "bottom"]}>
      <FlashList
        contentContainerStyle={$listContainer}
        data={allIcons}
        ItemSeparatorComponent={Separator}
        estimatedItemSize={72}
        renderItem={({ item }) => {
          const { title, svg, hex } = item
          const color = hexToHSL(`#${hex}`)
          const gradientStart = toHSLString(color)
          const gradientEnd = toHSLString({ ...color, l: Math.min(color.l - color.l * 0.2, 100) })

          return (
            <ListItem
              text={title}
              round
              BackgroundComponent={LinearGradient}
              backgroundProps={{
                colors: [gradientEnd, gradientStart],
                // start: { x: 1, y: 0 },
                // end: { x: 0.2, y: 0 },
              }}
              LeftComponent={
                <SvgXml
                  style={{ marginHorizontal: 16, alignSelf: "center" }}
                  xml={svg}
                  fill="white"
                  width={24}
                  height={24}
                />
              }
              rightIcon="caretRight"
              textStyle={{ color: "white" }}
              rightIconColor="white"
            />
          )
        }}
      />
    </Screen>
  )
}

export const Separator = () => {
  return <View style={$separator}></View>
}

const $listContainer: ViewStyle = {
  padding: spacing.medium,
}

const $separator: ViewStyle = {
  height: spacing.medium,
}
